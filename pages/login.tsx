import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function LoginPage() {
    const router = useRouter();
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false,
    });
    async function handleLoginClick() {
        try {
            await login();
            console.log('redirected to dashboard');
            router.push('/about');
        } catch (error) {
            console.log('failed to login', error);
        }
    }
    async function handleGetProfileClick() {
        try {
            await profile();
            console.log('redirected to dashboard');
        } catch (error) {
            console.log('failed to profile', error);
        }
    }
    async function handleLogoutClick() {
        try {
            await logout();
            console.log('logout');
        } catch (error) {
            console.log('failed to logout', error);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfileClick}>Get Profile</button>
            <button onClick={handleLogoutClick}>Logout</button>
            <button onClick={() => router.push('/about')}>Go to about</button>
            <LoginForm />
        </div>
    );
}
