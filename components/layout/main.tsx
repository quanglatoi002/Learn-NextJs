import { useEffect } from 'react';
import Link from 'next/link';
import { LayoutProps } from '@/models';

export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        };
    }, []);
    return (
        <div>
            <h1>Main Layout</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <div>{children}</div>
        </div>
    );
}
