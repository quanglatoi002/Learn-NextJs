import { authApi } from '@/api-client';
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
    async function login() {
        await authApi.login({
            username: 'test1',
            password: '111111',
        });
        await mutate();
    }
    async function logout() {
        await authApi.logout();
        mutate({}, false);
    }
    return { profile, error, login, logout };
}
