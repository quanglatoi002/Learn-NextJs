import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginPayload } from '@/models';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export interface LoginFormProps {
    onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    //validation
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Pls enter username')
            .min(4, 'username should have at least 4 characters'),
        password: yup
            .string()
            .required('Pls enter password')
            .min(6, 'password should have at least 6 characters'),
    });
    //show/hide
    const [showPassword, setShowPassword] = useState(false);
    //useForm
    //handleSubmit sẽ được gọi khi người dùng gửi form
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    async function handleLoginSubmit(payload: LoginPayload) {
        await onSubmit?.(payload);
    }
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField name="username" label="Username" control={control} />
            <InputField
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                control={control}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword((x) => !x)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress color="inherit" size="1rem" /> : null}
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
            >
                Login
            </Button>
        </Box>
    );
}
