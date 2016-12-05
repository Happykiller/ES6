/**
 * Created by Happykiller on 02/04/2016.
 */
export class Oda {
    constructor () {
        //Private part
        this.polys = {}
        this.version = "0.1.161125.01"

        //Public part
        window.Oda = {}
        window.Oda.version = this.version
    }

    /**
     * 
     */
    getVersion () {
        console.log(`Oda FrameWork current version : ${this.version}`)
    }

    /**
     * @param {array} whos
     */
    sayHello (...whos) {
        let str = `Bonjour : `
        whos.forEach(who => {
            str += ` ${who},`
        })
        str = str.substr(0, str.length-1)
        console.log(str)
    }

    /**
     * @param params
     * @param {string} params.name
     * @param {string} params.param
     * @param {string} params.css
     * @param {string} params.html
     * @param {string} params.init
     * @param {function} params.callback
     */
    createPoly (params) {
        let that = this

        let options = {}

        const defaultAttribut = {
            writable: true,
            enumerable: true,
            configurable: true
        }

        for(let key in params.param){
            let elt = params.param[key]
            let copy = Object.assign(elt, defaultAttribut)
            options[key] = copy
        }

        options.createdCallback = {
            value () {
                let content = document.createElement("arch")
                let scope =  {}
                content.innerHTML = this.innerHTML
                scope['innerHTML'] = this.innerHTML
                this.innerHTML = ""
                let root = this.createShadowRoot()
                let target = params.html

                target = that.replaceAll({
                    str: target,
                    find: `{{innerHTML}}`,
                    by: scope['innerHTML']
                })

                for(let key in params.param) {
                    let variable = this.getAttribute(key)

                    if (variable !== null) {
                        let json = variable.replace(/'/g, '"')
                        try{
                            json = JSON.parse(json)
                            variable = json
                        }catch (ex){

                        }
                    }

                    if((variable == null) && (this[key] != variable)){
                        variable = this[key]
                    }

                    scope[key] = variable

                    target = that.replaceAll({
                        str: target,
                        find: `{{${key}}}`,
                        by: variable
                    })
                }

                root.innerHTML = target

                var datas = {
                    rootDOM: root,
                    dataScope: scope,
                    oldDOMContent: content,
                    poly: this
                }
                params.callback(datas)
            }
        }

        that.polys[params.name] = document.registerElement(params.name, {
            prototype: Object.create(HTMLElement.prototype, options)
        })
    }

    /**
     * @param params
     * @param {string} params.str
     * @param {string} params.find
     * @param {string} params.by
     * @param {boolean} params.ignoreCase by default false
     * @returns {String}
     */
    replaceAll (params) {
        try {
            if(params.find === ''){
                return params.str
            }

            var opt = "g"
            if(params.hasOwnProperty('ignoreCase') && params.ignoreCase){
                opt = 'gi'
            }

            var strFind = params.find.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1")

            var re = new RegExp(strFind, opt)

            var strReturn = params.str.replace(re, params.by)

            return strReturn
        } catch (er) {
            return null
        }
    }
}

export let oda = new Oda()