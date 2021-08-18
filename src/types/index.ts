import { Method } from "axios";

export interface InstanceParam {
    method: Method,
    url: string | undefined;
    headers?: Record<string, unknown>;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
}

export interface Response {
    code: number;
    message: any;
    error: string;
}

export interface LoginParam {
    username: string;
    passowrd: string;
}
