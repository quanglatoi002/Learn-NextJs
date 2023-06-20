import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import * as React from 'react';
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
