import axiosClient from '@/api-client/axiosClient';
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';
import '@/styles/globals.css';
import { SWRConfig } from 'swr';

import { createEmotionCache, theme } from '@/utils';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
    // console.log((emotionCache.key = 'quang'));
    //nhưng tk ko định nghĩa layout thì nó mặc định lấy EmptyLayout và chỉ rendered được cái <Component {...pageProps} /> thôi
    // khi 2 components cùng dùng chung 1 cái layout thì nó sẽ chỉ thay đổi cái page thôi chứ ko thay đổi layout(re-render)

    //Lưu ý cách thức hd ở lúc đầu we ở page Home thì layout lúc này là MainLayout, lúc này Layout đã lấy được MainLayout và trả về giá trị của MainLayout và lúc này we thực hiện onClick qua page about thì lúc này Layout sẽ nhận vào là adminLayout. Trước khi đưa giá trị nhận vào là adminLayout thì nó sẽ unmounted Mainlayout và mount tới adminLayout
    const Layout = Component.Layout ?? EmptyLayout;
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SWRConfig
                    value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
}
