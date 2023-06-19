import { Box, Button, IconButton, InputAdornment } from '@mui/material';
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
            .min(4, 'password should have at least 6 characters'),
    });
    //show/hide
    const [showPassword, setShowPassword] = useState(false);
    //useForm
    const { control, handleSubmit } = useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    function handleLoginSubmit(payload: LoginPayload) {
        console.log(payload);
        onSubmit?.(payload);
    }
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField name="username" control={control} />
            <InputField
                type={showPassword ? 'text' : 'password'}
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
            <Button type="submit" variant="contained">
                Login
            </Button>
        </Box>
    );
}
