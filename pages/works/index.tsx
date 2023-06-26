import { MainLayout } from '@/components/layout';
import { WorkFilters, WorkList } from '@/components/work';
import { useWorkList } from '@/hooks';
import { ListParams, WorkFiltersPayload } from '@/models';
import { Box, Container, Pagination, Stack, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
    const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 });

    //useSWR để lấy api, useWorkList ở hook gọi tới work-api đã được định nghĩa ở api-client. Trong work-api nhận vào cho mình {data: Array<Work>, pagination}
    const { data, isLoading } = useWorkList({ params: filters });
    //lấy totalRows, limit, page trong data.pagination
    const { _totalRows, _limit, _page } = data?.pagination || {};
    const totalPages = _totalRows ? Math.ceil(_totalRows / _limit) : 0;
    //handle page
    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: value,
        }));
    };
    //nhận dữ liệu từ thành phần con payload lên
    function handleFiltersChange(newFilters: WorkFiltersPayload) {
        console.log('page-lever', newFilters);
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: 1,
            title_like: newFilters.search,
        }));
    }
    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component="h1" variant="h3" fontWeight="bold">
                        Work
                    </Typography>
                </Box>
                <WorkFilters onSubmit={handleFiltersChange} />
                <WorkList workList={data?.data || []} loading={isLoading} />
                {totalPages > 0 && (
                    <Stack alignItems="center">
                        <Pagination count={totalPages} page={_page} onChange={handlePageChange} />
                    </Stack>
                )}
            </Container>
        </Box>
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
