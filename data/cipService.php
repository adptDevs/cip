<?php

require("/_apps/cip/data/papApi/projectService.php");

define ("API", serialize (
    array(
        "projects" => new ProjectService_API()
    )
    ));

function isValidRequest($apiId) {
    $apiArray = unserialize(API);
    return array_key_exists($apiId, $apiArray);
}

// Start Here

$api = null;
$parameters = null;
$response = null;


if (!isValidRequest($_GET["api"])) exit(http_response_code(400));

$api = $_GET["api"];
$request = $_GET["request"];

if (isset($_POST["params"])) $parameters = json_decode($_POST["params"]);

$apiObj = unserialize(API)[$api];
    
foreach($parameters as $key => $value) {
    $apiObj->set($key, $value);
}

$response = $apiObj->requests($request);

//print_r($response);
echo $response;

?>