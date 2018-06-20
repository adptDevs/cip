var cipForms = {
    projectInitiationFormData: [
        {type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
        {type: "block", width: "auto", blockOffset: 300, list: [
            { type: "label", label: "<h1><span style='border:solid;padding:20px;'>PROJECT INITIATION FORM</span><h1>", labelWidth: "600"},
        ]},
        {_idd: "129", type: "block", width: "auto", blockOffset: 20, list: [
            {type: "block", width: "860", blockOffset: 20, style:"border-style:solid; padding: 10px; margin-left:25px; border-color: #caebf2; margin-top:20px;", list: [

            {_idd: "1570", type: "block", width: "auto", blockOffset: "0", list: [
                {_idd: "1610", type: "label", label: "Park Information:", value: "", labelWidth: "150"},
                {_idd: "1593", type: "newcolumn"},
                {_idd: "134", type: "combo", value: "", name: "location", inputWidth: "500"}
            ]},
            {_idd: "1560", type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {_idd: "1661", type: "label", label: "Project Name:", value: "", labelWidth: "150"},
                {_idd: "1595", type: "newcolumn"},
                {_idd: "215", type: "input", value: "", name: "projectName", inputWidth: "500"}
            ]},
        ]},

            {_idd: "270", type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
                {_idd: "270", type: "fieldset", width: "auto", label:"Project Type", offsetTop: "20", list: [
                {_idd: "277", type: "radio", label: "New Construction", value: "", name: "projectType", position: "label-right", labelWidth: "150"},
                {_idd: "284", type: "radio", label: "Report", value: "", name: "projectType", position: "label-right", labelWidth: "150"},
                {_idd: "291", type: "newcolumn"},
                {_idd: "293", type: "radio", label: "Renovation", value: "", name: "projectType", position: "label-right", labelWidth: "150", offsetLeft: "50"},
                {_idd: "300", type: "radio", label: "Addition & Renovation", value: "", name: "projectType", position: "label-right", labelWidth: "150", offsetLeft: "50"},
                {_idd: "307", type: "newcolumn"},
                {_idd: "309", type: "radio", label: "Addition", value: "", name: "projectType", position: "label-right", offsetLeft: "50", labelWidth: "150"},
                {_idd: "316", type: "radio", label: "Other", value: "", name: "projectType", position: "label-right", offsetLeft: "50", labelWidth: "330"}
            ]},    
        ]},
            {_idd: "872", type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
                {_idd: "270", type: "fieldset", width: "auto",  offsetTop: "20", list: [
                {_idd: "879", type: "checkbox", label: "Legacy Project:", labelWidth: "350", position: "label-right", name: "isLegacyProject"},
                {_idd: "1244", type: "newcolumn"},
                {_idd: "1386", type: "label", label: "Legacy Year:", value: "", labelWidth: "150", offsetLeft: "150"},
                {_idd: "1377", type: "newcolumn"},
                {_idd: "960", type: "combo", value: "", name: "legacyYear"}
            ]},
        ]},
         
            {_idd: "1100", type: "block", width: "auto", blockOffset: 20, offsetTop: "0", list: [
                
            ]},
          
                {type: "block", width: "auto", blockOffset: 20, offsetTop: "0", list: [
                    {_idd: "1126", type: "label", label: "<b>Property Ownership:</b>", value: "", labelWidth: "200"},
                    {_idd: "1893", type: "newcolumn"},
                {_idd: "1840", type: "checkbox", label: "State", value: "", position: "label-right", name: "isStateOwnership"},
                {_idd: "1893", type: "newcolumn"},
                {_idd: "1895", type: "checkbox", label: "Lease", value: "", position: "label-right", name: "isLeaseOwnership", offsetLeft: "50"},
                {_idd: "1926", type: "newcolumn"},
                {_idd: "1928", type: "checkbox", label: "Other", value: "", position: "label-right",  name: "isOtherOwnership", offsetLeft: "50"}
            ]},
     
            {type: "block", width: "auto", blockOffset: 20, list: [
            {_idd: "2131", type: "fieldset",  width: "auto", label: "Project Review Coordination", blockOffset: 20, offsetTop: "20", list: [
                {type: "label", label: "Select all that apply:", value: "", labelWidth: "150"},
                {type: "block", width: "auto", blockOffset: "0", list: [
                    {type: "checkbox", label: "USACE", value: "", position: "label-right", name: "USACE"},
                    {type: "checkbox", label: "USFS", value: "", name: "USFS", position: "label-right"},
                    {type: "checkbox", label: "USFWS", value: "", name: "USFWS", position: "label-right"},
                    {type: "checkbox", label: "Special Use Permit", labelWidth:200 , value: "", name: "Special Use Permit", position: "label-right"},
                    {type: "checkbox", label: "Section 404", value: "", name: "Section 404", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "Section 106", value: "", name: "Section 106", position: "label-right"},
                    {type: "checkbox", label: "ARDOT", value: "",  name: "ARDOT", position: "label-right"},
                    {type: "checkbox", label: "NPS", value: "",  name: "NPS", position: "label-right"},
                    {type: "checkbox", label: "SHPO", value: "",  name: "SHPO", position: "label-right"},
                    {type: "checkbox", label: "AHPP", value: "", name: "AHPP", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "AGFC", value: "", offsetLeft: "60", name: "AGFC", position: "label-right"},
                    {type: "checkbox", label: "MUNICIPALITY", value: "", offsetLeft: "60", name: "MUNICIPALITY", position: "label-right"},
                    {type: "checkbox", label: "COUNTY", value: "", offsetLeft: "60", name: "COUNTY", position: "label-right"},
                    {type: "checkbox", label: "UTILITY EASEMENT", labelWidth:200 , value: "", offsetLeft: "60", name: "UTILITY EASEMENT", position: "label-right"},
                    {type: "checkbox", label: "Entergy", value: "", offsetLeft: "60", name: "Entergy", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "FERC", value: "", name: "FERC", position: "label-right"},
                    {type: "checkbox", label: "ADEQ", value: "", name: "ADEQ", position: "label-right"},
                    {type: "checkbox", label: "ANHC", value: "", name: "ANHC", position: "label-right"},
                    {type: "checkbox", label: "ANRC", value: "", name: "ANRC", position: "label-right"},
                    {type: "checkbox", label: "The Nature Conservancy", value: "", labelWidth:140 , name: "The Nature Conservancy", position: "label-right"}
                ]}
            ]},
        ]},
        {type: "block", width: "870", blockOffset: 20, style:"border-style:solid; padding: 10px; margin-left:25px; border-color: #caebf2; margin-top:20px;", list: [
                {type: "label", label: "Park Planner:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "combo", value: "", inputWidth: "300", name: "parkPlanner"}
            ]},
            {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
                {type: "label", label: "Estimated Project Budget:", value: "", labelWidth: "200"},
                {type: "newcolumn"},
                {type: "input", value: "", note:{text: "For Design Phase and/or Miscellaneous Reports"}, name: "budgetForDesign", inputWidth: "200"},
                {type: "newcolumn"},
                {type: "label", label: "Estimated Project Budget or N/A if a report:", value: "", labelWidth: "200"},
                {type: "newcolumn"},
                {type: "input", value: "", name: "budgetForConstruction", inputWidth: "250", note:{text: "For construction/implementation stage. If over $1m, check contract"}}
            ]},
            {type: "block", width: "870", blockOffset: 20, style:"border-style:solid; padding: 10px; margin-left:25px;background-color:#efefef; border-color: #efefef; margin-top:20px;", list: [
                {type: "label", label: "NOTES:", value: ""},
                {type: "newcolumn"},
                {type: "input", value: " Add Project Notes Here..", name: "notes", inputWidth: "700", rows: "7", maxLength: "300"}
            ]},
            {type: "button", label: "New Input", value: "Submit", name: "submit", offsetTop: "20"}

    ]}
    ],

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////             //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////                           ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////      Dont Touch my code         /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////                           /////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////              /////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////   ///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////       //////////////////////////////////////        /////////////////   //////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



preDesignFormData: [
        {type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
        {type: "block", width: "auto", blockOffset: 320, list: [
            { type: "label", label: "<h1><span style='border:solid;padding:20px;'>PRE-DESIGN FORM</span><h1>", labelWidth: "600"},
        ]},
        {type: "block", width: "860", blockOffset: 20, style:"border-style:solid; padding: 10px; margin-left:30px; border-color: #caebf2; margin-top:20px;", list: [
            
            {type: "block", width: "auto", blockOffset: "0", list: [
                { type: "label", label: "Park Information:", value: "", labelWidth: "150"},
                { type: "newcolumn"},
                {type: "combo", value: "", name: "location", inputWidth: "500"}
            ]},

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                { type: "label", label: "Planner:", value: "", labelWidth: "150"},
                { type: "newcolumn"},
                {type: "input", value: "", name: "planner", inputWidth: "500"}
            ]},

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Project Name:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                { type: "input", value: "", name: "projectName", inputWidth: "500"}
            ]},

           
        ]},
        
        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", label: "Funding allocated for project?:", value: "", labelWidth: "200"},
            { type: "newcolumn"},
            { type: "checkbox", label: "Yes.", value: "", position: "label-right", name: "yesAllowcated"},
            { type: "newcolumn"},
            { type: "checkbox", label: "No.", value: "", position: "label-right", name: "noAllowcated"}
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
        {type: "fieldset", label:"Fund Sources & MOFs:", width: "auto", blockOffset: 20, list: [
            {type: "button", name:"addSourcesBtn", value: "<img src='/dhtmlx/codebase/imgs/edit.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>Add a Fund Source</span>", labelWidth: "150"},
            {type: "block", width: "auto", blockOffset: 20, name:"source", hidden:false , offsetTop: "20", list: [
                { type: "input", value: "", label:"Source:", name: "Source", inputWidth: "300"},
                { type: "newcolumn"},
                { type: "input", value: "", label: "MOF:", name: "MOF", inputWidth: "300"}
                ////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////// ADD INPUTS HERE! YAY! /////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
            ]},
        ]},
    ]},
    {type: "block", width: "860", blockOffset: 20, style:"border-style:solid; padding: 10px; margin-left:30px; border-color: #caebf2; margin-top:20px;", list: [
        {type: "block", width: "auto", blockOffset: 20, list: [
            { type: "label", label: "Project Coordinator::", value: "", labelWidth: "200"},
            { type: "newcolumn"},
            {type: "combo", value: "", name: "location", inputWidth: "500"}
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", label: "Design Consultant", value: "", labelWidth: "200"},
            { type: "newcolumn"},
            {type: "input", value: "", name: "planner", inputWidth: "500"}
        ]},
    ]},
        
        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", name:"staffDate", label: "<h3>Staff Pre-Design Planning Meeting Date:<h3>", labelWidth: "400"},
      
            { type: "calendar", name:"staffMeetingDate", labelWidth: "250"},
        ]},


        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", label: "<h3>Pre-design meeting Date with Park and Consultant:<h3>", labelWidth: "400"},
            
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "0", list: [
            { type: "calendar", name:"preDesignMeetConsultantDate", labelWidth: "250"},
            { type: "newcolumn"},
            {type: "input", value: "", name: "initial1", inputWidth: "300"}
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", label: "<h3>Pre-design meeting comments received from Consultant:<h3>",  labelWidth: "450"},
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "0", list: [
            { type: "calendar", name:"preDesignMeetCommentDate", labelWidth: "250"},
            { type: "newcolumn"},
            {type: "input", value: "", name: "initial2", inputWidth: "300"}
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "20", list: [
            { type: "label", label: "<h3>ASP review & approval of pre-design meeting comments to proceed sent to consultant:<h3>",  labelWidth: "650"},
        ]},

        {type: "block", width: "auto", blockOffset: 20, offsetTop: "0", list: [
            { type: "calendar", name:"sentDate", labelWidth: "250"},
            { type: "newcolumn"},
            {type: "input", value: "", name: "initial3", inputWidth: "300"}
        ]},
    ]
}