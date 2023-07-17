import { MainLayout } from '@/components/layout';
import { WorkFilters, WorkList } from '@/components/work';
import { useWorkList } from '@/hooks';
import { ListParams, WorkFiltersPayload } from '@/models';
import { Box, Container, Pagination, Skeleton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
export interface WorksPageProps {}
export default function WorksPage(props: WorksPageProps) {
    const router = useRouter();
    console.log(router);
    //router.query sẽ là 1 đối tượng{_page:1, _limit:3}
    // sử dụng router.query để nhận giá trị của title_like
    const filters: Partial<ListParams> = {
        _page: 1,
        _limit: 3,
        ...router.query,
    };
    console.log(router.query);

    //giải quyết vấn đề hiện kết quả sau khi render lại

    const initFiltersPayload: WorkFiltersPayload = {
        search: filters.title_like || '',
        tagList_search: '',
    };
    //useSWR để lấy api, useWorkList ở hook gọi tới work-api đã được định nghĩa ở api-client. Trong work-api nhận vào cho mình {data: Array<Work>, pagination}
    //giải quyết vấn đề lần render đầu tiên lun luôn là undefined. lần đầu render isReady = false
    const { data, isLoading } = useWorkList({ params: filters, enabled: router.isReady });
    //lấy totalRows, limit, page trong data.pagination
    const { _totalRows, _limit, _page } = data?.pagination || {};
    const totalPages = _totalRows ? Math.ceil(_totalRows / _limit) : 0;
    //handle page
    // ChangeEvent đc biểu diễn cho 'change' trong DOM. Nó bao gồm các thuộc tính như target, currentTarget
    // ==> lưu ý khi bạn xử lý sự kiện,bạn có thể sử dụng phương thức của ChangeEvent để try cập về info sự kiện. vd  event.targer.value
    // sử dụng MouseEvent<HTMLButtonElement> cho sự kiện onClick
    // sử dụng FormEvent<HTMLFormElement> cho sử dụng onSubmit
    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        router.push(
            {
                pathname: router.pathname,
                query: {
                    ...filters,
                    _page: value,
                },
            },
            undefined,
            //shallow: true là chỉ update bên phía client thôi
            { shallow: true }
        );
    };
    //nhận dữ liệu từ thành phần con payload lên
    function handleFiltersChange(newFilters: WorkFiltersPayload) {
        router.push(
            {
                pathname: router.pathname,
                query: {
                    ...filters,
                    _page: 1,
                    title_like: newFilters.search,
                },
            },
            undefined,
            //shallow: true là chỉ update bên phía client thôi
            { shallow: true }
        );
    }
    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component="h1" variant="h3" fontWeight="bold">
                        Work
                    </Typography>
                </Box>

                {router.isReady ? (
                    <WorkFilters
                        data={data?.data}
                        initialValues={initFiltersPayload}
                        onSubmit={handleFiltersChange}
                    />
                ) : (
                    <Skeleton
                        variant="rectangular"
                        height={40}
                        sx={{
                            display: 'inline-block',
                            mt: 2,
                            width: '100%',
                            mb: 1,
                            verticalAlign: 'middle',
                        }}
                    />
                )}
                <WorkList workList={data?.data || []} loading={!router.isReady || isLoading} />
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
