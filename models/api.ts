export interface ListParams {
    _page: number;
    _limit: number;
    title_like: number;
}

export interface Pagination {
    _page: number;
    _limit: number;
    _total: number;
}
//<T> là biểu diễn kiểu dữ liệu chung (generic type) nó có thể sử dụng lại code với các kiểu dữ liệu khác nhau mà không cần viết lại code cho từng kiểu dữ liệu riêng biệt
export interface ListResponse<T> {
    data: Array<T>;
    pagination: Pagination;
}
