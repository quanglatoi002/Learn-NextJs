import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
    children: any;
}
export function Auth({ children }: AuthProps) {
    const router = useRouter();
    const { profile, firstLoading } = useAuth();
    console.log(`profile: ${profile}, first loading: ${firstLoading}`);
    useEffect(() => {
        if (!firstLoading && !profile?.username) {
            router.push('/login');
            console.log('2');
        }
    }, [profile, firstLoading, router]);
    console.log('1');
    if (!profile?.username) return <p>Loading..</p>;
    return <div>{children}</div>;
}
