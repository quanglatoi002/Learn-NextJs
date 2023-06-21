import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

type Repo = {
    name: string;
    stargazers_count: number;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        //hàm này trả về 1 đối tượng có thuộc tính 'paths' chứa ds các đường dẫn
        paths: [
            {
                params: {
                    name: 'next.js',
                },
            },
        ],
        fallback: false, //false kà chỉ phục vụ các đường dẫn đã được định nghĩa, ko phục vụ các đường dẫn khác
    };
};

export const getStaticProps: GetStaticProps<{
    repo: Repo;
}> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo = await res.json();
    //props chứa dữ liệu được trả về từ getStaticProps
    return { props: { repo } };
};

export default function Page({ repo }: InferGetStaticPropsType<typeof getStaticProps>) {
    return repo.stargazers_count;
}
