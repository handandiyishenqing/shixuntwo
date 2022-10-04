import $axios from 'axios'
import store from '../store/index'
const service = $axios.create({
    baseURL: 'http://119.45.133.128:8098',
    timeout: 5000,
});

service.interceptors.request.use(function (config) {
    const token = store.getters.TOKEN
    if (token) config.headers.token = token
    return config;
}, function (error) {
    return Promise.reject(error);
});

service.interceptors.response.use(function (response) {
    console.log(response, 'response');
    if (response.status < 400) {
        return response.data
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

const request = (options) => {
    options.method = options.method || 'get'
    if (options.method.toLocaleLowerCase() === 'get') {
        options.params = options.data || options.params
        delete options.data
    }
    return service(options)
}

export default request