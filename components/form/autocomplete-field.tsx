import { Work } from '@/models';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { TextField } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
//InputField sẽ chứa toàn bộ thuộc tính của TextFieldProps và thêm 2 thuộc tính name, control
//để sử dụng thuộc tính isOptionEqualToValue thì cần ph có AutocompleteProps để có thể nhận giá trị props cha truyền xuống
//K extends
export type AutocompleteFieldProps<T, K extends FieldValues> = Partial<
    AutocompleteProps<T, boolean, boolean, boolean>
> & {
    // là trường dữ liệu trong form
    name: Path<K>;
    //đối tượng kiểm soái trường dữ liệu
    control: Control<K>;

    placeholder?: string;
    label?: string;

    options: T[];
    getOptionLabel: (option: T) => string;
    onChange: (selectedOptions: T[]) => void;
    // data: Work[];
};
export function AutocompleteField<T, K extends FieldValues>({
    name,
    control,
    onChange: externalOnChange,
    placeholder,
    label,
    options,
    getOptionLabel,
    isOptionEqualToValue,
    // data,
    ...rest
}: AutocompleteFieldProps<T, K>) {
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
        <Autocomplete
            fullWidth
            size="small"
            multiple
            options={options}
            disableCloseOnSelect
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {getOptionLabel(option) || '_'}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField
                    margin="normal"
                    name={name}
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
            onChange={(event, value) => {
                onChange(value);
                externalOnChange?.(value);
            }}
            onBlur={onBlur}
            value={value}
            ref={ref}
        />
    );
}
