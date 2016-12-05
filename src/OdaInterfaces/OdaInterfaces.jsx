import { oda } from '../Oda'

export class OdaInterfaces {

    constructor() {
        //Private part

        //Public part
    }

    ajax(params){
        'use strict'
        let response = {
            code: null,
            data: null
        }

        if(params.method === undefined){
            params.method = 'GET'
        }
        if(params.synch === undefined){
            params.synch = false
        }
        if(params.dataType === undefined){
            params.dataType = 'JSON'
        }
        if(params.synch){
            //SYNCH
            let req = new XMLHttpRequest()
            req.open(params.method, params.url, false)
            req.send(null)
            response.code = req.status
            if(req.status == 200){
                if(params.dataType === 'JSON'){
                    response.data = JSON.parse(req.responseText);
                }else{
                    response.data = req.responseText
                }
            }

            return response;
        }else{
            //UNSYNCH
            return new Promise((resolve, reject) => {
                var req = new XMLHttpRequest()
                req.open(params.method, params.url, true)
                req.send(null)
                req.onreadystatechange = (aEvt) => {
                    if (req.readyState === 4) {
                        response.code = req.status
                        if(params.dataType === 'JSON'){
                            response.data = JSON.parse(req.responseText);
                        }else{
                            response.data = req.responseText
                        }
                        if (req.status === 200) {
                            resolve(response)
                        } else {
                            reject(response)
                        }
                    }
                }
            })
        }
    }
}

oda.Interfaces = new OdaInterfaces()