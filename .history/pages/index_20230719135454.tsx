import { Seo } from '@/components/common/seo';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPageWithLayout = () => {
    // const router = useRouter();

    // function goToDetailPage() {
    //     router.push({
    //         pathname: '/posts/[postId]',
    //         query: {
    //             postId: 123,
    //             ref: 'social',
    //         },
    //     });
    // }

    return (
        <Box>
            <Seo
                data={{
                    title: 'NextJS with MUI',
                    description: 'SEO',
                    thumbnailUrl:
                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1671014272/Qu%E1%BA%A3ng%20Ninh/9fa8099b2c31f56fac20_zcnokd.jpg',
                    url: 'https://learn-next-js-brown.vercel.app/',
                }}
            />
            <HeroSection />
            <RecentPosts />
            <FeaturedWorks />
        </Box>
    );
};
// tk nào xài thì chỉ định MainLayout
Home.Layout = MainLayout;

export default Home;
