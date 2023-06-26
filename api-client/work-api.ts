import { ListParams, ListResponse, Work } from '@/models';
import axiosClient from './axiosClient';
// getAll nhận vào 1 param với các tùy chọn của LisrParams

//kết quả trả về của getAll phải có kiểu dữ liệu ListResponse<Work> {data: Array<Work>, pagination: pagination}
export const workApi = {
    getAll(params: Partial<ListParams>): Promise<ListResponse<Work>> {
        return axiosClient.get('/works', { params });
    },
    get(id: string): Promise<Work> {
        return axiosClient.get(`/works/${id}`);
    },
};
