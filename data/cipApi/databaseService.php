<?php
define('IN_ADPT', true);

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
        $this->createDBConnection();
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

    public function insertData($values, $table) {
        $statement = "INSERT INTO " . $table
        $columnClause = "(";
        $valueClause = " VALUES (";
        foreach ($values as $key => $value) {
            $columnClause .= $key . ",";
            $valueClause .= $value . ",";
        }

        $columnClause = rtrim($columnClause, ",");
        $valueClause = rtrim($valueClause, ",");

        $statement .= $columnClause . $valueClause;

        // Try catch
    }

    public function deleteData($id, $tableId, $table) {
        $statement = "DELETE FROM " . $table . " WHERE " . $tableId . " = " . $id;

        // Try catch
    }

    public function getData($table, $conditions = [], $columns = "*") {
        $statement = "SELECT " . $columns . " FROM " . $table;

        if (count($conditions) > 0) {
            $whereClause = " WHERE ";
            foreach ($conditions as $key => $condition) {
                $whereClause .= $key . " = " . $condition["value"] . " " . $condition["conjunction"];
            }

            $statement .= $whereClause;
        }

        // Try catch
    }

    private function executeQuery($query) {
        $res = sqlsrv_query($this->connection, $query);
        if ($res === false) {
            return $this->getDBErrors();
        } else {
            return sqlsrv_fetch_array( $res, SQLSRV_FETCH_ASSOC );
        }
    }

    private function getDBErrors() {
        if(($errors = sqlsrv_errors() ) != null) {
            return $errors;
        }
        return null;
    }

    private function createComponentKey() {
        return array(
            "grid" =>  "grid_connector.php",
            "combo" => "combo_connector.php"
        );
    }

}

?>