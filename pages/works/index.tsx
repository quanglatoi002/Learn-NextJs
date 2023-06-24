import { MainLayout } from '@/components/layout';
import { WorkFilters, WorkList } from '@/components/work';
import { useWorkList } from '@/hooks';
import { ListParams, WorkFiltersPayload } from '@/models';
import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
    const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 });

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
    function handlePrevClick() {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: (prevFilters?._page || 0) - 1,
        }));
    }
    function handleNextClick() {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: (prevFilters?._page || 0) + 1,
        }));
    }
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={handlePrevClick} variant="contained">
                        Prev Page
                    </Button>
                    <Button onClick={handleNextClick} variant="contained">
                        Next Page
                    </Button>
                </Box>
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
