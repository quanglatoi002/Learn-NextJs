import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';
import { Footer, Header } from '../common';

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
