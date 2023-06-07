import * as React from 'react';
import useSWR from 'swr';
export interface StudentDetailProps {
    studentId: string;
}

const MS_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: false,
        // dedupingInterval: MS_PER_HOUR,
        dedupingInterval: 2000,
    });
    function handleMutateClick() {
        //mutate được dùng để cập nhật dữ liệu trong cache và gửi yêu cầu cập nhật dữ liệu mới từ máy chủ
        mutate({ name: 'frontend' }, false);
    }
    return (
        <div>
            Name: {data?.name || '--'}
            <button onClick={handleMutateClick}>mutate</button>
        </div>
    );
}
