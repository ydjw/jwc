import {get} from '../server/axios/request'


class EducationApi {
    /**
     *项目通用get请求
     */
    commonGet(params) {
         return get('/app.do',params);
    }


}

export default new EducationApi()