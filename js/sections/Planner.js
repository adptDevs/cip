var Planner = (function(){
    var plannerTab;

    var init = function(tabbar, sectionACL){
        tabbar.addTab("planner", "Planner");

		plannerTab = tabbar.tabs("planner");

        plannerTab.setActive();
        
        plannerTab.attachForm(cipForms.projectInitiationFormData);
    };

    return{
        init: init
    };
})();