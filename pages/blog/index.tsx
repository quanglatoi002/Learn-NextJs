import { getPostList } from '@/utils/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
    posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
    //sau khi nhận được kq trả thì destructuring để lấy ra posts của BlogListPageProps
    console.log('posts', posts);
    return (
        <div>
            Blog List Page
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <h4>{post.title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

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
