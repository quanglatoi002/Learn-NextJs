import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';
import { WorkCard } from './work-card';
import Image from 'next/legacy/image';

export interface WorkListProps {
    workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
    console.log(workList);
    if (workList.length === 0)
        return (
            <Box textAlign={'center'}>
                <Image src={''} width={246} height={180} layout="responsive" alt="work thumbnail" />
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
