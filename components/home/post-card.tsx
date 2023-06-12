import { Post } from '@/models';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { format } from 'date-fns';
export interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    if (!post) return null;
    return (
        <Card sx={{ bgcolor: 'primary.light' }}>
            <CardContent>
                <Typography variant="h4" pb="17px" fontWeight="bold">
                    {post.title}
                </Typography>
                <Stack spacing="24px" sx={{ pb: '11px' }} direction="row">
                    <Typography variant="body1">
                        {format(Number(post.publishedDate), 'dd MMM yyyy')}
                    </Typography>
                    <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
                    {/* <Typography sx={{ borderRight: '1px solid black' }}></Typography> */}

                    <Typography variant="body1">{post.tagList.join(',')}</Typography>
                </Stack>
                <Typography variant="body2">{post.description}</Typography>
            </CardContent>
        </Card>
    );
}
