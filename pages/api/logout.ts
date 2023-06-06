// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
//Chức năng chính của httpProxy là chuyển tiếp yêu cầu HTTP từ 1 máy khách đến 1 máy chủ khác.
import httpProxy, { ProxyReqCallback } from 'http-proxy';
import Cookies from 'cookies';

type Data = {
    message: string;
};

// để có thể tự xử lý nội dung yêu cầu trong hàm xử lý của router(ví dụ bên postman)
export const config = {
    api: {
        //bodyParser được sử dụng để phân tích và xử lý nội dung yêu cầu HTTP như dữ liệu form hoặc JSON
        bodyParser: false,
    },
};
const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'method not supported' });
    }
    //remote cookies
    const cookies = new Cookies(req, res);
    cookies.set('access_token');
    res.status(200).json({ message: 'logout successfully' });
}
