import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
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
            <Stack>
                {socialLinks.map((item, index) => (
                    <Box key={index} component="a"></Box>
                ))}
            </Stack>
            <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
        </Box>
    );
}
