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
    clipboard = undefined,
    apiKey = '926c3b5a5a204d1c9b44dedff53e9003'; 

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

var osDictionary = [
    {'Windows 3.11' : 'Win16'},
    {'Windows 95' : '(Windows 95)|(Win95)|(Windows_95)'},
    {'Windows 98' : '(Windows 98)|(Win98)'},
    {'Windows 2000' : '(Windows NT 5.0)|(Windows 2000)'},
    {'Windows XP' : '(Windows NT 5.1)|(Windows XP)'},
    {'Windows Server 2003' : '(Windows NT 5.2)'},
    {'Windows Vista' : '(Windows NT 6.0)'},
    {'Windows 7' : '(Windows NT 6.1)'},
    {'Windows 8' : '(Windows NT 6.2)|(WOW64)'},
    {'Windows 10' : '(Windows 10.0)|(Windows NT 10.0)'},
    {'Windows NT 4.0' : '(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)'},
    {'Windows ME' : 'Windows ME'},
    {'Open BSD' : 'OpenBSD'},
    {'Sun OS' : 'SunOS'},
    {'Linux' : '(Linux)|(X11)'},
    {'Mac OS' : '(Mac_PowerPC)|(Macintosh)'},
    {'QNX' : 'QNX'},
    {'BeOS' : 'BeOS'},
    {'OS/2' : 'OS/2'},
    {'Search Bot':'(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves/Teoma)|(ia_archiver)'}

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

    // TODO: Tenemos que controlar si estamos en MAC o en Windows por que en MAC no existe userAgentData

    var locationURL = new URL(window.location.href),
        redirect = locationURL.searchParams.get('redirect'),
        that = this;

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
        //if (document.getElementById('countryFlag').classList.add(`flag-icon-${clientLanguage}`));

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
        if (clientCountryL !== undefined)
            languageText = languageText.replace('_language_', clientCountryL);
        else
            languageText = languageText.replace('_language_', 'a language that is not in my database');
        prevWebText = prevWebText.replace('_Website_', clientPrevWeb);
        // https://mimorep.github.io/HowMuchIKnowFromYou/?redirect=https://www.linkedin.com/in/miguel-moreno-pastor
        if (clientPrevWeb.includes('?redirect=')) {
            // The client had used our web to make an atack
            prevWebText = 'You come from my website and have tried the history poisoning attack';
        }else if (clientPrevWeb.includes('linkedin') && !clientPrevWeb.includes('redirect')) {
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

        that.getIPInfo();
        
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
            async: true, 
            url: `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${clientIP}`,
            dataType: 'json',
            success: data => {
                resolve(data);
            },
            error: error => {
                reject(error);
            }
        }

        $.ajax(ajaxJSON);
    });

    p.then(result => {
        // Set the internet provider
        var internetItem = document.getElementById('internetProvider'),
            locationItem = document.getElementById('locationInfo'),
            geoLocationItem = document.getElementById('geoLocation'),
            geoLocationTitleItem = document.getElementById('geoLocationTitle'),
            internetText = internetItem.innerText,
            locationText = locationItem.innerText;

        // Set the flag icon
        if (document.getElementById('countryFlag').classList.add(`flag-icon-${clientLanguage}`));
       
        var countryFlag = document.getElementById('countryFlag'),
            imgDiv = document.getElementById('imgDiv'),
            img = document.createElement('img'),
            language = document.getElementById('clienteLanguage');

        countryFlag.classList.remove(`flag-icon-${clientLanguage}`);
        
        // Replace the flag with the icon of the result             
        img.src = result.country_flag;
        img.style = 'width: 55%; padding-bottom: 1em;';

        imgDiv.appendChild(img);

        for (let c of countrys) {
            var key = undefined
            for (let k in c) {
                key = k;
            }
            if (c[key] == result.country_code2.toLowerCase()) {
                clientLanguage = c[key];
                clientCountryL = key;            
            }
        }

        // Now set the language
        language.innerText = language.innerText.replace('a language that is not in my database', clientCountryL);

        

        internetText = internetText.replace('_InternetProvider_', result.isp);
        locationText = locationText.replace('_Country_', result.state_prov);
        locationText = locationText.replace('_City_', result.city);
        locationText = locationText.replace('_ZIP_', result.zipcode);

        internetItem.innerText = internetText;
        locationItem.innerText = locationText;
        geoLocationItem.href = `https://maps.google.com/?q=${result.latitude},${result.longitude}`;
        geoLocationTitleItem.href = `https://maps.google.com/?q=${result.latitude},${result.longitude}`;
    });
}

/**
 * @description Method that asks user for geo permision and updates de data
 * @author Mmoreno
 */
function requestLicitGeoLocation () {
       if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(location => {
            // Actualizamos los valores de la geolocalización
            var geoLocationItem = document.getElementById('geoLocation'),
                geoLocationTitleItem = document.getElementById('geoLocationTitle');

            geoLocationItem.href = `https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;    
            geoLocationTitleItem.href = `https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
        });
       } else {
           alert(' Geolocation is not enabled :( ');
       }
}

/**
 * @description Method that injects an entry in the browser history
 * @author Mmoreno
 */
function makeHistoryInyection () {
    // Gen random number
    let random = Math.floor(Math.random() * 7777);

    // Cambiamos el favicon y el título
    var favicon = document.getElementById('favicon'),
        lastLocation = window.location;

    favicon.href = 'assets/img/americanBank.ico';
    document.title = 'A Bank of America not suspicious at all :)';

    // Redireccionamos a nuestra web para no levantar sospechas
    setTimeout(() => {
        history.pushState({id: random}, '', `?redirect=https://www.linkedin.com/in/miguel-moreno-pastor`);
        // Esto es a donde tenemos que redirigir por limitaciones con las páginas de git
        //https://mimorep.github.io/HowMuchIKnowFromYou/index.html
        window.location = `${lastLocation.protocol}//mimorep.github.io/HowMuchIKnowFromYou/`;  
    }, 100);
}

function makeCustomAttack (event) {
    event.preventDefault();
    var name = document.getElementById('websiteAttackName'),
        link = document.getElementById('websiteAttackLink'),
        iconLink = document.getElementById('websiteAttackIcon');

    let random = Math.floor(Math.random() * 7777);    

    // Redireccionamos a nuestra web para no levantar sospechas
    setTimeout(() => {
        // Cambiamos el favicon y el título
        var favicon = document.getElementById('favicon'),
            lastLocation = window.location;

        favicon.href = iconLink.value;
        document.title = name.value;

        history.pushState({id: random}, '', `?redirect=https://${link.value}`);
        window.location = `${lastLocation.protocol}//mimorep.github.io/HowMuchIKnowFromYou/`;  
    }, 100);
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

