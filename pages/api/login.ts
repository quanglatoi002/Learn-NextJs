// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
//Chức năng chính của httpProxy là chuyển tiếp yêu cầu HTTP từ 1 máy khách đến 1 máy chủ khác.
import httpProxy, { ProxyReqCallback } from 'http-proxy';
import Cookies from 'cookies';
import { IncomingMessage, ServerResponse } from 'http';

type Data = {
    message: string;
};

// để có thể tự xử lý nội dung yêu cầu trong hàm xử lý của router(ví dụ bên postman)
export const config = {
    api: {
        //bodyParser: false, nghĩa là việc phân tích cú pháp cho các dữ liệu đầu vào không được thực hiện tự động
        bodyParser: false,
    },
};
const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'method not supported' });
    }

    return new Promise((resolve) => {
        //ko gửi cookie tới phía server
        req.headers.cookie = '';
        //ProxyReqCallback được phép can thiệp vào quá tình xử lý yêu cầu proxy trước khi gửi đến server target
        //proxyRes:IncomingMessage
        const handleLoginResponse: ProxyReqCallback = (proxyRes: IncomingMessage, req, res) => {
            let body = '';
            proxyRes.on('data', function (chunk) {
                body += chunk;
            });
            //Xử lý dữ liệu từ phản hồi
            proxyRes.on('end', function () {
                try {
                    //proxyRes.statusCode
                    const isSuccess =
                        proxyRes.statusCode &&
                        proxyRes.statusCode >= 200 &&
                        proxyRes.statusCode < 300;
                    console.log(isSuccess);
                    if (!isSuccess) {
                        (res as NextApiResponse).status(proxyRes.statusCode || 500).json({ body });
                        return resolve(true);
                    }
                    const { accessToken, expiredAt } = JSON.parse(body);
                    //convert token to cookies
                    const cookies = new Cookies(req, res, {
                        secure: process.env.NODE_ENV !== 'development',
                    });
                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiredAt),
                    });
                    (res as NextApiResponse).status(200).json({ message: 'login successful' });
                } catch (error) {
                    (res as NextApiResponse).status(500).json({ message: 'something went wrong' });
                }
                resolve(true);
            });
        };
        // sự kiện proxyRes, khi client req forward the "target" server and the "target" server send back a res, lúc này "proxyRes" được kích hoạt

        proxy.once('proxyRes', (proxyRes: any) => handleLoginResponse(proxyRes, req, res, {}));
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    });
}
