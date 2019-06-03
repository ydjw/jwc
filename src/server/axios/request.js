import axios from './AxiosInterceptors';

function get(url, params) {

    console.log(params)
    console.log(url)
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params,
                headers: {'token': window.util.getStorage('token')}
            }
        ).then((res) => {
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