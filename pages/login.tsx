import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function LoginPage() {
    const router = useRouter();
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false,
    });
    async function handleLoginClick() {
        try {
            await login({
                username: 'test1',
                password: '123131',
            });
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
    async function handleLoginSubmit(payload: LoginPayload) {
        try {
            await login(payload);
            console.log('redirected to dashboard');
            // router.push('/about');
        } catch (error) {
            console.log('failed to login', error);
        }
    }
    return (
        <Box>
            <Paper
                elevation={4}
                sx={{
                    mx: 'auto',
                    mt: 8,
                    p: 4,
                    maxWidth: '480px',
                    textAlign: 'center',
                }}
            >
                <Typography component="h1" variant="h4" mb={2}>
                    Login
                </Typography>
                <LoginForm onSubmit={handleLoginSubmit} />
            </Paper>
        </Box>
    );
}
