/**
 * Created by Happykiller on 02/04/2016.
 */
export class Oda {
    constructor () {
        //Private part
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
}

export let oda = new Oda()