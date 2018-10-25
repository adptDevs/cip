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
                "isApproved" => true
            ),
            "2" => array(
                "projectName" => "PAP Project",
                "submitDate" => "2018-08-15",
                "isApproved" => true
            ),
            "3" => array(
                "projectName" => "Bulk Fuel Project",
                "submitDate" => "2017-11-05",
                "isApproved" => false
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
                "isApproved" => true
            ),
            "2" => array(
                "projectName" => "PAP Project",
                "submitDate" => "2018-08-15",
                "isApproved" => true
            ),
            "3" => array(
                "projectName" => "Bulk Fuel Project",
                "submitDate" => "2017-11-05",
                "isApproved" => false
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