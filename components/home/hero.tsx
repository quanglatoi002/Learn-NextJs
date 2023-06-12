import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import * as React from 'react';
import avatar from '@/images/avatar.png';
export function HeroSection() {
    return (
        <Box component="section" pt={{ xs: '32px', md: '140px' }} pb={{ xs: '58px', md: '70px' }}>
            <Container>
                <Stack
                    spacing={{ xs: '34px', md: '140px' }}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    <Box>
                        <Typography
                            component="h1"
                            variant="h3"
                            fontWeight="bold"
                            mb={{ xs: '21px', md: 5 }}
                        >
                            Hi, I am John,
                            <br /> Creative Technologist
                        </Typography>
                        <Typography mb={{ xs: '27px', md: 5 }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </Typography>
                        <Button sx={{ fontSize: '20px', lineHeight: '29px' }} variant="contained">
                            Download Resume
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            minWidth: '240px',
                            boxShadow: '-5px 13px',
                            color: 'secondary.light',
                            borderRadius: '100%',
                        }}
                    >
                        <Image src={avatar} layout="responsive" alt="avatar" />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
