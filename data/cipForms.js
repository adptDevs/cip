var cipForms = {
    projectInitiationFormData: [
        {type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
        {_idd: "129", type: "block", width: "auto", blockOffset: 20, list: [
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
            {_idd: "270", type: "block", width: "auto", blockOffset: "50", offsetTop: "20", list: [
                {_idd: "277", type: "radio", label: "New Construction", value: "", name: "projectType", position: "label-left", labelWidth: "150"},
                {_idd: "284", type: "radio", label: "Report", value: "", name: "projectType", position: "label-left", labelWidth: "150"},
                {_idd: "291", type: "newcolumn"},
                {_idd: "293", type: "radio", label: "Renovation", value: "", name: "projectType", position: "label-left", labelWidth: "150", offsetLeft: "50"},
                {_idd: "300", type: "radio", label: "Addition & Renovation", value: "", name: "projectType", position: "label-left", labelWidth: "150", offsetLeft: "50"},
                {_idd: "307", type: "newcolumn"},
                {_idd: "309", type: "radio", label: "Addition", value: "", name: "projectType", position: "label-left", offsetLeft: "50", labelWidth: "150"},
                {_idd: "316", type: "radio", label: "Other", value: "", name: "projectType", position: "label-left", offsetLeft: "50", labelWidth: "150"}
            ]},
            {_idd: "872", type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {_idd: "1259", type: "label", label: "Legacy Project:", value: "", labelWidth: "150"},
                {_idd: "958", type: "newcolumn"},
                {_idd: "879", type: "checkbox", value: "", name: "isLegacyProject"},
                {_idd: "1244", type: "newcolumn"},
                {_idd: "1386", type: "label", label: "Legacy Year:", value: "", labelWidth: "150", offsetLeft: "150"},
                {_idd: "1377", type: "newcolumn"},
                {_idd: "960", type: "combo", value: "", name: "legacyYear"}
            ]},
            {_idd: "1100", type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {_idd: "1126", type: "label", label: "Property Ownership:", value: "", labelWidth: "150"},
                {_idd: "1838", type: "newcolumn"},
                {_idd: "1840", type: "checkbox", label: "State", value: "", position: "label-left", name: "isStateOwnership"},
                {_idd: "1893", type: "newcolumn"},
                {_idd: "1895", type: "checkbox", label: "Lease", value: "", name: "isLeaseOwnership", offsetLeft: "50"},
                {_idd: "1926", type: "newcolumn"},
                {_idd: "1928", type: "checkbox", label: "Other", value: "", name: "isOtherOwnership", offsetLeft: "50"}
            ]},
            {_idd: "2131", type: "fieldset", width: "auto", label: "Project Review Coordination", blockOffset: 20, offsetTop: "20", list: [
                {type: "label", label: "Select all that apply:", value: "", labelWidth: "150"},
                {type: "block", width: "auto", blockOffset: "0", list: [
                    {type: "checkbox", label: "USACE", value: "", position: "label-left", name: "USACE"},
                    {type: "checkbox", label: "USFS", value: "", name: "USFS", position: "label-left"},
                    {type: "checkbox", label: "USFWS", value: "", name: "USFWS", position: "label-left"},
                    {type: "checkbox", label: "Special Use Permit", value: "", name: "Special Use Permit", position: "label-left"},
                    {type: "checkbox", label: "Section 404", value: "", name: "Section 404", position: "label-left"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "Section 106", value: "", offsetLeft: "50", name: "Section 106", position: "label-left"},
                    {type: "checkbox", label: "ARDOT", value: "", offsetLeft: "50", name: "ARDOT", position: "label-left"},
                    {type: "checkbox", label: "NPS", value: "", offsetLeft: "50", name: "NPS", position: "label-left"},
                    {type: "checkbox", label: "SHPO", value: "", offsetLeft: "50", name: "SHPO", position: "label-left"},
                    {type: "checkbox", label: "AHPP", value: "", offsetLeft: "50", name: "AHPP", position: "label-left"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "AGFC", value: "", offsetLeft: "50", name: "AGFC", position: "label-left"},
                    {type: "checkbox", label: "MUNICIPALITY", value: "", offsetLeft: "50", name: "MUNICIPALITY", position: "label-left"},
                    {type: "checkbox", label: "COUNTY", value: "", offsetLeft: "50", name: "COUNTY", position: "label-left"},
                    {type: "checkbox", label: "UTILITY EASEMENT", value: "", offsetLeft: "50", name: "UTILITY EASEMENT", position: "label-left"},
                    {type: "checkbox", label: "Entergy", value: "", offsetLeft: "50", name: "Entergy", position: "label-left"},
                    {type: "newcolumn"},
                    {type: "checkbox", label: "FERC", value: "", offsetLeft: "50", name: "FERC", position: "label-left"},
                    {type: "checkbox", label: "ADEQ", value: "", name: "ADEQ", position: "label-left", offsetLeft: "50"},
                    {type: "checkbox", label: "ANHC", value: "", name: "ANHC", position: "label-left", offsetLeft: "50"},
                    {type: "checkbox", label: "ANRC", value: "", name: "ANRC", position: "label-left", offsetLeft: "50"},
                    {type: "checkbox", label: "The Nature Conservancy", value: "", name: "The Nature Conservancy", position: "label-left", offsetLeft: "50"}
                ]}
            ]},
            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Park Planner:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", value: "", inputWidth: "300", name: "parkPlanner", disabled: true}
            ]},
            {type: "block", width: "auto", blockOffset: "0", offsetTop: "20", list: [
                {type: "label", label: "Estimated Project Budget:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", value: "", note: 			{text: "For Design Phase and/or Miscellaneous Reports"}, name: "budgetForDesign", inputWidth: "200"},
                {type: "newcolumn"},
                {type: "label", label: "Estimated Project Budget or N/A if a report:", value: "", labelWidth: "150"},
                {type: "newcolumn"},
                {type: "input", value: "", name: "budgetForConstruction", inputWidth: "200", note: 			{text: "For construction/implementation stage. If over $1m, check contract"}}
            ]},
            {type: "block", width: "auto", offsetTop: "20", list: [
                {type: "label", label: "Notes (300 characters)", value: ""},
                {type: "newcolumn"},
                {type: "input", value: "", name: "notes", inputWidth: "500", rows: "7", maxLength: "300"}
            ]},
            {type: "button", label: "New Input", value: "Submit", name: "submit", offsetTop: "20"}
        ]}
    ]
}