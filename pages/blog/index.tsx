import { getPostList } from '@/utils/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
    posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
    return (
        <div>
            Blog List Page
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
    // console.log('static props');
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await response.json();
    // console.log(data);
    //convert markdown files into list of Js objects
    const data = await getPostList();
    console.log(data);
    return {
        props: {
            posts: data.map((x: any) => ({ id: x.id, title: x.title })),
        },
    };
};
