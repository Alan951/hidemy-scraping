let $ = require('cheerio');
let request = require('cloudscraper');
const Utils = require('./utils');

let filtro = {
    country: undefined, //array de strings con dos caracteres de longitud
    proxySpeed: undefined, //number
    port: undefined, //array de numeros [0 - 65535]
    proxyType: undefined, //array de letras [h (http), s (https), 4 (sock4), 5 (sock5)]
    anonymity: undefined // array de numeros [1, 2, 3, 4]
}

let url = "https://hidemyna.me/en/proxy-list/";

//TODO: añadir los parametros del filtro a la petición
request.get(url, undefined, (err, response, body) => {
    //Obtener
    let page = $.load(body);
    let table = page('table');
    
    let proxyList = Utils.tableToJson(table);
});