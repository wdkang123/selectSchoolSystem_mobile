import axios from 'axios'
import qs from 'qs'

let service = axios.create({
    baseURL:"http://47.100.119.23:8082",
    //baseURL:"http://172.17.0.177:8082",
    timeout:10000,
    headers:{

    }
});


//创建get
function get(url, params, headers) {
    let options = {};
    if(params){
        options.params = params;
    }
    if(headers){
        options.headers = headers;
    }
    return service.get(url, options)
}

//创建post
function post (url, data, headers) {
    let options = {};
    if(headers){
        options.headers = headers;
    }
    return service.post(url, qs.stringify(data), options)
}

//将请求挂在到全局
export default {
    install(Vue){
        Object.defineProperty(Vue.prototype, "$get", {value:get});
        Object.defineProperty(Vue.prototype, "$post", {value:post});
    }
}

