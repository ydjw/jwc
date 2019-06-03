import {get} from '../server/axios/request'


class EducationApi {
    /**
     *账号登录
     */
    login(url) {
         return get(url);
    }


}

export default new EducationApi()