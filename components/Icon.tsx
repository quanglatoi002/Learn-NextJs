import React, { memo } from 'react';
import Image, { ImageProps } from 'next/image';

//Omit<T,K> là 1 type utility trong Ts, nó trả về 1 phiên bản mới của kiểu 'T' mà loại bỏ các thuộc tính được liệt kê bởi kiểu 'K
interface IconProps extends Omit<ImageProps, 'src'> {
    name: string;
    color?: string;
}
// Khi sử dụng React.FC đảm bảo rằng component không truyền vào children
const Icon: React.FC<IconProps> = ({ name, width, height, color, alt, ...rest }) => {
    return (
        <Image
            src={`/icons/${name}.svg`}
            alt={alt}
            width={width}
            height={height}
            color={color}
            {...rest}
        />
    );
};

export default memo(Icon);
