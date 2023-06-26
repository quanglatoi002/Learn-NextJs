import { WorkFiltersPayload } from '@/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { Search } from '@mui/icons-material';
import { Box, InputAdornment, debounce } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputField } from '../form';
import { ChangeEvent, useState } from 'react';
import Pagination from '@mui/material/Pagination';
export interface WorkFiltersProps {
    initialValues?: WorkFiltersPayload;
    //payload nhận kiểu trả về void
    onSubmit?: (payload: WorkFiltersPayload) => void;
}

export function WorkFilters({ initialValues, onSubmit }: WorkFiltersProps) {
    //validation
    const schema = yup.object().shape({});
    //useForm
    //handleSubmit sẽ được gọi khi người dùng gửi form
    const { control, handleSubmit } = useForm<WorkFiltersPayload>({
        defaultValues: {
            search: '',
            ...initialValues,
        },
        resolver: yupResolver(schema),
    });

    async function handleLoginSubmit(payload: WorkFiltersPayload) {
        console.log('form submit to Pages work ', payload);
        await onSubmit?.(payload);
    }

    //debounce
    const debounceSearchChange = debounce(handleSubmit(handleLoginSubmit), 350);

    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField
                name="search"
                placeholder="search"
                label="Username"
                control={control}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    debounceSearchChange();
                }}
            />
        </Box>
    );
}
