const $ = require('cheerio');
const cheerio = require('cheerio');

module.exports = class Utils {

    //htmlTable is a object of cheerio
    static tableToJson(htmlTable){
        let headers = undefined;

        //extract headers values
        let headersCols = htmlTable.children('thead').children('tr').children('th');
        headers = Array.from(headersCols).map((col) => $(col).text());

        //iterate between rows
        let bodyRows = htmlTable.children('tbody').children('tr');

        let jsonList = Array.from(bodyRows).map((row, index) => {
            let rowJson = {};

            Array.from($(row).children('td')).map((td, index) => {
                return rowJson[headers[index]] = $(td).text();
            });

            return rowJson;
        });

        return jsonList;
    }
}