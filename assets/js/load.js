/**
 ****************************************************************
 *      Js with methods that executes when onload is finish     *
 *                      by Miguel Moreno Pastor                 *
 ****************************************************************
 */

var userAgent = undefined,
    clientIP = undefined,
    clientIPInfo = undefined,
    clientLanguage = undefined,
    clientCountry = undefined,
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


/**
 * @description Method that loads all the info when the page is loaded
 * @author Mmoreno
 */
function init () {    
    for (let c of countrys) {
        var key = undefined
        for (let k in c) {
            key = k;
        }
        if (c[key] == navigator.languages[1]) {
            clientLanguage = c[key];
            clientCountry = key;
        }
    }

    clientSO = navigator.userAgentData.platform;
    clientMobile = navigator.userAgentData.mobile;
    clientPrevWeb = document.referrer;
    clientCookiesActive = navigator.cookieEnabled;

    console.log(clientSO);
    console.log(clientLanguage);
    console.log(clientCountry);
    console.log(clientMobile);
    console.log(clientPrevWeb);

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

    this.makeHistoryInyection();

    p.then(result => {clientIPInfo = result; console.log(clientIPInfo)});
}

function makeHistoryInyection () {
    // Gen random number
    let random = Math.floor(Math.random() * 7777);

    document.title = 'XDD';
    history.pushState({id: random}, '', `?languaje=es`);

    
    document.title = 'How much i know from you'
    
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

