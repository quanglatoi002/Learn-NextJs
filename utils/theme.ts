import { Roboto, Inter, Heebo } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
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

export const heebo = Heebo({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Create a theme instance.
export let theme = createTheme({
    palette: {
        primary: {
            main: '#FF6464',
            light: '#FFFFFF',
        },
        secondary: {
            light: '#EDF7FA',
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#21243D',
        },
        background: {
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Heebo, sans-serif',
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
        MuiLink: {
            variants: [
                {
                    props: { ml: 2 },
                    style: {
                        color: 'black',
                        '&:hover, &.active': {
                            color: '#FF6464',
                        },
                    },
                },
            ],
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    '&:hover, &.active': {
                        color: '#FF6464',
                    },
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white',
                        backgroundColor: '#FF6464',
                    },
                },
            ],
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    paddingInline: 2,
                },
            },
            variants: [
                {
                    // có thể hiểu là ở props mà có khai báo color: 'secondary' thì we sẽ config lại với style:{color, font ....}
                    props: {
                        color: 'secondary',
                    },
                    style: {
                        color: 'white',
                        backgroundColor: '#142850',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    },
                },
            ],
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    color: '#21243D',
                },
            },
        },
    },
});
theme = responsiveFontSizes(theme);
// theme.typography.h3 = {
//     fontSize: '2rem',
//     [theme.breakpoints.up('md')]: {
//         fontSize: '44px',
//     },
// };
