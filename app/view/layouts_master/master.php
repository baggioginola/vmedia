<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es-mx" lang="es-mx">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php echo CSS; ?>layout.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>template.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>font-awesome-4.6.1/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>parallax.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>camera/camera.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>icemegamenu/icemegamenu.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>icemegamenu/navbar.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>color_scheme_1.css"/>
    <link rel="stylesheet" href="<?php echo CSS; ?>style.css"/>

    <script src="https://player.vimeo.com/api/player.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>jquery-noconflict.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>jquery-migrate.min.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>bootstrap.min.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>script.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>autosize.min.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>parallax.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>camera.min.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>icemegamenu/menu.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>icemegamenu/navbar.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>custom/scroll-top.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>custom/scripts.js"></script>
    <script type="text/javascript" src="<?php echo JS; ?>custom/menu.js"></script>
    <script src="<?php echo JS; ?>custom/config.js" type="text/javascript"></script>
    <script src="<?php echo JS; ?>custom/contact.js" type="text/javascript"></script>
    <title>VMedia Comunicacion</title>

</head>
<body>

<div id="wrapper">
    <div class="wrapper-inner">
        <!--MENU SUPERIOR  -->
        <?php require_once TEMPLATE . 'top_menu.php'; ?>

        <?php echo $yield; ?>
    </div>
</div>

<?php require_once TEMPLATE . 'footer_wrapper.php'; ?>

<script type="text/javascript" src="<?php echo JS; ?>custom/scroll_nav.js"></script>
</body>
</html>