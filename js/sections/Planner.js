var Planner = (function(){

    var preDesignForm;
    var preDesignTab;

    var init = function(tabbar, sectionACL){

/////////////////
///// Tabbar ///
///////////////  

        tabbar.addTab("design", "PRE-DESIGN");

		preDesignTab = tabbar.tabs("design");

        preDesignTab.setActive();
        
/////////////////
///// FORM /////
///////////////  

       preDesignForm = preDesignTab.attachForm(cipForms.projectInitiationFormData); 
       
        
    };

    return{
        init: init
    };
})();