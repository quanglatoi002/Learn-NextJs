import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import { PostCard } from './post-card';
import { Post, Work } from '@/models';
import { WorkList } from '../work';
export function FeaturedWorks() {
    const workList: Work[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            tagList: ['Dashboard'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            createdAt: '1686576275322',
            updatedAt: '1686576275322',
            thumbnailUrl:
                'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621625/Learn-NextJs/item1_ukylwk.png',
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            tagList: ['Illustration'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            createdAt: '1686576275322',
            updatedAt: '1686576275322',
            thumbnailUrl:
                'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621630/Learn-NextJs/item2_hxvtz1.png',
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            tagList: ['Typography'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            createdAt: '1686576275322',
            updatedAt: '1686576275322',
            thumbnailUrl:
                'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621635/Learn-NextJs/item3_g1kttf.png',
        },
    ];

    return (
        <Box component="section" sx={{ color: 'text.primary', pb: '30px' }}>
            <Container>
                <Typography variant="h5" sx={{ lineHeight: '60px' }}>
                    Featured works
                </Typography>
                <WorkList workList={workList}></WorkList>
            </Container>
        </Box>
    );
}
