var cip = (function () {
    let appDir = "cip";
    let cip_model = null;
    let appPath = `/_apps/${appDir}/`;
    let sectionPath = `${appPath}/sections/`;
    let dataPath = `${appPath}/data/`;
    let appCell = null;
    //let oldSectionPath = appPath + "/sections/";


    const _initComponents = components => {
        for (let i = 0; i < components.length; i++) {
            window[components[i]].init(appCell);
        }
    }

    const init = (parent, acl, sections, userInfo, sectionList) => {
        let modelScript = `${appPath}cipModel.js?v=${Math.random()}`;
        Sentry.init({ dsn: 'https://ce68a3d8e7a34efb8cd2af75571631c7@sentry.io/1289078' });

        let loaderPromise = scriptLoader.load(modelScript);
        loaderPromise.then(() => {
            cip_model = new CIPMODEL();

            let componentsArray = [];

            let componentScriptsArray = [
                dataPath+"cipForms.js?v=" + Math.random(),
            ];
            
            for (let i = 0; i < sectionList.length; i++) {

                if (cip_model.scripts.hasOwnProperty(sectionList[i][0])) {
                    let currentSection = cip_model.scripts[sectionList[i][0]]
                    for (let j = 0; j < currentSection.length; j++) {
                        componentScriptsArray.push(`${sectionPath}${currentSection[j]}?v=${Math.random()}`);
                        componentsArray.push(currentSection[j].replace(".js", ""));
                    }
                }
            }

            if (componentScriptsArray.length > 0) {
                let componentLoaderPromise = scriptLoader.load(componentScriptsArray);
                componentLoaderPromise.then(() => {
                    appCell = parent;
                    _initComponents(componentsArray);
                }, err => {
                    console.log(err);
                    Sentry.captureException(err);
                });
            }
        }, err => {
            console.log("An error occurred!");
            console.log(err);
            Sentry.captureException(err);

            // Throw up error page
            //errorPage.setErrorPage(parent, "load");
        });
    };

    const post = (url, params) => {
        let postPromise = cip_model.post(url, params);
        postPromise.fail(err => {
            Sentry.captureException(err);
        });

        return postPromise
    };

    const get = (url) => {
        let getPromise = cip_model.get(url);
        getPromise.fail(err => {
            Sentry.captureException(err);
        });

        return getPromise;
    }

    return {
        runApp: init,
        post: post,
        get: get
    };

})();