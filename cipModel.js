const _appConfig = new WeakMap();

class CIPMODEL extends HTTP_Service {
    constructor() {
        super();

        _appConfig.set(this, {
            "_scripts": {
                "Admin": [
                    "projectView.js"
                ],
                "Planner": [
                    "projectView.js"
                ]
            }
        });
    }

    get scripts() {
        return _appConfig.get(this)._scripts;
    }

    post(url, params) {
        let promise = dhx.ajax.post(url, params, (text) => { });
        return promise;
    }

    get(url) {
        let promise = dhx.ajax.get(url, (text) => { });
        return promise;
    }
}