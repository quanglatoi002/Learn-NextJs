import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/posts';
import { GetStaticProps } from 'next';
import { Box, Container, Divider, Link } from '@mui/material';
import { Post } from '@/models';
export interface BlogListPageProps {
    posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
    //sau khi nhận được kq trả thì destructuring để lấy ra posts của BlogListPageProps
    console.log('posts', posts);
    return (
        <Box>
            <Container>
                <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.slug}`}>
                                <PostItem post={post} />
                            </Link>
                            <Divider sx={{ my: 3 }} />
                        </li>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
    //convert markdown files into list of Js objects
    const postList = await getPostList();
    //sau khi nhận kết quả thì return kết quả vào posts nằm bên trong BlogListPageProps
    return {
        props: {
            posts: postList,
        },
    };
};
