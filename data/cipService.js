// Service classes
const _apiEndpoint = new WeakMap();

class CIP_Service extends HTTP_Service {
    constructor() {
        super();

        _apiEndpoint.set(this, {
            "addProject": {
                "_url": "/_apps/cip/data/cipService.php",
                "_api": "projects",
                "_request": "addProject"
            },
            "deleteProject": {
                "_url": "/_apps/cip/data/cipService.php",
                "_api": "projects",
                "_request": "deleteProject"
            }
        });
    }

    getApiUrl(request) {
        return _apiEndpoint.get(this) + "?api=" + request;

        let endPoint = _apiEndpoint.get(this)[request];
        let url = endPoint._url;
        let api = endPoint._api;
        let request = endPoint._request;

        return url + "?api=" + api + "&request=" + request;
    }

    addProject(projectData) {
        try {
            let params = {
                "projectData": projectData
            }

            let promise = this.post(this.getApiUrl("addProject"), params).then(realdata => {

            }).fail(err => {
                console.log(err);

            })
        } catch (error) {
            console.log();
        }
    }

    deleteProject(projectId) {
        try {
            let params = {
                "projectId": projectId
            }

            let promise = this.post(this.getApiUrl("deleteProject"), params).then(realdata => {

            }).fail(err => {
                console.log(err);

            })
        } catch (error) {
            console.log();
        }
    }
}