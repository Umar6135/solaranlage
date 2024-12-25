<?php if (isset($_GET['cty']) && $_GET['cty'] != '') {
    $newurl = '?cty=' . $_GET['cty'];
} else {
    $newurl = '';
}
?>
<!DOCTYPE html>
<html lang="de">

<head>

    <?php

    if ($GLOBALS['title']) {

        $title = $GLOBALS['title'];
    } else {

        $GLOBALS['title'] = "";
    }

    if ($GLOBALS['desc']) {

        $desc = $GLOBALS['desc'];
    } else {

        $desc = "";
    }

    ?>

    <title>
        <?php echo $title; ?>
    </title>
    <meta name="description" content="<?php echo $desc ?>" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/klaro.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/aos.css">
    <link rel="stylesheet" href="./assets/css/magnific-popup.css">
    <meta name="robots" content="noindex,nofollow" />
    <link rel="stylesheet" href="./assets/css/slick.css">
    <link rel="stylesheet" href="./assets/css/slick-theme.css">
    <link rel="stylesheet" href="./assets/css/style.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/fav/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/fav/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/fav/favicon-16x16.png">
    <link rel="manifest" href="/assets/fav/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">



    <script defer type="text/javascript" src="./assets/js/consens-con.js" charset="utf-8"></script>

    <script defer type="text/javascript" src="./assets/js/klaro.js" charset="utf-8"></script>



    <script async type="opt-in" data-type="application/javascript"
        data-src="https://www.googletagmanager.com/gtag/js?id=AW-11028460671" data-name="googleads"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'AW-11028460671');
        gtag('config', 'AW-11028460671/U0I7COPoqe0DEP_o44op', {
            'phone_conversion_number': '0231 99216603'
        });
    </script>


    <!-- Event snippet for Click auf E-Mail conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
    <script>
        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11028460671/whWHCP64-6cYEP_o44op',
                'event_callback': callback
            });
            return false;
        }
    </script>


<!-- Hotjar Tracking Code for https://solaranlage-haus.de/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3646434,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

</head>



<body>



    <div class="header_phone_mobile show_mobile d-xl-none" id="navbartops">
       <a href="tel:023199216603">
        <p>Jetzt anrufen : 0231 99216603
        </p></a>
    </div>

    <header class="header_main fixed-top" id="header-lower">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/<?= $newurl ?>"><img src="./assets/img/logo.svg" width="363" height="61"
                        class="img-fluid" alt="logo"></a>
                <div class="ml-sm-auto order-lg-last topactions ms-3 d-none d-lg-flex text-center">
                    <div class="ausgezeichnet">
                          <img src="./assets/img/ausgezeichnet.svg" width="60" height="60" alt="ausgezeichnet">
                    </div>
                    <div class="angebot-phone">
                    <span>Kostenlose Beratung</span>
                    <a href="tel:023199216603" class="navCall">0231 99216603</a>
                    </div>

                </div>
                <button class="navbar-toggler d-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-lg-0 header__nav">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="/<?= $newurl ?>">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="<?= $newurl ?>#gallerie">Unsere Anlagen</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="<?= $newurl ?>#reviews">Bewertungen</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="<?= $newurl ?>#benefits">Vorteile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="<?= $newurl ?>#">Angebot anfordern</a>
                        </li>
                    </ul>
                </div>
                <div class="ausgezeichnet d-lg-none">
                          <img src="./assets/img/ausgezeichnet.svg" width="60" height="60" alt="ausgezeichnet">
                </div>
            </div>
        </nav>
       
    </header>