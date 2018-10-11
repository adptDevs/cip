// HTPP Service Class
class HTTP_Service {
    constructor() {

    }

    post(url, params) {
        let urlParams = JSON.stringify(params);
        let promise = dhx.ajax.post(url, paraurlParamsms, (text) => { });
        return promise;
    }

    get(url) {
        let promise = dhx.ajax.get(url, (text) => { });
        return promise;
    }
}