import { TextField, TextFieldProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = TextFieldProps & {
    name: string;
    control: Control<any>;
};
export function InputField({
    name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    ...rest
}: InputFieldProps) {
    //control chứa nội dung của tất cả những cái control mà nó dựa vào cái name này để lấy đúng ra cái onChange, value cho từng cái control mà nó mong muốn
    //field để liên kết tới các trường nhập liệu
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    });
    return (
        <TextField
            fullWidth
            size="small"
            margin="normal"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            {...rest}
        />
    );
}
