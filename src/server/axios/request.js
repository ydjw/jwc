import axios from './AxiosInterceptors';

function get(url) {

    return new Promise((resolve,reject)=>{
        axios.get(url).then((res)=>{
            resolve(res)
        })
    })
    // axios.get(url)
    //     .then(function (response) {
    //         return response;
    //     })
    //     .catch(function (error) {
    //         return error;
    //     });
}


export {
    get
}