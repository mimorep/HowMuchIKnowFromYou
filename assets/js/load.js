/**
 ****************************************************************
 *      Js with methods that executes when onload is finish     *
 *                      by Miguel Moreno Pastor                 *
 ****************************************************************
 */

const scrollLock = () => window.scrollTo(0, 0);

const asciiArt = `
        $$\      $$\ $$$$$$$$\ 
        $$$\    $$$ |\____$$  |
        $$$$\  $$$$ |    $$  / 
        $$\$$\$$ $$ |   $$  /  
        $$ \$$$  $$ |  $$  /   
        $$ |\$  /$$ | $$  /    
        $$ | \_/ $$ |$$  /     
        \__|     \__|\__/   
        ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ 
        ||p |||r |||o |||d |||u |||c |||t |||i |||o |||n |||s ||
        ||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
        |/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|

        `;

var userAgent = undefined,
    clientIP = undefined,
    clientIPInfo = undefined,
    clientLanguage = undefined,
    clientCountryL = undefined,
    clientSO = undefined,
    clientCookiesActive = false,
    clientPrevWeb = undefined,
    clientMobile = false,
    appVersion = undefined,
    clipboard = undefined;

var countrys = [
                {'Abkhazian': 'ab'},
                {'Afar': 'aa'},
                {'Afrikaans': 'af'},
                {'Akan': 'ak'},
                {'Albanian': 'sq'},
                {'Amharic': 'am'},
                {'Arabic': 'ar'},
                {'Aragonese': 'an'},
                {'Armenian': 'hy'},
                {'Assamese': 'as'},
                {'Avaric': 'av'},
                {'Avestan': 'ae'},
                {'Aymara': 'ay'},
                {'Azerbaijani': 'az'},
                {'Bambara': 'bm'},
                {'Bashkir': 'ba'},
                {'Basque': 'eu'},
                {'Belarusian': 'be'},
                {'Bengali {Bangla)': 'bn'},
                {'Bihari': 'bh'},
                {'Bislama': 'bi'},
                {'Bosnian': 'bs'},
                {'Breton': 'br'},
                {'Bulgarian': 'bg'},
                {'Burmese': 'my'},
                {'Catalan': 'ca'},
                {'Chamorro': 'ch'},
                {'Chechen': 'ce'},
                {'Chichewa, hewa, Nyanja': 'ny'},
                {'Chinese': 'zh'},
                {'Chinese (Simplified)': 'z-Hans'},
                {'Chinese (Traditional)': 'z-Hant'},
                {'Chuvash': 'cv'},
                {'Cornish': 'kw'},
                {'Corsican': 'co'},
                {'Cree': 'cr'},
                {'Croatian': 'hr'},
                {'Czech': 'cs'},
                {'Danish': 'da'},
                {'Divehi, {hivehi, Maldivian': 'dv'},
                {'Dutch': 'nl'},
                {'Dzongkha': 'dz'},
                {'English': 'en'},
                {'Esperanto': 'eo'},
                {'Estonian': 'et'},
                {'Ewe': 'ee'},
                {'Faroese': 'fo'},
                {'Fijian': 'fj'},
                {'Finnish': 'fi'},
                {'French': 'fr'},
                {'Fula, Fulah, ulaar, Pular': 'ff'},
                {'Galician': 'gl'},
                {'Gaelic Scottish)': 'gd'},
                {'Gaelic Manx)': 'gv'},
                {'Georgian': 'ka'},
                {'German': 'de'},
                {'Greek': 'el'},
                {'Greenlandic': 'kl'},
                {'Guarani': 'gn'},
                {'Gujarati': 'gu'},
                {'aitian Creole': 'ht'},
                {'Hausa': 'ha'},
                {'Hebrew': 'he'},
                {'Herero': 'hz'},
                {'Hindi': 'hi'},
                {'{iri Motu': 'ho'},
                {'Hungarian': 'hu'},
                {'Icelandic': 'is'},
                {'Ido': 'io'},
                {'Igbo': 'ig'},
                {'Indonesian': 'in'},
                {'Interlingua': 'ia'},
                {'Interlingue': 'ie'},
                {'Inuktitut': 'iu'},
                {'Inupiak': 'ik'},
                {'Irish': 'ga'},
                {'Italian': 'it'},
                {'Japanese': 'ja'},
                {'Javanese': 'jv'},
                {'alaallisut, Greenlandic': 'kl'},
                {'Kannada': 'kn'},
                {'Kanuri': 'kr'},
                {'Kashmiri': 'ks'},
                {'Kazakh': 'kk'},
                {'Khmer': 'km'},
                {'Kikuyu': 'ki'},
                {'Kinyarwanda Rwanda)': 'rw'},
                {'Kirundi': 'rn'},
                {'Kyrgyz': 'ky'},
                {'Komi': 'kv'},
                {'Kongo': 'kg'},
                {'Korean': 'ko'},
                {'Kurdish': 'ku'},
                {'Kwanyama': 'kj'},
                {'Lao': 'lo'},
                {'Latin': 'la'},
                {'Latvian Lettish)': 'lv'},
                {'Limburgish Limburger)': 'li'},
                {'Lingala': 'ln'},
                {'Lithuanian': 'lt'},
                {'uga-Katanga': 'lu'},
                {'uganda, Ganda': 'lg'},
                {'Luxembourgish': 'lb'},
                {'Manx': 'gv'},
                {'Macedonian': 'mk'},
                {'Malagasy': 'mg'},
                {'Malay': 'ms'},
                {'Malayalam': 'ml'},
                {'Maltese': 'mt'},
                {'Maori': 'mi'},
                {'Marathi': 'mr'},
                {'Marshallese': 'mh'},
                {'Moldavian': 'mo'},
                {'Mongolian': 'mn'},
                {'Nauru': 'na'},
                {'Navajo': 'nv'},
                {'Ndonga': 'ng'},
                {'orthern Ndebele': 'nd'},
                {'Nepali': 'ne'},
                {'Norwegian': 'no'},
                {'orwegian bokmål': 'nb'},
                {'orwegian nynorsk': 'nn'},
                {'Nuosu': 'ii'},
                {'Occitan': 'oc'},
                {'Ojibwe': 'oj'},
                {'Old Church Slavonic, ld Bulgarian': 'cu'},
                {'Oriya': 'or'},
                {'Oromo (Afaan Oromo)': 'om'},
                {'Ossetian': 'os'},
                {'Pāli': 'pi'},
                {'Pashto, Pushto': 'ps'},
                {'Persian (Farsi)': 'fa'},
                {'Polish': 'pl'},
                {'Portuguese': 'pt'},
                {'Punjabi (Eastern)': 'pa'},
                {'Quechua': 'qu'},
                {'Romansh': 'rm'},
                {'Romanian': 'ro'},
                {'Russian': 'ru'},
                {'Sami': 'se'},
                {'Samoan': 'sm'},
                {'Sango': 'sg'},
                {'Sanskrit': 'sa'},
                {'Serbian': 'sr'},
                {'Serbo-Croatian': 'sh'},
                {'Sesotho': 'st'},
                {'Setswana': 'tn'},
                {'Shona': 'sn'},
                {'Sichuan Yi': 'ii'},
                {'Sindhi': 'sd'},
                {'Sinhalese': 'si'},
                {'Siswati': 'ss'},
                {'Slovak': 'sk'},
                {'Slovenian': 'sl'},
                {'Somali': 'so'},
                {'Southern Ndebele': 'nr'},
                {'Spanish': 'es'},
                {'Sundanese': 'su'},
                {'Swahili (Kiswahili)': 'sw'},
                {'Swati': 'ss'},
                {'Swedish': 'sv'},
                {'Tagalog': 'tl'},
                {'Tahitian': 'ty'},
                {'Tajik': 'tg'},
                {'Tamil': 'ta'},
                {'Tatar': 'tt'},
                {'Telugu': 'te'},
                {'Thai': 'th'},
                {'Tibetan': 'bo'},
                {'Tigrinya': 'ti'},
                {'Tonga': 'to'},
                {'Tsonga': 'ts'},
                {'Turkish': 'tr'},
                {'Turkmen': 'tk'},
                {'Twi': 'tw'},
                {'Uyghur': 'ug'},
                {'Ukrainian': 'uk'},
                {'Urdu': 'ur'},
                {'Uzbek': 'uz'},
                {'Venda': 've'},
                {'Vietnamese': 'vi'},
                {'Volapük': 'vo'},
                {'Wallon': 'wa'},
                {'Welsh': 'cy'},
                {'Wolof': 'wo'},
                {'Western Frisian': 'fy'},
                {'Xhosa': 'xh'},
                {'Yiddish': 'ji'},
                {'Yoruba': 'yo'},
                {'Zhuang, Chuang': 'za'},
                {'Zulu': 'zu'},
];

var osImages = {
    Windows: "bi-windows",
    Apple: "bi-apple",
    Other: "bi-laptop",
    Mobile: "bi-phone"
}


/**
 * @description Method that loads all the info when the page is loaded
 * @author Mmoreno
 */
function init () { 

    // Load ascii art
    console.log(asciiArt);

    var locationURL = new URL(window.location.href),
        redirect = locationURL.searchParams.get('redirect');

    if (redirect !== null)
        window.location = redirect;

    for (let c of countrys) {
        var key = undefined
        for (let k in c) {
            key = k;
        }
        if (c[key] == navigator.languages[1]) {
            clientLanguage = c[key];
            clientCountryL = key;
        }
    }

    switch (navigator.userAgentData.platform) {
        case "Windows":
            clientSO = 'Windows';
            break;
        case "Android":
            clientSO = 'Mobile';
            break;
        case "Macintosh":
            clientSO = 'Apple';
            break;
        case "iPhone":
            clientSO = 'Apple';
            break;
        case "iPad":
            clientSO = 'Apple';
            break;
        default:
            clientSO = 'Other';
            break;
    }
    clientMobile = navigator.userAgentData.mobile;
    clientPrevWeb = document.referrer;
    clientCookiesActive = navigator.cookieEnabled;

    // Timeout for rendering
    setTimeout( () => {
        // Change de country flag
        if (document.getElementById('countryFlag').classList.remove('flag-icon-gr'));
        if (document.getElementById('countryFlag').classList.add(`flag-icon-${clientLanguage}`));

        // Change de OS logo
        if (document.getElementById('OSImage').classList.remove('bi-laptop'));
        
        if (document.getElementById('OSImage').classList.add(`${osImages[clientSO]}`));

        var languageItem = document.getElementById('clienteLanguage'),
            languageText = languageItem.innerText,
            osItem = document.getElementById('OSDesription'),
            osText = osItem.innerText,
            prevWeb = document.getElementById('prevWeb'),
            prevWebText = prevWeb.innerText;

        osText = osText.replace('_OS_', clientSO);
        languageText = languageText.replace('_language_', clientCountryL);
        prevWebText = prevWebText.replace('_Website_', clientPrevWeb);
        if (clientPrevWeb.includes('linkedin')) {
            var linkedLink = document.createElement("a");
            
            linkedLink.href = "https://www.linkedin.com/in/miguel-moreno-pastor";
            linkedLink.target = '_blank';
            linkedLink.innerHTML = "Miguel Moreno Pastor";

            // Add the link to the end
            prevWebText = prevWebText + ', by the way you should follow ';
        }        
        languageItem.innerText = languageText;
        osItem.innerText = osText;
        prevWeb.innerText = prevWebText;
        if (linkedLink)
            prevWeb.appendChild(linkedLink);
        
    }, 1000);    
}

/**
 * @description Method that obtains info of the client based on his IP
 * @author Mmoreno
 */
function getIPInfo () {

    var p =  new Promise ((resolve, reject) => {
        var ajaxJSON = {
            type: 'GET',
            async: false,
            url: `http://ip-api.com/json/${clientIP}`,
            dataType: 'json',
            success: data => {
                resolve(data);
            },
            error: error => {
                reject(error);
            }
        };

        $.ajax(ajaxJSON);
    });

    p.then(result => {
        // Set the internet provider        
        console.log(result);
        var internetItem = document.getElementById('internetProvider'),
            locationItem = document.getElementById('locationInfo'),
            geoLocationItem = document.getElementById('geoLocation'),
            geoLocationTitleItem = document.getElementById('geoLocationTitle'),
            internetText = internetItem.innerText,
            locationText = locationItem.innerText;

        internetText = internetText.replace('_InternetProvider_', result.isp);
        locationText = locationText.replace('_Country_', result.country);
        locationText = locationText.replace('_City_', result.city);
        locationText = locationText.replace('_ZIP_', result.zip);

        internetItem.innerText = internetText;
        locationItem.innerText = locationText;
        geoLocationItem.href = `https://maps.google.com/?q=${result.lat},${result.lon}`;
        geoLocationTitleItem.href = `https://maps.google.com/?q=${result.lat},${result.lon}`;
    });
}

function makeHistoryInyection () {
    // Gen random number
    let random = Math.floor(Math.random() * 7777);

    // Cambiamos el favicon y el título
    var favicon = document.getElementById('favicon');

    favicon.href = 'assets/img/americanBank.ico';
    document.title = 'A Bank of America not suspicious at all :)';
    history.pushState({id: random}, '', `?redirect=https://www.linkedin.com/in/miguel-moreno-pastor`);

    // Cerramos la web para que el usuario se vea forzado a abrirla de nuevo
    window.close();    
}

/**
 * @description Method that gets the client ip
 * @param {*} json JSON with the data
 * @author Mmoreno
 */
function getIP (json) {
    clientIP = json.ip;
}

window.onload = init();

