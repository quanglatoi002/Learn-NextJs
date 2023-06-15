import path from 'path';
import fs from 'fs';
//process.cwd trả về đường dẫn của thư mục làm việc hiện tại
const BLOG_FOLDER = path.join(process.cwd(), 'blog');
console.log('1', BLOG_FOLDER);

export async function getPostList() {
    console.log(process.cwd());
    //real all markdown files
    //method này trả về 1 mảng chứa tên của các tệp và thư mục
    //kq khi readdirSync '[ 'blog1.md', 'blog2.md', 'blog3.md' ]'
    const fileNameList = fs.readdirSync(BLOG_FOLDER);
    for (const fileName of fileNameList) {
        // kq sau khi nối fileName với BLOG_FOLDER là /Users/phamvanquang/Workspace/nextjs/learn-nextjs/blog/blog1.md
        const filePath = path.join(BLOG_FOLDER, fileName);
        //đọc kq bên trong file có gì
        const fileContent = fs.readFileSync(filePath, 'utf8');
    }

    return [];
}
