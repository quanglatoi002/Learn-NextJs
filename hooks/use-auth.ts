import { authApi } from '@/api-client';
import { StorageKeys } from '@/constants';
import { LoginPayload, UserProfile } from '@/models';
import useSWR from 'swr';
import { SWRConfiguration } from 'swr/_internal';

function getUserInfo(): UserProfile | null {
    try {
        return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || '');
    } catch (error) {
        return null;
    }
}

//options?: còn được coi là tùy chọn và có thể bỏ qua
export function useAuth(options?: Partial<SWRConfiguration>) {
    //profile
    const {
        data: profile,
        error,
        mutate,
    } = useSWR<UserProfile | null>('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
        fallbackData: getUserInfo(),
        onSuccess(data) {
            //save user info to local storage
            //convert object -> JSON
            localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
        },
        onError(err) {
            //logout
            localStorage.removeItem(StorageKeys.USER_INFO);
            logout();
        },
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
        mutate(null, false);
        //xóa ra khỏi localStorage
        localStorage.removeItem(StorageKeys.USER_INFO);
    }
    return { profile, error, login, logout, firstLoading };
}
