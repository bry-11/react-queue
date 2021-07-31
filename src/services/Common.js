import API from './Api'

class CommonService {
    static CreateClient(data) {
        return API({
            method: 'POST',
            url: `client/create`,
            data,
        })
    }
}
export default CommonService
