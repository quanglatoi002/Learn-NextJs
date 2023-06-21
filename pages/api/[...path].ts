// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
//Chức năng chính của httpProxy là chuyển tiếp yêu cầu HTTP từ 1 máy khách đến 1 máy chủ khác.
import httpProxy from 'http-proxy';
import Cookies from 'cookies';
// type Data = {
//   name: string
// }

// để có thể tự xử lý nội dung yêu cầu trong hàm xử lý của router(ví dụ bên postman)
export const config = {
    api: {
        //bodyParser được sử dụng để phân tích và xử lý nội dung yêu cầu HTTP như dữ liệu form hoặc JSON
        bodyParser: false,
    },
};
const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    return new Promise((resolve) => {
        ////convert cookies to header authorization
        const cookies = new Cookies(req, res);
        const accessToken = cookies.get('access_token');
        if (accessToken) {
            req.headers.Authorization = `Bearer ${accessToken}`;
        }
        //ko gửi cookie tới phía server
        //api/students
        //https://js-post-api.herokuapp.com/api/sutdents
        req.headers.cookie = '';
        //Nếu như bạn có nhu cầu giao tiếp với 1 API bên ngoài hoặc 1 máy chủ khác trong quá trình phát triển. Có thể dùng "proxy.web" để chuyển hướng các yêu cầu HTTP của ứng dụng từ máy chủ phát triển tới 1 máy chủ khác
        proxy.web(req, res, {
            //.env.local chỉ được định nghĩa cho biến môi trường phát triển (run dev)
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false, // điều này có nghĩa là Next.js sẽ tiếp tục xử lý phản hồi từ máy chủ phía Next.js và trả kết quả cho trình duyệt mà ko yêu cầu ứng dụng của bạn thực hiện xử lý phản hồi.
        });
        //once chỉ bắt sự kiện 1 lần duy nhất
        proxy.once('proxyRes', () => {
            // res.status(200).json({ name: 'John Doe' });
            resolve(true);
        });
        // res.status(200).json({ name: 'John Doe' });
    });
}

// quá trình hoạt động
//browser:localhost:3000/api/students
//Next server: /api/works --> proxy to //https://js-post-api.herokuapp.com/api/sutdents
//API server: //https://js-post-api.herokuapp.com/api/sutdents
