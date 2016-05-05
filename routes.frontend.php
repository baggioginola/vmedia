<?php
/**
 * Created by PhpStorm.
 * User: mario.cuevas
 * Date: 5/4/2016
 * Time: 6:10 PM
 */


$app->get('/', function() use ($app) {
    $app->render('index.php');
});

$app->get('/about', function() use ($app) {
    $app->render('about.php');
});