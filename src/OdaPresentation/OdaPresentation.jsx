import { oda } from '../Oda'

export class OdaPresentation {

    constructor() {
        //Private part
        this.polys = {}

        //Public part
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

                target = oda.Tooling.replaceAll({
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

                    target = oda.Tooling.replaceAll({
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
}

oda.Presentation = new OdaPresentation()