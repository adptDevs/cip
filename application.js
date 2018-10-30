var cip = (function () {
    let appDir = "cip";
    let cip_model = null;
    let appPath = `/_apps/${appDir}/`;
    let sectionPath = `${appPath}sections/`;
    let dataPath = `${appPath}data/`;
    let appCell = null;
    let appSections = null;
    let componentScriptsArray = null;
    let componentArray = [];


    const _initComponents = () => {
        let components = componentArray;
        for (let i = 0; i < components.length; i++) {
            window[components[i]].init(appCell);
        }
    }

    const _loadModelService = () => {
        let modelScript = `${appPath}cipModel.js?v=${Math.random()}`;
        return scriptLoader.load(modelScript);
    };

    const _loadComponents = () => {
        componentScriptsArray = [
            dataPath + "cipForms.js?v=" + Math.random(),
            dataPath + "cipService.js?v=" + Math.random(),
        ];

        for (let i = 0; i < appSections.length; i++) {

            if (cip_model.scripts.hasOwnProperty(appSections[i][0])) {
                let currentSection = cip_model.scripts[appSections[i][0]]
                for (let j = 0; j < currentSection.length; j++) {
                    componentScriptsArray.push(`${sectionPath}${currentSection[j]}?v=${Math.random()}`);
                    componentArray.push(currentSection[j].replace(".js", ""));
                }
            }

            console.log(componentScriptsArray);


            return scriptLoader.load(componentScriptsArray);
        }
    };

    const init = (parent, acl, sections, userInfo, sectionList) => {
        Sentry.init({ dsn: 'https://ce68a3d8e7a34efb8cd2af75571631c7@sentry.io/1289078' });

        appSections = sectionList;


        let httpServiceScript = `${appPath}cipHTTPService.js?v=${Math.random()}`;

        let loaderPromise = scriptLoader.load(httpServiceScript);

        loaderPromise.then(() => {
            let loaderModel = _loadModelService();
            loaderModel.then(() => {
                cip_model = new CIPMODEL();
                let loaderComponent = _loadComponents();
                loaderComponent.then(() => {
                    appCell = parent;
                    _initComponents();
                }, err => {
                    console.log(err);
                    Sentry.captureException(err);
                });
            }, err => {
                console.log(err);
                Sentry.captureException(err);
            });
        }, err => {
            console.log(err);
            Sentry.captureException(err);
        });
    };

    return {
        runApp: init
    };

})();