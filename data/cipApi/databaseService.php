<?php

// Abstracting from DHTMLX connectors

class Database_Service {

    private $dbConfigFile;
    private $dbDriverFile;
    private $dbDriverName;
    private $dataConnectionPath;

    private $db;
    private $connectionInfo;
    private $connection;
    private $componentKey;

    

    public function __construct($db) {
        $this->db = $db;
        createDBConnection();
        $this->componentKey = createComponentKey();
    }

    private function createDBConnection() {
        $this->dbConfigFile  = '/dhtmlx/connector/db_config.php';
        $this->dbDriverFile = '/dhtmlx/connector/db_sqlsrv.php';
        $this->dbDriverName = 'SQLSrv';
        $this->dataConnectionPath = '/dhtmlx/connector/';

        require($dbConfigFile);
        require($dbDriverFile);
        $this->connectionInfo = array('Database'=>$this->db, 'UID'=>$sql_user, 'PWD'=>$sql_pass);
        $this->connection = sqlsrv_connect($sql_server, $this->connectionInfo);
    }

    public function insertData($insertStatement) {

    }

    public function getData($component, $table, $columns, $conditions, $primaryKey) {
        if (array_key_exists($component, $this->componentKey)) {
            require($this->dataConnectionPath . $this->componentKey[$component]);
            $objConnector = null;
            $query = _createQueryStatement($table, $columns, $conditions, $primaryKey);

            switch($component) {
                case "grid":
                    $objConnector = new GridConnector($this->connectionInfo, $this->dbDriverName);
                    break;

                case "combo":
                    break;

                default:
                    break;
            }
        }
    }

    private function _createQueryStatement($table, $columns, $conditions, $primaryKey) {
        $query = "SELECT " . $columns . " FROM " . $table;

        $where = "";
        for ($i = 0; $i < count($conditions); $i++) {
            $where
        }

    }

    private function createComponentKey() {
        return array(
            "grid" =>  "grid_connector.php",
            "combo" => "combo_connector.php"
        );
    }

}

?>