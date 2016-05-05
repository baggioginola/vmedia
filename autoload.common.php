<?php
/**
 * Created by PhpStorm.
 * User: mario.cuevas
 * Date: 5/4/2016
 * Time: 4:43 PM
 */
$paths = array (
    'controllers' => __CONTROLLER__,
    'classes-common' => CLASSES,
    'database' => DATABASE,
);

foreach ($paths as $path) {
    if (!is_dir($path)) {
        continue;
    }

    if (!$handle = opendir($path)) {
        continue;
    }

    while (false !== ($file = readdir($handle))) {
        if (in_array($file, array('.', '..')) or (strpos($file, 'test')) !== false) {
            continue;
        }

        if ((strpos($path, 'controller')) !== false and strcasecmp($file, 'CLogsController.class.inc.php') != 0 ) {
            continue;
        }

        require_once $path . $file;
    }
}

#$files = get_included_files();
#echo '<pre>' . print_r($files, 1) . '</pre>';
