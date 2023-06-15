import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import { PostCard } from './post-card';
import { Post } from '@/models';
export function RecentPosts() {
    const postList: Post[] = [
        {
            id: '1',
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '1686576275322',
            tagList: ['Design', 'Pattern'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            id: '2',
            slug: '',
            title: 'Creating pixel perfect icons in Figma',
            publishedDate: '1686576275322',
            tagList: ['figma', 'Icon Design'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ];

    return (
        <Box
            component="section"
            sx={{ bgcolor: 'secondary.light', color: 'text.primary', pb: '30px' }}
        >
            <Container>
                <Stack
                    direction="row"
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    alignItems="center"
                    fontWeight={400}
                >
                    <Typography sx={{ lineHeight: '60px' }}>Recent posts</Typography>
                    <MuiLink
                        href="/blog"
                        color={'#00A8CC'}
                        sx={{
                            lineHeight: '23.5px',
                            display: { xs: 'none', md: 'inline-block' },
                        }}
                        fontSize={'14px'}
                    >
                        View all
                    </MuiLink>
                </Stack>
                <Stack spacing="37px" direction={{ xs: 'column', md: 'row' }}>
                    {postList.map((post) => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}
                    {/* <Box sx={{ bgcolor: '#FFFFFF', p: 4 }}>
                        
                    </Box> */}
                    {/* <Box sx={{ bgcolor: '#FFFFFF', p: 4 }}>
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
                    </Box> */}
                </Stack>
            </Container>
        </Box>
    );
}
