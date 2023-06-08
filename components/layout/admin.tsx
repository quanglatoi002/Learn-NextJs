import { useEffect } from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models';
import { Auth } from '../common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { log } from 'console';

export function AdminLayout({ children }: LayoutProps) {
    const { logout, profile } = useAuth();
    //lúc này logout và profile là undefined
    console.log('page admin');
    const router = useRouter();
    async function handleLogoutClick() {
        try {
            await logout();
            console.log('logout');
            router.push('/login');
        } catch (error) {
            console.log('failed to logout', error);
        }
    }
    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        };
    }, []);
    return (
        <Auth>
            <h1>Admin Layout</h1>
            <p>Profile: {JSON.stringify(profile)}</p>
            <div>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <div>{children}</div>
        </Auth>
    );
}
