import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
//paste
import { Container, Divider } from '@mui/material';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
export interface BlogPageProps {
    post: Post;
}
export default function PostDetailPage({ post }: BlogPageProps) {
    if (!post) return null;
    //để hiển thị nội dung  HTML trong TSX chúng ta sử dụng thuộc tính dangerouslySetInnerHTML
    return (
        <Container>
            <h1>Blog Detail Page</h1>
            <p>{post.title}</p>
            <p>{post.author?.name}</p>
            <p>{post.description}</p>
            {/* <p>{post.mdContent}</p> */}

            <Divider />
            <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
        </Container>
    );
}
export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList();
    return {
        paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false, // nếu fallback lúc này là false thì sẽ thông báo lỗi 404 vì đường dẫn không được định nghĩa trong path. True và blocking đều giống nhau
    };
};
// để có thể lấy dữ liệu từ getStaticPath thì cần phải có context trong GetStaticPropsContext
// ví dụ cái postList trả về 3 phần tử thì tk getStaticProps post chạy 3 lần
export const getStaticProps: GetStaticProps<BlogPageProps> = async (
    context: GetStaticPropsContext
) => {
    const postList = await getPostList();
    const slug = context.params?.slug;
    if (!slug) return { notFound: true };
    const post = postList.find((x) => x.slug === slug);

    if (!post) return { notFound: true };
    //parse md to html
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: 'Blog' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '');
    post.htmlContent = file.toString();
    return {
        props: {
            post,
        },
    };
};
