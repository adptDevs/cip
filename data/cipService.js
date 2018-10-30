// Service classes
const _apiEndpoint = new WeakMap();
const _projectList = new WeakMap();

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
            },
            "getProjects": {
                "_url": "/_apps/cip/data/cipService.php",
                "_api": "projects",
                "_request": "getProjects"
            }
        });

        _projectList.set(this, {});
    }

    getApiUrl(request) {
        //return _apiEndpoint.get(this) + "?api=" + request;

        let endPoint = _apiEndpoint.get(this)[request];
        let url = endPoint._url;
        let api = endPoint._api;
        //let request = endPoint._request;

        return url + "?api=" + api + "&request=" + request;
    }

    addProject(projectData) {
        try {
            let params = {
                "projectData": projectData
            }

            let promise = this.post(this.getApiUrl("addProject"), params).then(realdata => {
                return JSON.parse(realdata);
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    deleteProject(projectId) {
        try {
            let params = {
                "projectId": projectId
            }

            let promise = this.post(this.getApiUrl("deleteProject"), params).then(realdata => {
                return JSON.parse(realdata);
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getProjects() {
        try {
            let promise = this.get(this.getApiUrl("getProjects")).then(realdata => {
                _projectList.set(this, JSON.parse(realdata));
                return JSON.parse(realdata);
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getProject(id) {
        let projectList = _projectList.get(this);
        return projectList[id];
    }
}