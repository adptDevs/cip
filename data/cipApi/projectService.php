<?php

class ProjectService_API {

    private $properties;
    private $db;

    public function __constuct() {

        require("databaseService.php");
        $db = new Database_Service();

        $this->properties = array(
            "projectData" => null
        );
        
    }

    public function set($key, $value) {

        if (array_key_exists($key, $this->properties)){
            $this->properties[$key] = $value;
        }

    }

}

?>