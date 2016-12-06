import { oda } from '../Oda'

export class OdaTooling {

    constructor() {
        //Private part

        //Public part
    }

    /**
     * @param {string|integer} num
         * @param {integer} length
        * @returns {string}
        */
    pad(num, length){
        if(typeof num !== "integer"){
            num = parseInt(num)
        }
        var response = num + ""
        while (response.length < length){
        response = "0" + response
        }
        return response
    }

    /**
     * @param {Date} myDate
     * @param {string} format
     * @returns {string}
     */
    dateFormat(myDate, format){
        var yearFull = myDate.getFullYear()
        var year = myDate.getYear()
        var mounth = this.pad(myDate.getMonth() + 1, 2)
        var day = this.pad(myDate.getDate(), 2)
        var hour = this.pad(myDate.getHours(), 2)
        var minute = this.pad(myDate.getMinutes(), 2)
        var second = this.pad(myDate.getSeconds(), 2)

        var response = format.replace("yyyy", yearFull).replace("yy",year).replace("mm",mounth).replace("dd",day).replace("hh",hour).replace("mi",minute).replace("ss",second)

        return response
    }

    /**
     * @param {Object} params.default
     * @param {Object} params.source
     * @param {Object} params
     * @returns {Object}
     */
    mergeRecursive(params) {
        var objReturn = this.clone(params.default)

        //if array
        if(Array.isArray(objReturn)){
            //for each elt of target we apply the partn array
            var defaultEltArray = objReturn[0]
            objReturn = []
            for(var index in params.source){
                objReturn.push(this.mergeRecursive({default: defaultEltArray, source: params.source[index]}))
            }
            //if object
        }else if((objReturn !== null) && (objReturn !== undefined) && (objReturn.constructor === Object)){
            for(var key in objReturn){
                if(params.source[key] !== undefined){
                    objReturn[key] =  this.mergeRecursive({default: objReturn[key], source: params.source[key]})
                }
            }

            //check if sources attrib in more
            for (var key in params.source) {
                if(!objReturn.hasOwnProperty(key)){
                    objReturn[key] = params.source[key]
                }
            }
        }else if(params.source !== null){
            objReturn = params.source
        }

        return objReturn
    }

    /**
     * @param {Object}
     * @returns {Object}
     */
    clone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj
        }

        var temp = obj.constructor() // give temp the original obj's constructor
        for (var key in obj) {
            temp[key] = this.clone(obj[key])
        }

        return temp
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

oda.Tooling = new OdaTooling()