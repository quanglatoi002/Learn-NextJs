import { TextField, TextFieldProps } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

//InputField sẽ chứa toàn bộ thuộc tính của TextFieldProps và thêm 2 thuộc tính name, control
export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
    name: Path<T>; // Path<T> là giá trị của biến name nhận được ph giống trong model vd search: string thì ghi nhận từ đối số thì name = 'search' thì mới đúng
    control: Control<T>;
};
export function InputField<T extends FieldValues>({
    name,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    ...rest
}: InputFieldProps<T>) {
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
            //ở mỗi lần bạn gõ thì ko phải chỉ trigger externalOnChange ở bên ngoài mà ở bên trong nội bộ đã tự động cập nhật value nội bộ của nó rồi
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
