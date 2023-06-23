import { TextField, TextFieldProps } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';

//InputField sẽ chứa toàn bộ thuộc tính của TextFieldProps và thêm 2 thuộc tính name, control
export type InputFieldProps = TextFieldProps & {
    name: string;
    control: Control<any>;
};
export function InputField({
    name,
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
    //vd nếu như name là username thì control sẽ lấy đúng cái bộ này của username như field, fieldState => sau đó payload lên UI Control
    return (
        <TextField
            fullWidth
            size="small"
            margin="normal"
            name={name}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChange(event);
                //Kiểm tra xem externalOnChange có tồn tại hay không trước khi gọi nó và truyền event
                externalOnChange?.(event);
            }}
            onBlur={onBlur}
            //focus
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
            {...rest}
        />
    );
}
