import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import * as React from 'react';
import { ROUTE_LIST } from './router';
import Link from 'next/link';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
    return (
        <Box display={{ xs: 'none', md: 'block' }}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((route) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MuiLink sx={{ mr: 2 }} underline="hover">
                                {route.label}
                            </MuiLink>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
