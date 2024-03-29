import { Work, WorkFiltersPayload } from '@/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { Search } from '@mui/icons-material';
import { Box, InputAdornment, debounce } from '@mui/material';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { AutocompleteField, InputField } from '../form';
export interface WorkFiltersProps {
    initialValues?: WorkFiltersPayload;
    //payload nhận kiểu trả về void
    onSubmit?: (payload: WorkFiltersPayload) => void;
    data: Work[];
}

export function WorkFilters({ initialValues, onSubmit, data }: WorkFiltersProps) {
    //validation
    const schema = yup.object().shape({});
    //useForm
    //handleSubmit sẽ được gọi khi người dùng gửi form
    const { control, handleSubmit } = useForm<WorkFiltersPayload>({
        defaultValues: {
            search: '',
            selectedTagList: [],
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
                placeholder="search work"
                label="Username"
                control={control}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                onChange={() => {
                    debounceSearchChange();
                }}
            />
            <AutocompleteField
                //[{object}]
                //trường dữ liệu name: path<K> lúc này là path<WorkFiltersPayload>
                name="selectedTagList"
                label="Filter by category"
                placeholder="Categories"
                control={control}
                options={data.map((item) => item.title)}
                // nhận lại label để hiển thị trên trình duyệt
                getOptionLabel={(option) => (typeof option === 'string' ? option : option)}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={() => debounceSearchChange()}
            />
        </Box>
    );
}
