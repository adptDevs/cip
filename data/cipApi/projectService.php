<?php

class ProjectService_API {

    private $properties;
    private $db;

    private $testDate;

    public function __constuct() {

        require("databaseService.php");
        $this->db = new Database_Service();

        $this->properties = array(
            "projectData" => null,
            "projectId" => null
        );

        $this->testData = array(
            "1" => array(
                "projectName" => "CIP Project",
                "submitDate" => "2018-10-01",
                "isApproved" => true,
                "projectInformation" => array(
                    "ptID" => "1",
                    "loc_name" => "Cane Creek"
                ),
                "projectType" => array(
                    "projectTypeID" => "1",
                    "projectType" => "New Construction"
                ),
                "legacyProject" => false,
                "legacyYear" => "",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => true,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => false,
                "sec404" => false,
                "sec106" => false,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => true,
                "utilityEase" => false, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => false,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => false,
                "parkPlanner" => array(
                    "pernr" => "00123456",
                    "fullName" => "John Doe"
                ),
                "estimatedBudget" => "20000.00",
                "estimatedProjectBudget" => "NA",
                "notes" => "This is a project"
            ),
            "2" => array(
                "projectName" => "PAP Project",
                "submitDate" => "2018-08-15",
                "isApproved" => true,
                "projectInformation" => array(
                    "ptID" => "2",
                    "loc_name" => "Mt. Nebo"
                ),
                "projectType" => array(
                    "projectTypeID" => "1",
                    "projectType" => "New Construction"
                ),
                "legacyProject" => false,
                "legacyYear" => "",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => true,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => true,
                "sec404" => false,
                "sec106" => true,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => false,
                "utilityEase" => false, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => false,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => true,
                "parkPlanner" => array(
                    "pernr" => "00789012",
                    "fullName" => "Jane Smith"
                ),
                "estimatedBudget" => "5000.00",
                "estimatedProjectBudget" => "10000.00",
                "notes" => "This is the policies and procedures project"
            ),
            "3" => array(
                "projectName" => "Bulk Fuel Project",
                "submitDate" => "2017-11-05",
                "isApproved" => false,
                "projectInformation" => array(
                    "ptID" => "3",
                    "loc_name" => "Lake DeGray"
                ),
                "projectType" => array(
                    "projectTypeID" => "5",
                    "projectType" => "Addition and Renovation"
                ),
                "legacyProject" => true,
                "legacyYear" => "FY16",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => false,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => false,
                "sec404" => false,
                "sec106" => false,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => true,
                "utilityEase" => true, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => true,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => false,
                "parkPlanner" => array(
                    "pernr" => "00034567",
                    "fullName" => "Jerry Fisher"
                ),
                "estimatedBudget" => "100000.00",
                "estimatedProjectBudget" => "NA",
                "notes" => "This is the bulk fuel project"
            )
        );

    }

    public function set($key, $value) {

        if (array_key_exists($key, $this->properties)){
            $this->properties[$key] = $value;
        }

    }

    public function requests($request) {

        $response = null;

        switch ($request) {
            case "addProject":
                $response = $this->addProject();
                break;

            case "deleteProject":
                $response = $this->deleteProject();
                break;

            case "getProjects":
                $response = $this->getProjects();
                break;

            case "getProject":
                $response = $this->getProject();
                break;

            default:
                $response = null;
        }

        return $response;

    }

    private function addProject() {
        $projectData = $this->properties["projectData"];

        // Add to DB...
        array_push($this->testData, $projectData);
        return "Added project";
    }

    private function deleteProject() {
        $projectId = $this->properties["projectId"];

        // Delete from DB...
        unset($this->testData[$projectId]);
        return "Deleted project";
    }

    private function getProjects() {
        // $tableName = "";
        //return $this->db->getData($tableName);
        $testData = array(
            "1" => array(
                "projectName" => "CIP Project",
                "submitDate" => "2018-10-01",
                "isApproved" => true,
                "projectInformation" => array(
                    "ptID" => "1",
                    "loc_name" => "Cane Creek"
                ),
                "projectType" => array(
                    "projectTypeID" => "1",
                    "projectType" => "New Construction"
                ),
                "legacyProject" => false,
                "legacyYear" => "",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => true,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => false,
                "sec404" => false,
                "sec106" => false,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => true,
                "utilityEase" => false, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => false,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => false,
                "parkPlanner" => array(
                    "pernr" => "00123456",
                    "fullName" => "John Doe"
                ),
                "estimatedBudget" => "20000.00",
                "estimatedProjectBudget" => "NA",
                "notes" => "This is a project"
            ),
            "2" => array(
                "projectName" => "PAP Project",
                "submitDate" => "2018-08-15",
                "isApproved" => true,
                "projectInformation" => array(
                    "ptID" => "2",
                    "loc_name" => "Mt. Nebo"
                ),
                "projectType" => array(
                    "projectTypeID" => "1",
                    "projectType" => "New Construction"
                ),
                "legacyProject" => false,
                "legacyYear" => "",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => true,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => true,
                "sec404" => false,
                "sec106" => true,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => false,
                "utilityEase" => false, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => false,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => true,
                "parkPlanner" => array(
                    "pernr" => "00789012",
                    "fullName" => "Jane Smith"
                ),
                "estimatedBudget" => "5000.00",
                "estimatedProjectBudget" => "10000.00",
                "notes" => "This is the policies and procedures project"
            ),
            "3" => array(
                "projectName" => "Bulk Fuel Project",
                "submitDate" => "2017-11-05",
                "isApproved" => false,
                "projectInformation" => array(
                    "ptID" => "3",
                    "loc_name" => "Lake DeGray"
                ),
                "projectType" => array(
                    "projectTypeID" => "5",
                    "projectType" => "Addition and Renovation"
                ),
                "legacyProject" => true,
                "legacyYear" => "FY16",
                "propertyOwnership" => array(
                    "ownerID" => "1",
                    "owner" => "State"
                ),
                "USACE" => false,
                "USFS" => true,
                "USFWS" => false,
                "specialUsePerm" => false,
                "sec404" => false,
                "sec106" => false,
                "ARDOT" => false,
                "NPS" => true,
                "SHPO" => false,
                "AHPP" => false,
                "AGFC" => false,
                "MUN" => false,
                "COUNTY" => true,
                "utilityEase" => true, 
                "ENTERGY" => false,
                "FERC" => false,
                "ADEQ" => true,
                "ANHC" => false,
                "ANRC" => false,
                "natureConserv" => false,
                "parkPlanner" => array(
                    "pernr" => "00034567",
                    "fullName" => "Jerry Fisher"
                ),
                "estimatedBudget" => "100000.00",
                "estimatedProjectBudget" => "NA",
                "notes" => "This is the bulk fuel project"
            )
        );
        //echo $testData;
        return json_encode($testData);
    }

    private function getProject() {
        $projectId = $this->properties["projectId"];
        $tableName = "";
        $conditions = array(
            "id" => array(
                "value" => $projectId,
                "conjunction" => ""
            )
        );

        //return $this->db->getData($tableName, $conditions);
        return json_encode($this->testData[$projectId]);
    }

}

?>