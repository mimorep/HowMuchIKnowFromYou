/**
 ****************************************************************
 *      Js with methods that executes when onload is finish     *
 *                      by Miguel Moreno Pastor                 *
 ****************************************************************
 */

var userAgent = undefined,
    appVersion = undefined,
    clipboard = undefined;


/**
 * @description Method that loads all the info when the page is loaded
 * @author Mmoreno
 */
async function init () {
    console.log(navigator);
    
    // Pide permiso a los usuarios
    // try {
    //     clipboard = await navigator.clipboard.readText();
    // }catch (error) {
    //     console.error('Error leyendo el clipboard');
    //     console.error(error);
    // }

    console.log(clipboard);
}

window.onload = init();
