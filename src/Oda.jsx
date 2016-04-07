/**
 * Created by Happykiller on 02/04/2016.
 */
//http://blog.soat.fr/2015/02/html-5-introduction-aux-web-components/
export class Oda {
    constructor () {
        this.version = "0.1.150402.01";
        this.polys = {};
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

    /**
     * name
     * param
     * css
     * html
     * init
     * callback
     * @param params
     */
    createPoly (params) {
        let that = this;

        let options = {};

        const defaultAttribut = {
            writable: true,
            enumerable: true,
            configurable: true
        };

        for(let key in params.param){
            let elt = params.param[key];
            let copy = Object.assign(elt, defaultAttribut);
            options[key] = copy;
        }

        options.createdCallback = {
            value () {
                let content = document.createElement("arch");
                let scope =  {};
                content.innerHTML = this.innerHTML;
                scope['innerHTML'] = this.innerHTML;
                this.innerHTML = "";
                let root = this.createShadowRoot();
                let target = params.html;

                target = that.replaceAll({
                    str: target,
                    find: `{{innerHTML}}`,
                    by: scope['innerHTML']
                });

                for(let key in params.param) {
                    let variable = this.getAttribute(key);

                    if (variable !== null) {
                        let json = variable.replace(/'/g, '"');
                        try{
                            json = JSON.parse(json);
                            variable = json;
                        }catch (ex){

                        }
                    }

                    if((variable == null) && (this[key] != variable)){
                        variable = this[key];
                    }

                    scope[key] = variable;

                    target = that.replaceAll({
                        str: target,
                        find: `{{${key}}}`,
                        by: variable
                    });
                }

                root.innerHTML = target;

                var datas = {
                    rootDOM: root,
                    dataScope: scope,
                    oldDOMContent: content,
                    poly: this
                }
                params.callback(datas);
            }
        };

        this.polys[params.name] = document.registerElement(params.name, {
            prototype: Object.create(HTMLElement.prototype, options)
        });
    }

    /**
     * @param p_params
     * @param p_params.str
     * @param p_params.find
     * @param p_params.by
     * @param p_params.ignoreCase by default false
     * @returns {String}
     */
    replaceAll (p_params) {
        try {
            if(p_params.find === ''){
                return p_params.str;
            }

            var opt = "g";
            if(p_params.hasOwnProperty('ignoreCase') && p_params.ignoreCase){
                opt = 'gi';
            }

            var strFind = p_params.find.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");

            var re = new RegExp(strFind, opt);

            var strReturn = p_params.str.replace(re, p_params.by);

            return strReturn;
        } catch (er) {
            return null;
        }
    }
}