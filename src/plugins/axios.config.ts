import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";
import handleError from "./axios.handleError";
import { InstanceParam, Response } from "@/types";

const noAuth: Array<string> = [];

const http = axios.create({
    baseURL: process.env.NODE_ENV === "deveopment" ? "http://localhost:3000" : "",
    timeout: 10000
});

const showTip = (tip: string)=>{
    ElMessage({
        type: 'warning',
        message: tip || '请求出错啦',
        duration: 1500
    })
}

http.interceptors.request.use(function(config){
    if(!noAuth.includes(config.url as string)){
        config.data = qs.stringify(config.data);
    }
    return config;
}, function(error){
    if(!window.navigator.onLine){
        ElMessage.error("请连接网络后重试!");
    };
    return Promise.reject(error);
});

http.interceptors.response.use(function(response){
    return response.data;
}, function(error){
    if (!error) return Promise.reject(error);

    if (error.response) {
        error = handleError(error);
    }
        // 没有response(没有状态码)的情况
    // eg: 超时；断网；请求重复被取消；主动取消请求；
    else {
        // 错误信息err传入isCancel方法，可以判断请求是否被取消
        if (axios.isCancel(error)) {
            throw new axios.Cancel(error.message || `请求'${error.response.url}'被取消`);
        } else if (error.stack && error.stack.includes('timeout')) {
            error.message = '请求超时!';
        } else {
            error.message = '连接服务器失败!';
        }
    }
    showTip(error.message);
    return Promise.reject(error);
});

export const instance = (data: InstanceParam) => {
    return new Promise<Response>((resolve, reject) => {
        http({
            method: data.method,
            url: data.url,
            headers: data.headers,
            params: data.params,
            data: data.data
        }).then(res => {
            resolve(res as any);
        }).catch(err => {
            reject(err);
        });
    });
}
