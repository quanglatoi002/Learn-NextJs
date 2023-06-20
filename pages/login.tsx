import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';
import { getErrorMessage } from '@/utils';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth({
        revalidateOnMount: false,
    });
    async function handleLoginSubmit(payload: LoginPayload) {
        try {
            await login(payload);
            router.push('/');
        } catch (error) {
            const message = getErrorMessage(error);
            console.log('failed to login', message);
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
