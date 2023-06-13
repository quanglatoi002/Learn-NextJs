import { Work } from '@/models';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import Image from 'next/legacy/image';
import { WorkCard } from './work-card';

export interface WorkListProps {
    workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
    if (workList.length === 0) return null;

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
