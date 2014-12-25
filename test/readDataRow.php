<?php
    header('Content-type: text/html;charset=utf-8');
        $path="dataRow.txt";
        $f = fopen($path, "r");
		$record = fread($f,filesize("dataRow.txt"));

       	echo $record; 
      	fclose($f);
?>
