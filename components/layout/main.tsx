import { LayoutProps } from '@/models';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
    return (
        //stack là khi bạn muốn xếp chồng các phần tử ngang,dọc. Nó giống như flexbox
        <Stack minHeight="100vh">
            <Header />

            <Box component="main" flexGrow={1}>
                <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
                    SM CONTAINER
                </Container>
                <Container sx={{ bgcolor: 'primary.main' }}>MD CONTAINER</Container>

                <Link href="/products">PRODUCTS</Link>
                <Link href="/solutions">SOLUTIONS</Link>
                <Link href="/company">COMPANY</Link>
                <Link href="/helps">HELPS</Link>
                <Link href="/resources">RESOURCES</Link>
                {children}
            </Box>

            <Footer />
        </Stack>
    );
}
