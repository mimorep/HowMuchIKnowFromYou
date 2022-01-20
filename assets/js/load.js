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

        `,
    maybeASecret = `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`;
                                                                
var userAgent = undefined,
    clientIP = undefined,
    clientIPInfo = undefined,
    clientLanguage = undefined,
    clientCountryL = undefined,
    clientSO = undefined,
    clientSOImage = undefined,
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

var windowsOSs = [
    {'Windows 3.11' : 'Win16'},
    {'Windows 95' : '(Windows 95)|(Win95)|(Windows_95)'},
    {'Windows 98' : '(Windows 98)|(Win98)'},
    {'Windows 2000' : '(Windows NT 5.0)|(Windows 2000)'},
    {'Windows XP' : '(Windows NT 5.1)|(Windows XP)'},
    {'Windows Server 2003' : '(Windows NT 5.2)'},
    {'Windows Vista' : '(Windows NT 6.0)'},
    {'Windows 7' : '(Windows NT 6.1)'},
    {'Windows 8' : '(Windows NT 6.2)|(WOW64)'},
    {'Windows 10 or 11' : '(Windows 10.0)|(Windows NT 10.0)'},
    {'Windows ME' : 'Windows ME'}
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
        redirect = locationURL.searchParams.get('redirect'),
        that = this;

    if (redirect !== null)
        window.location = redirect;

    for (let c of countrys) {
        var key = undefined
        for (let k in c) {
            key = k;
        }
        if (navigator.language.includes(c[key])) {
            clientLanguage = c[key];
            clientCountryL = key;            
        }
    }

    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        clientSO = 'Mobile'; // Android device
        clientSOImage = 'Mobile';
        clientMobile = true;
    }else if (/iPhone|iPad|iPod|Mac OS/i.test(navigator.userAgent)) {
        clientSO = 'Apple';
        clientSOImage = 'Apple';
        if (/iPhone/i.test(navigator.userAgent))        
            clientMobile = true; // Check for just mobile
    } else if (/Win64|Win32/i.test(navigator.userAgent)) {
        clientSO = 'Windows'
        // Get the version of Windows
        for (let w of windowsOSs) {
            for (let key in w) {
                var regex = new RegExp(`${w[key]}`, 'i');

                if (regex.test(navigator.userAgent))
                    clientSO = key;               
            }
        }
        clientSOImage = 'Windows';
    }else {
        clientSO = 'Other';
        clientSOImage = 'Other';
    }

    clientPrevWeb = document.referrer;
    clientCookiesActive = navigator.cookieEnabled;

    // Timeout for rendering
    setTimeout( () => {

        // Change de country flag
        if (document.getElementById('countryFlag').classList.remove('flag-icon-gr'));

        // Change de OS logo
        if (document.getElementById('OSImage').classList.remove('bi-laptop'));
        
        if (document.getElementById('OSImage').classList.add(`${osImages[clientSOImage]}`));

        var languageItem = document.getElementById('clienteLanguage'),
            languageText = languageItem.innerText,
            osItem = document.getElementById('OSDesription'),
            osText = osItem.innerText,
            prevWeb = document.getElementById('prevWeb'),
            prevWebText = prevWeb.innerText;

        osText = osText.replace('_OS_', clientSO);
        if (clientCountryL !== undefined)
            languageText = languageText.replace('_language_', clientCountryL + ', or at least is your preferred language');
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
       
        var imgDiv = document.getElementById('imgDiv'),
            img = document.createElement('img'),
            language = document.getElementById('clienteLanguage');
        
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

const a = `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`;

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

            console.log(location);

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

/**
 * @description Mothod to generate a custom attack 
 * @param {*} event Event of the click
 * @author Mmoreno
 */
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
    }, 150);
}

/**
 * @description Method that gets the client ip
 * @param {*} json JSON with the data
 * @author Mmoreno
 */
function getIP (json) {
    clientIP = json.ip;
}

/**
 * @description Method that decode a secret :)
 * @param {*} key Key of the cypher
 * @author Mmoreno
 */
function cypher (key=undefined, object=maybeASecret) {

    if (key === undefined) {
        console.info(' Something is missing, a hacker would check the source code, right? ');
    } else {
        // Load encryption library
        try {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js";
    
            document.head.appendChild(script);
    
            // When script is loaded
            script.addEventListener('load', () => {
                try {
                    console.log(CryptoJS.AES.decrypt(object, key).toString(CryptoJS.enc.Utf8));
                } catch {
                    console.info(` You don't know the key? :) `);                    
                }
            }); 
        } catch {
            console.info(` You don't know the key? :) `);
        }
        
    }   
}

window.onload = init();

