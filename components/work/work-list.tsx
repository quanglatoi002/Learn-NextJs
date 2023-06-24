import { Work } from '@/models';
import { Box, Divider, Typography } from '@mui/material';
import { Fragment } from 'react';
import { WorkCard } from './work-card';
import Image from 'next/legacy/image';
import { WorkSkeleton } from './work-skeleton';

export interface WorkListProps {
    workList: Work[];
    loading?: boolean;
}

export function WorkList({ workList, loading }: WorkListProps) {
    if (loading)
        return (
            <Box>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Fragment key={index}>
                        <WorkSkeleton />

                        <Divider sx={{ my: 3 }} />
                    </Fragment>
                ))}
            </Box>
        );
    console.log(workList);
    if (workList.length === 0)
        return (
            <Box textAlign={'center'} mt={6}>
                <Image
                    src={
                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1670995696/nodejs/iqurjgjhc8nyf13bz5j1.jpg'
                    }
                    width={180}
                    height={140}
                    layout="responsive"
                    alt="work thumbnail"
                />
                <Typography mt={5} component="h1" variant="h3">
                    No data
                </Typography>
            </Box>
        );

    return (
        <Box>
            {workList.map((work) => (
                <Fragment key={work.id}>
                    <WorkCard work={work}></WorkCard>

                    <Divider sx={{ my: 3 }} />
                </Fragment>
            ))}
        </Box>
    );
}
