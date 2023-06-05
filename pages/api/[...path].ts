// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
//Chức năng chính của httpProxy là chuyển tiếp yêu cầu HTTP từ 1 máy khách đến 1 máy chủ khác.
import httpProxy from 'http-proxy';

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
    //ko gửi cookie tới phía server
    //api/students
    //https://js-post-api.herokuapp.com/api/sutdents
    req.headers.cookie = '';
    proxy.web(req, res, {
        //.env.local chỉ được định nghĩa cho biến môi trường phát triển (run dev)
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false,
    });
    // res.status(200).json({ name: 'John Doe' });
}
