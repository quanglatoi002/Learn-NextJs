import path from 'path';
import fs from 'fs';
//process.cwd trả về đường dẫn của thư mục làm việc hiện tại
const BLOG_FOLDER = path.join(process.cwd(), 'blog');
console.log('1', BLOG_FOLDER);

export async function getPostList() {
    console.log(process.cwd());
    //real all markdown files
    //method này trả về 1 mảng chứa tên của các tệp và thư mục
    const fileNameList = fs.readdirSync(BLOG_FOLDER);

    console.log(fileNameList);
    return [];
}
