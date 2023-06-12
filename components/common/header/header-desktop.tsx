import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { ROUTE_LIST } from './router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import MuiLink from '@mui/material/Link';

export function HeaderDesktop() {
    const router = useRouter();
    return (
        <Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((route, index) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MuiLink
                                sx={{ ml: 2, fontWeight: 'medium' }}
                                className={clsx({ active: router.pathname === route.path })}
                            >
                                {route.label}
                            </MuiLink>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
