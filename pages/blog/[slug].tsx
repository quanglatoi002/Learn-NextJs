import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
//paste
import { Box, Container, Divider } from '@mui/material';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import remarkPrism from 'remark-prism';
import Script from 'next/script';
import { Seo } from '@/components/common/seo';
import remarkImages from 'remark-images';

export interface BlogPageProps {
    post: Post;
}
export default function PostDetailPage({ post }: BlogPageProps) {
    const DEFAULT_IMG =
        'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
    console.log(post);
    if (!post) return null;
    //để hiển thị nội dung  HTML trong TSX chúng ta sử dụng thuộc tính dangerouslySetInnerHTML
    return (
        <Box>
            <Seo
                data={{
                    title: post.title,
                    description: post.description,
                    url: `${process.env.HOST_URL}/blog/${post.slug}`,
                    thumbnailUrl: post.thumbnailUrl || DEFAULT_IMG,
                }}
            />
            <Container>
                <p>{post.title}</p>
                <p>{post.author?.name}</p>
                <p>{post.description}</p>
                {/* <p>{post.mdContent}</p> */}
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
            </Container>
            <Script src="/prism.js" strategy="afterInteractive"></Script>
        </Box>
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
        .use(remarkToc, { heading: 'quang.*' })
        .use(remarkPrism, { plugins: ['line-numbers'] })
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
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
