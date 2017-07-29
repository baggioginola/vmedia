<?php
/**
 * Created by PhpStorm.
 * User: mario.cuevas
 * Date: 5/4/2016
 * Time: 6:10 PM
 */


$app->get('/', function () use ($app) {
    global $settings;
    $app->render('index.php', array(
        'settings' => $settings
    ));
});

$app->get('/creatividad', function () use ($app) {
    $app->render('creatividad.php');
});

$app->get('/impacto', function () use ($app) {
    $app->render('impacto.php');
});

$app->get('/estrategia', function () use ($app) {
    $app->render('estrategia.php');
});

$app->get('/produccion-audiovisual', function () use ($app) {
    $app->render('produccion-audiovisual.php');
});

$app->get('/fotografia', function () use ($app) {
    $app->render('fotografia.php');
});

$app->get('/web-multimedia', function () use ($app) {
    $app->render('web-multimedia.php');
});

$app->get('/redes-sociales', function () use ($app) {
    $app->render('redes-sociales.php');
});

$app->get('/branding-publicidad', function () use ($app) {
    $app->render('branding-publicidad.php');
});

$app->get('/comunicacion-corporativa', function () use ($app) {
    $app->render('comunicacion-corporativa.php');
});

$app->get('/contact', function () use ($app) {
    $app->render('contact.php');
});