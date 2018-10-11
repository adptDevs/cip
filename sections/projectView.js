var projectView = (function () {

    let projectGridColumns;
    let grid;
    let layout;
    let toolbar;
    let appWindow;
    let windowLayout;
    let initForm;
    let projectName;
    let today;
    let dd;
    let mm;
    let yyyy;
    let cip_service;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const _toolbarOnClick = () => {

        toolbar.attachEvent("onClick", function (id) {

            switch (id) {

                case '1': // ADD NEW PROJECT

                    if (appWindow.window('addProject_WINDOW').isHidden()) {

                        appWindow.window('addProject_WINDOW').show();
                        appWindow.window('addProject_WINDOW').bringToTop();
                        _parentDisable();

                    } else {

                        appWindow.window('addProject_WINDOW').bringToTop();

                    }

                    break;

                case '3': // DESTROY PROJECT

                    dhtmlx.confirm({
                        title: "<img src='/dhtmlx/codebase/imgs/bomb.png' style='position:absolute;width:54px;height:54px;left:135px;margin-left:10px;padding-bottom:5px;'</img>",
                        text: "Are you sure you want to destroy this project?",
                        ok: "Yes",
                        cancel: "No",
                        callback: function (result) {
                            if (result) {
                                // Call backend
                                cip_service.deleteProject(grid.getSelectedRowId());
                                grid.deleteSelectedRows();
                            }
                        }
                    });

                    break;


                case '5': // REFRESH



                    break;

            }

        });
    }

    // ____________________________________________________________________________________________________________________________________

    const _windowOnClose = () => {

        appWindow.attachEvent("onClose", function (win) {

            win.hide();
            win.setModal(false);
            return false;

        });
    }
    // ____________________________________________________________________________________________________________________________________

    const _parentDisable = () => {

        appWindow.window('addProject_WINDOW').setModal(true); // Disables Background.

    }

    // ____________________________________________________________________________________________________________________________________

    const _submitBtn = () => {

        initForm.attachEvent('onButtonClick', function (name) {

            today = new Date();
            dd = today.getDate();
            mm = today.getMonth() + 1;
            yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }

            today = mm + '/' + dd + '/' + yyyy;
            projectName = initForm.getItemValue("projectName");

            grid.addRow("id", [projectName, today]);

            initForm.clear();
            appWindow.window('addProject_WINDOW').hide();
            appWindow.window('addProject_WINDOW').setModal(false); // Disables Background.

            // Call backend
            let projectData = initForm.getFormData();
            cip_service.addProject(projectData);
        });



    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const init = (cell) => {

        cip_service = new CIP_Service();

        /////////////////////
        ///    WINDOW   ////
        ///////////////////

        appWindow = new dhtmlXWindows();
        appWindow.createWindow('addProject_WINDOW', 400, 50, 870, 900);
        appWindow.window('addProject_WINDOW').setText("");

        ///////////////////////////
        ///    WINDOW LAYOUT  ////
        /////////////////////////

        windowLayout = appWindow.window('addProject_WINDOW').attachLayout("1C");
        windowLayout.cells('a').setText("Add New Project");

        initForm = windowLayout.cells("a").attachForm(cipForms.projectInitiationFormData);

        /////////////////////////////
        ///    SECTION LAYOUT   ////
        ///////////////////////////

        layout = cell.attachLayout({

            pattern: "2U",

            cells: [
                { id: "a", text: "Projects", header: true },
                { id: "b", text: "Project File Wizard", header: true },

            ]

        });

        /////////////////////
        ///   TOOLBAR   ////
        ///////////////////

        toolbar = layout.cells("a").attachToolbar();
        toolbar.addButton(1, 1, 'Add New Project', '/dhtmlx/codebase/imgs/cube.png');
        toolbar.addSeparator(2, 2);
        toolbar.addButton(3, 3, 'Destroy Project', '/dhtmlx/codebase/imgs/bomb.png');
        toolbar.addSeparator(4, 4);
        toolbar.addButton(5, 5, 'Refresh Project Grid', '/dhtmlx/codebase/imgs/refresh.png');


        /////////////////////                                                                            
        ///    GRID     ////
        ///////////////////

        projectGridColumns = [

            {
                "columnName": "PROJECT NAME",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "420",
                "dbColumn": "pID"
            },
            {
                "columnName": "SUBMIT DATE",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "submitDate"

            },
            {
                "columnName": "APPROVED",
                "filter": "#select_filter",
                "type": "ck",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "approved"
            },

        ];

        gridCOMP.createGrid(layout.cells('a'), projectGridColumns, true, "projectGrid");
        grid = gridCOMP.getGrid();
        dhtmlx.message.hide("loadingBox");

        //////////////////////////                                                                            
        ///   HIDE WINDOW    ////
        ////////////////////////

        appWindow.window('addProject_WINDOW').hide();

        /////////////////////                                                                            
        ///   EVENTS    ////
        ///////////////////

        _toolbarOnClick();
        _windowOnClose();
        _submitBtn();

    };

    return {
        init: init
    };
})();



// Ajax examples:
/**
 * 1.)
 * let myPosts = cip.get("https://jsonplaceholder.typicode.com/posts");
    myPosts.then(realdata => {
        console.log(realdata);
    });

  * 2.)
    let myParams = { title: 'a', body: 'b' };
    let myPosts = cip.post("https://jsonplaceholder.typicode.com/posts", "obj="+myParams);
    myPosts.then(realdata => {
        console.log("POSTED!");
    });
 */