var cip = (function(){
	// Private variables
	var appName = "CIP";
	var appDir = "cip";
	var sectionPath = "/_apps/cip/js/sections/";
	var modPath = "/_apps/cip/js/mods/";
	var componentPath = "/_apps/cip/js/components/";
	var appPath = "/_apps/cip/js/";
	var conPath = "/_apps/cip/connectors/";
	var dataPath = "/_apps/cip/data/";
	var extPath = "/_apps/cip/ext/";
	var appLayout;
	var tabbar;
	var userInfo;
	var appSections;

// Private methods
	var _initMODS = function(sec){
		for(var i = 0; i < sec.length; i++){
			console.log(sec[i][0]);
			window[sec[i][0]].init(tabbar, sec[i][1]);
		}
	};

// Public methods
	var getAppDirectory = function(){
		return appDir;
	};

	var getUserInfo = function(){
		return userInfo;
	};

	var getPaths = function(type){
		switch(type){
			case "apps":
				return appPath;
				break;

			case "connectors":
				return conPath;
				break;

			case "data":
				return dataPath;
				break;

			case "ext":
				return extPath
				break;

			case "sections":
				return sectionPath
				break;

			case "mods":
				return modPath;
				break;

			case "components":
				return componentPath;
				break;

			default:
				return "error";
				break;
		}
	};

	var getSections = function(){
		return appSections[0][0];
	};

	var init = function(parent, acl, sections, userData, sectionList){
		var scriptArray = [];
		for(var i = 0; i < sectionList.length; i++){
			scriptArray.push(sectionPath+sectionList[i][0]+".js");
		}

		var loaderPromise = scriptLoader.load(scriptArray);
			loaderPromise.then(function(){
				console.log("CIP MODS are loaded");
				// Create layout;
				appLayout = new dhtmlXLayoutObject({
					parent:	parent,
					pattern: "1C",
					cells: [
						{id: 'a', text: '', header: false}
					]
				});
				tabbar = appLayout.cells("a").attachTabbar({
					align: "left",
					mode: "top"
				});

				// Set user data
				userInfo = userData;

				// Set app sections
				appSections = sectionList;

				// Initialize mods
				_initMODS(sectionList);
			}, function(err){
				console.log("An error occurred!");
				console.log(err);

				// Throw up error page
				//errorPage.setErrorPage(parent, "load");
			});
	};

	return{
		runApp: init,
		getAppDirectory: getAppDirectory,
		getUserInfo: getUserInfo,
		getPaths: getPaths,
		getSections: getSections
	}
})();