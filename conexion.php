<?php 

$db = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.6.2)(PORT = 1521)))(CONNECT_DATA=(SID=CJDB)))";
                  
$connection = oci_connect("cj_tmp", "eemptmp", $db, "UTF8");

if (!$connection){

    $m= oci_error();
    echo $m['message'],"\n";
    exit;
}

?>
