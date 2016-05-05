<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/autoload.common.php';
//require_once __DIR__ . '/database.php';
require_once FRAMEWORK . 'Slim/Slim.php';

if (strcasecmp(ENVIRONMENT, 'test') == 0) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    //\php_error\reportErrors();
}

\Slim\Slim::registerAutoloader();

$app  = new \Slim\Slim(array(
        'debug' => true,
        'templates.path' => 'app/view/',
        'view' => '\Slim\LayoutView',
        'layout' => 'layouts_master/master.php',
        'http.version' => '1.1'
    )
);

$app->get('/', function() use ($app) {
    $app->render('index.php');
});

$app->get('/about', function() use ($app) {
    $app->render('about.php');
});

$app->run();