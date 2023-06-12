import { Box, Container, Stack, Typography } from '@mui/material';

export function RecentPosts() {
    return (
        <Box component="section" sx={{ bgcolor: '#EDF7FA', color: 'text.primary', pb: '30px' }}>
            <Container>
                <Stack fontWeight={400} direction="column">
                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontWeight: 400,
                        }}
                    >
                        <Typography sx={{ lineHeight: '60px' }}>Recent posts</Typography>
                        <Typography
                            color={'#00A8CC'}
                            sx={{ lineHeight: '23.5px' }}
                            fontSize={'14px'}
                        >
                            View all
                        </Typography>
                    </Stack>
                    <Stack spacing="37px" direction="row">
                        <Box sx={{ bgcolor: '#FFFFFF', p: 4 }}>
                            <Typography variant="h4" sx={{ pb: '17px' }}>
                                Making a design system from scratch
                            </Typography>
                            <Stack spacing="24px" sx={{ pb: '11px' }} direction="row">
                                <Typography>12 Feb 2020</Typography>
                                <Typography sx={{ borderRight: '1px solid black' }}></Typography>

                                <Typography>Design, Pattern</Typography>
                            </Stack>
                            <Typography>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </Typography>
                        </Box>
                        <Box sx={{ bgcolor: '#FFFFFF', p: 4 }}>
                            <Typography variant="h4" sx={{ pb: '17px' }}>
                                Creating pixel perfect icons in Figma
                            </Typography>
                            <Stack spacing="24px" sx={{ pb: '11px' }} direction="row">
                                <Typography>12 Feb 2020</Typography>
                                <Typography sx={{ borderRight: '1px solid black' }}></Typography>

                                <Typography>Design, Pattern</Typography>
                            </Stack>
                            <Typography>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
