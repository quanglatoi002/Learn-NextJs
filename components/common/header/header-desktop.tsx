import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { ROUTE_LIST } from './router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useAuth } from '@/hooks';
// import MuiLink from '@mui/material/Link';
export function HeaderDesktop() {
    const router = useRouter();
    const { profile, logout } = useAuth();
    const isLoggedIn = Boolean(profile?.username);
    const routeList = ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn);
    //C1
    // const [routeList, setRouteList] = useState(() =>
    //     ROUTE_LIST.filter((route) => !route.requireLogin)
    // );
    //- Server ở lần render đầu tiên menu ko yêu cầu login(A)
    // Client - nhận kq từ server trả về với not require login(B)
    // client - ở lúc này bên side clients accept login và trả về profile.username, thì isLoggedIn thì nhận value = true và useEffect nhận được giá trị thay đổi của isLoggedIn nên đã setRouterList() <=> re-render lại, ở re-render này thì menu requireLogin

    // useEffect(() => {
    //     //sau lần đầu bên phía server gửi lên client
    //     setRouteList(ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn));
    // }, [isLoggedIn]);
    return (
        <Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {routeList.map((route) => (
                        <MuiLink
                            key={route.path}
                            href={route.path}
                            sx={{ ml: 2, fontWeight: 'medium', underline: 'none' }}
                            className={clsx({ active: router.pathname === route.path })}
                        >
                            {route.label}
                        </MuiLink>
                    ))}
                    {!isLoggedIn && (
                        <MuiLink
                            href="/login"
                            sx={{ ml: 2, fontWeight: 'medium', underline: 'none' }}
                        >
                            Login
                        </MuiLink>
                    )}
                    {isLoggedIn && (
                        <MuiLink
                            sx={{
                                ml: 2,
                                fontWeight: 'medium',
                                underline: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={logout}
                        >
                            Logout
                        </MuiLink>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}
