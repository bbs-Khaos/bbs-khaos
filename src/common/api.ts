import { instance } from "@/plugins";
import { Method } from "axios";
import { LoginParam } from "@/types";
import url from "./url";

const Method = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
};

/**
 * @description login
 * @desc login
 * */
export function login(data: LoginParam){
    return instance({
        method: Method.POST as Method,
        url: url.get("login"),
        data: {
            ...data
        }
    });
}
