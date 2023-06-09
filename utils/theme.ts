import { Roboto, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    //nếu display: block thì lúc đầu chạy lên nó sẽ để mờ font chữ và sau 3s(INVISIBLE) mà ch load được font chữ theo yêu cầu thì nó sẽ lấy tạm 1 tk thay thế(FALLBACK), ngược lại thì sẽ lấy kiểu đã định(WEBFONT). Còn swap thì ngay lúc đầu mà ko load được font thì nó sẽ lấy 1 font chữ khác để thay thế cho đến khi font khi đc load lên
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6464',
        },
        secondary: {
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
        background: {
            paper: '#001150',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'md',
            },
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media(min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media(min-width:900px)': {
                        maxWidth: '860px',
                    },
                },
            },
        },
    },
});
