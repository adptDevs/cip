<?php
	define('IN_ADPT', true);
	// Modify component_connector.php for DHTMLX component being used
	require('/dhtmlx/connector/combo_connector.php');
	require('/dhtmlx/connector/db_config.php');
	require('/dhtmlx/connector/db_sqlsrv.php');

	$sql_db = 'CommonCore';
	$sql_conn_info = array('Database'=>$sql_db, 'UID'=>$sql_user, 'PWD'=>$sql_pass);

	$conn = sqlsrv_connect($sql_server,$sql_conn_info);
	$combo = new ComboConnector($conn, "SQLSrv");

	$combo->render_sql("SELECT ptID, (RTRIM(loc_name) + ' - ' + pt_code + ' - ' + sect_region) as parkInfo FROM adpt_locations WHERE pt_code NOT LIKE 'PT08' ORDER BY loc_name","ptID","parkInfo,ptID");
?>