import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Icon, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export function Footer() {
    const socialLinks = [
        { icon: Facebook, url: 'http://google.com' },
        { icon: Instagram, url: 'http://google.com' },
        { icon: Twitter, url: 'http://google.com' },
        { icon: LinkedIn, url: 'http://google.com' },
    ];
    return (
        <Box component="footer" py={2} textAlign="center">
            <Stack spacing="35px" pb={2} direction="row" justifyContent="center">
                {socialLinks.map((item, index) => (
                    <Box key={index} component="a">
                        <Icon component={item.icon} sx={{fontSize: }} />
                    </Box>
                ))}
            </Stack>
            <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
        </Box>
    );
}
