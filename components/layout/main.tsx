import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';
import { Footer } from '../common';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../common/header').then((mod) => mod.Header), { ssr: false });
export function MainLayout({ children }: LayoutProps) {
    return (
        //stack là khi bạn muốn xếp chồng các phần tử ngang,dọc. Nó giống như flexbox
        <Stack minHeight="100vh" bgcolor="#FFFFFF">
            <Header />

            <Box component="main" flexGrow={1}>
                {children}
            </Box>

            <Footer />
        </Stack>
    );
}
