import { useEffect } from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models';

export function AdminLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        };
    }, []);
    return (
        <div>
            <h1>Admin Layout</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <div>{children}</div>
        </div>
    );
}
