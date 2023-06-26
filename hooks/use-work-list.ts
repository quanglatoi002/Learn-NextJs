import { workApi } from '@/api-client';
import { QueryKeys } from '@/constants/query-keys';
import { ListParams } from '@/models';
import useSWR, { SWRConfiguration } from 'swr';

export interface UseWorkListProps {
    params: Partial<ListParams>;
    options?: SWRConfiguration;
    enabled?: boolean;
}
// useSWR(key:Key)
//lưu ý về key: Dependency Tracking, nó khá giống với useEffect khi bạn muốn fetch dữ liệu dựa trên các tham số thay đổi.
export function useWorkList({ params, options, enabled }: UseWorkListProps) {
    const swrResponse = useSWR(
        enabled ? [QueryKeys.GET_WORK_LIST, params] : null,
        () => workApi.getAll(params),
        {
            dedupingInterval: 30000,
            keepPreviousData: true,
            fallbackData: {
                data: [],
                pagination: {
                    _page: 1,
                    _limit: 10,
                    totalRows: 0,
                },
            },
            ...options,
        }
    );
    return swrResponse;
}
