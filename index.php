<?php

require_once __DIR__ . '/includes/header.inc.php';

require_once __DIR__ . '/routes.frontend.php';

$app->group('/contact', function () use ($app) {
    $app->post('/sendMessage', function () use ($app) {
        require_once __CONTROLLER__ . 'CContactController.class.inc.php';
        $result = Contact::singleton()->sendMessage();
        echo $result;
    });
});

$app->run();