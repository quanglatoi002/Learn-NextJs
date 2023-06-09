import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPageWithLayout = () => {
    const router = useRouter();

    // function goToDetailPage() {
    //     router.push({
    //         pathname: '/posts/[postId]',
    //         query: {
    //             postId: 123,
    //             ref: 'social',
    //         },
    //     });
    // }

    return <Box>Homepage</Box>;
};
// tk nào xài thì chỉ định MainLayout
Home.Layout = MainLayout;

export default Home;
