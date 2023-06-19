import { authApi } from '@/api-client';
import { LoginPayload } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

//options?: còn được coi là tùy chọn và có thể bỏ qua
export function useAuth(options?: Partial<PublicConfiguration>) {
    //profile
    const {
        data: profile,
        error,
        mutate,
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
    });

    console.log({ profile, error });
    // ở lần chạy đầu tiên khi truy cập vào page about thì profile = undefined và error = undefined, lúc này firstLoading = true
    const firstLoading = profile === undefined && error === undefined;

    async function login(payload: LoginPayload) {
        await authApi.login(payload);
        await mutate();
    }
    async function logout() {
        await authApi.logout();
        // khi thay đổi giá trị thì tránh sử dụng undefined
        mutate({}, false);
    }
    return { profile, error, login, logout, firstLoading };
}
