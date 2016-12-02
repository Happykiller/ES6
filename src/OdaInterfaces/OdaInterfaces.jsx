import { oda } from '../Oda';

export class OdaInterfaces {

    constructor() {
        //Private part

        //Public part
    }

    /**
     * @param {array} whos
     */
    sayHello (...whos) {
        let str = `Bonjour : `;
        whos.forEach(who => {
            str += ` ${who},`;
        });
        str = str.substr(0, str.length-1);
        console.log(str);
    }

    getJSON(url, success, error) {
        'use strict';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr.responseText);
            }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    }
}

oda.Interfaces = new OdaInterfaces();