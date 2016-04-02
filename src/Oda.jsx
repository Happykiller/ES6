/**
 * Created by Happykiller on 02/04/2016.
 */
//http://blog.soat.fr/2015/02/html-5-introduction-aux-web-components/
export class Oda {
    constructor () {
        this.version = "0.1.150402.01";
    }

    getVersion () {
        console.log(`Oda FrameWork current version : ${this.version}`);
    }

    sayHello (...whos) {
        let str = `Bonjour : `;
        whos.forEach(who => {
            str += ` ${who},`;
        });
        str = str.substr(0, str.length-1);
        console.log(str);
    }
    
    deployPoly () {
        let polyHelloWord = document.registerElement('hello-world', {
            prototype: Object.create(HTMLElement.prototype, {
                name: {                 // optionnel si on n'a pas besoin de valeur par défaut
                    value: "Mylan",        // valeur par défaut de l'attribut name
                    writable: true,
                    enumerable: true,
                    configurable: true
                },
                createdCallback: { // exécuté à chaque création d'un élément <hello-world>
                    value () {
                        var root = this.createShadowRoot();
                        var content = document.createElement("h1");
                        var name = this.getAttribute("name");

                        if(name != null && this.name != name){
                            this.name = name;
                        }

                        content.innerText = `Hello ${this.name}!`;
                        root.appendChild(content);
                    }
                }
            })
        });
    }
}