var Planner = (function(){
    var projectInitiationTab;
    var projectInitiationForm;
    var currentPlanner;
    var currentYear;

    var init = function(tabbar, sectionACL){
        tabbar.addTab("projectInitiate", "Project Initiation");

		projectInitiationTab = tabbar.tabs("projectInitiate");

        projectInitiationTab.setActive();
        
        projectInitiationForm = projectInitiationTab.attachForm(cipForms.projectInitiationFormData);

        projectInitiationForm.getCombo("location").load(cip.getPaths("connectors")+"location_connector.php");

        currentYear = (new Date()).getFullYear();
        var legacyYearCombo =  projectInitiationForm.getCombo("legacyYear");
            legacyYearCombo.addOption("FY"+(currentYear-1), "FY"+(currentYear-1));
            legacyYearCombo.addOption("FY"+(currentYear), "FY"+(currentYear));

            for(var i = 1; i < 6; i++){
                legacyYearCombo.addOption("FY"+(currentYear+i), "FY"+(currentYear+i));
            }



        currentPlanner = cip.getUserInfo()["fullName"];
        projectInitiationForm.setItemValue("parkPlanner", currentPlanner);
    };

    return{
        init: init
    };
})();