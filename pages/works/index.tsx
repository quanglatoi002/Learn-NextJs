import { workApi } from '@/api-client';
import { MainLayout } from '@/components/layout';
import { useWorkList } from '@/hooks';
import { ListParams } from '@/models';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
    const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 10 });

    const { data, isLoading } = useWorkList({ params: filters });
    console.log({ data, isLoading });
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const workList = await workApi.getAll({ _page: 1 });
    //             console.log({ workList });
    //         } catch (error) {}
    //     })();
    // }, []);
    function handleNextClick() {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: (prevFilters?._page || 0) + 1,
        }));
    }
    return (
        <div>
            Works Page
            <Box>
                <Button onClick={handleNextClick} variant="contained">
                    Next Page
                </Button>
            </Box>
        </div>
    );
}
WorksPage.Layout = MainLayout;

export async function getStaticProps() {
    console.log('get static props');
    // const workList = await getWorkList();
    return {
        props: {},
    };
}