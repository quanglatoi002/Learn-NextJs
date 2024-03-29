import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Header from '@/components/common/header';
import { AdminLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
//sử dụng dynamic ssr=false cho trường hợp bạn chỉ muốn nó render ở phía clients
const Header = dynamic(() => import('@/components/common/header'), { ssr: false });
export interface AboutPageProps {}

// lúc đầu kết quả trả về bên phía clients
// About query {} sẽ là 1 object rỗng
// router.query empty when pre-rendering, update after hydration và output đầu ra là HTML
export default function AboutPage(props: AboutPageProps) {
    const [postList, setPostList] = useState([]);
    const router = useRouter();
    console.log('About query', router.query);
    const page = router.query?.page;
    useEffect(() => {
        if (!page) return;
        (async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}`
            );
            const data = await response.json();
            setPostList(data);
        })();
    }, [page]);
    function handleNextClick() {
        router.push(
            {
                pathname: '/about',
                query: {
                    page: (Number(page) || 1) + 1,
                },
            },
            undefined,
            //shallow: true là chỉ update bên phía client thôi
            { shallow: true }
        );
    }
    return (
        <Box
            sx={{
                pt: 2,
                bgcolor: 'background.paper',
                width: 300,
                border: 1,
                borderColor: 'primary.main',
            }}
        >
            <Typography component="h1" variant="h5" color="primary.main">
                About Page
            </Typography>
            <Header />
            <ul className="post-list">
                {postList.map((item: any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <button onClick={handleNextClick}>Next page</button>
        </Box>
    );
}
AboutPage.Layout = AdminLayout;
export async function getStaticProps() {
    console.log('get static props');
    return {
        props: {},
    };
}
//Sau khi use getServerSideProps output đầu ra là file JS
// export async function getServerSideProps() {
//   return {
//     props: { message: `Next.js is awesome` }, // will be passed to the page component as props
//   };
// }
