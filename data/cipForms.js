let cipForms = {

    ///////////////////////////////////////////////////////////
    //                Project Init Form                     //
    /////////////////////////////////////////////////////////

    projectInitiationFormData: [ 
       
      {type: "block", width: "auto", blockOffset: 0, style:"border-style:solid; padding: 5px; border-color: #caebf2; margin-top:10px; margin-left: 210px;", list: [
      
            {type: "label", name: "header",  label: "<h1><b>PROJECT INITIATION FORM</b></h1>"}
       
        ]},

      {type: "block", width: "auto", blockOffset: 20, list: [

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "40", list: [
                {type: "label", label: "Park Information:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "combo", name: "locationCombo", inputWidth: "500"}
            ]},

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Project Name:", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", name: "projectName", inputWidth: "500"}
            ]},

            {type: "fieldset", width: "auto", label: "Project Type", blockOffset: "0", offsetTop: "90", list: [
                {type: "radio", label: "New Construction", name: "newConstruction", position: "label-left", labelWidth: "150"},
                {type: "radio", label: "Report", name: "report", position: "label-left", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "radio", label: "Renovation", name: "renovation", position: "label-left", labelWidth: "150", offsetLeft: "50"},
                {type: "radio", label: "Addition & Renovation", name: "addAndRen", position: "label-left", labelWidth: "150", offsetLeft: "50"},
                {type: "newcolumn"},
                {type: "radio", label: "Addition", name: "addition", position: "label-left", offsetLeft: "50", labelWidth: "150"},
                {type: "radio", label: "Other", name: "other", position: "label-left", offsetLeft: "50", labelWidth: "150"}
            ]},

            {type: "fieldset",  label: "Legacy Project", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Legacy Project:", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "checkbox", name: "isLegacyProject"},
                {type: "newcolumn"},
                {type: "label", label: "Legacy Year:", labelWidth: "150", offsetLeft: "150"},
                {type: "newcolumn"},
                {type: "combo", name: "legacyYearCombo"}
            ]},

            {type: "fieldset", width: "auto", blockOffset: "0", label: "Property Ownership", offsetTop: "20", list: [
                {type: "checkbox", label: "State", position: "label-right", name: "isStateOwnership"},
                {type: "newcolumn"},
                {type: "checkbox", label: "Lease", position: "label-right", name: "isLeaseOwnership", offsetLeft: "50"},
                {type: "newcolumn"},
                {type: "checkbox", label: "Other", position: "label-right", name: "isOtherOwnership", offsetLeft: "50"}
            ]},

            {type: "fieldset", width: "auto", label: "Project Review Coordination", blockOffset: 20, offsetTop: "20", list: [
                {type: "label", label: "Select all that apply:", labelWidth: "150"},
                {type: "block", width: "auto", blockOffset: "0", list: [
                    {type: "checkbox", label: "USACE", position: "label-right", name: "USACE"},
                    {type: "checkbox", label: "USFS",  position: "label-right", name: "USFS",},
                    {type: "checkbox", label: "USFWS",  position: "label-right", name: "USFWS",},
                    {type: "checkbox", label: "Special Use Permit", name: "Special Use Permit", position: "label-right"},
                    {type: "checkbox", label: "Section 404", name: "Section 404", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "Section 106", offsetLeft: "50", name: "Section 106", position: "label-right"},
                    {type: "checkbox", label: "ARDOT", offsetLeft: "50", name: "ARDOT", position: "label-right"},
                    {type: "checkbox", label: "NPS", offsetLeft: "50", name: "NPS", position: "label-right"},
                    {type: "checkbox", label: "SHPO", offsetLeft: "50", name: "SHPO", position: "label-right"},
                    {type: "checkbox", label: "AHPP", offsetLeft: "50", name: "AHPP", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "AGFC", offsetLeft: "50", name: "AGFC", position: "label-right"},
                    {type: "checkbox", label: "MUNICIPALITY", offsetLeft: "50", name: "MUNICIPALITY", position: "label-right"},
                    {type: "checkbox", label: "COUNTY", offsetLeft: "50", name: "COUNTY", position: "label-right"},
                    {type: "checkbox", label: "UTILITY EASEMENT", offsetLeft: "50", name: "UTILITY EASEMENT", position: "label-right"},
                    {type: "checkbox", label: "Entergy",  offsetLeft: "50", name: "Entergy", position: "label-right"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "FERC",  name: "FERC", position: "label-right"},
                    {type: "checkbox", label: "ADEQ",  name: "ADEQ", position: "label-right"},
                    {type: "checkbox", label: "ANHC",  name: "ANHC", position: "label-right"},
                    {type: "checkbox", label: "ANRC",  name: "ANRC", position: "label-right"},
                    {type: "checkbox", label: "The Nature Conservancy", name: "The Nature Conservancy", position: "label-right"}
                ]}
            ]},

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Park Planner:",  labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", inputWidth: "300", name: "parkPlanner", disabled: true}
            ]},

            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Estimated Project Budget:", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", note: 			{text: "For Design Phase and/or Miscellaneous Reports"}, name: "budgetForDesign", inputWidth: "200"},
                {type: "newcolumn"},
                {type: "label", label: "Estimated Project Budget or N/A if a report:",  labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input",  name: "budgetForConstruction", inputWidth: "200", note: 			{text: "For construction/implementation stage. If over $1m, check contract"}}
            ]},

            {type: "block", width: "auto", offsetTop: "20", style:"background-color: #efefef;", list: [

                {type: "input", label: "<b>Notes:</b>", name: "notes", inputWidth: "725", rows: "7", maxLength: "300", style:"margin-right:15px;",position: "label-top",value: ""},

            ]},

            {type: "button", label: "New Input", value: "Submit", name: "submit", offsetTop: "20"}

        ]}
       
      ],

    
};
    
    