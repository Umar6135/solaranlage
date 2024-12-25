// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro-consens',

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group apps by their purpose in the modal. This is advisable
    // if you have a large number of apps. Users can then enable or disable
    // entire groups of apps instead of having to enable or disable every app.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro-consens',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Put a link to your privacy policy here (relative or absolute).
    // You can put a map with language-specific privacy policies here.
    privacyPolicy: '/datenschutz',

    // Defines the default state for applications (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party apps.
    mustConsent: false,

    // Show "accept all" to accept all apps instead of "ok" that only accepts
    // required and "default: true" apps
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // app descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            consentNotice: {
                learnMore: 'Cookies im Detail zustimmen/ablehnen...'
            },
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information in Cookies gespeichert sind.',
            },

            cookieConsent: {
                description: 'Speicherung Ihrer Cookie-Einstellungen',
                 learnMore: 'Cookies im Detail zustimmen/ablehnen...'
            },
                        ausgezeichnet:{
                description: 'Ausgezeichnet.org',
            },
            
             hotjar:{
                description: 'Hotjar Script',
            },
            
            googleads: {
                description: 'Cookie von Steuerung der erweiterten Script- und Ergenishandlungen.',
                title: 'Google Tag Manager (Google Ads)',
            },
            purposes: {
                analytics: 'Statistik',
                cookieconsent: 'Ihre Cookieeinstellungen',                
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Marketing',
                ux: 'Verbesserung der Bedienbarkeit der Website',
                
            },
            decline: 'Alle ablehnen',
            ok: 'Alle Cookies zulassen',
            
        },
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. Entries marked as "Example" are just for demonstration purposes and are not really used on this website.',
            },
            cookieConsent: {
                description: 'Stores your cookie settings',
            },
             ausgezeichnet:{
            description: 'Ausgezeichnet.org',
            },
            googleads: {
                description: 'Displaying of advertisements',
                title: 'Google Adwords Advertisement',
            },
            purposes: {
                cookieconsent: 'Cookie settings',
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                ux: 'Verbesserung der Bedienbarkeit der Website',
            },
        },
    },

    // This is a list of third-party apps that Klaro will manage for you.
    apps: [
          // The apps will appear in the modal in the same order as defined here.

        {
            name: 'cookieConsent',
            title: 'Cookie Consent',
            purposes: ['cookieconsent'],
            cookies: ['klaro-consens'],
            required: true,
        },
        {
            name: 'googleads',
            purposes: ['advertising'],
            cookies: [
                '_gat_gtag_AW_11028460671',
            ],
            default: true,
            callback: function(consent, app) {
                console.log(
                    'User consent for app ' + app.name + ': consent=' + consent
                );
            },
            required: false,
            optOut: false,
            onlyOnce: true,
        },
                  
        
      
        
    


/*        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
        },*/

    ],
};
