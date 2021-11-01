interface RequestParams {
    endpoint: string;
    method?: 'GET'|'POST'|'PUT'|'DELETE';
    params?: {[key: string]: any};
}

interface ApiResponse<T> {
    status: number;
    data?: T
    message?: string
}

interface ErrorResponse {
    message: string;
}
