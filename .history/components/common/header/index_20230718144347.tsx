import { Box } from '@mui/system';
import * as React from 'react';
import { HeaderMobile } from './header-mobile';
import { HeaderDesktop } from './header-desktop';

export function Header() {
    return (
        <>
            <HeaderMobile />
            <HeaderDesktop />
        </>
    );
}
