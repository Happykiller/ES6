import { oda } from './Oda';
import { OdaGames } from "./OdaGames/OdaGames";
import { OdaGamesFindMe } from "./OdaGames/OdaGamesFindMe";

oda.getVersion();
oda.sayHello("Fabrice", "Aurore", "Illidan");

oda.createPoly({
    name: "hello-world",
    param: {
        name: {
            value: "default"
        }
    },
    html: `<style>.colored {color: green;}</style><h1>Hello <span class="colored">{{name}}</span>!</h1>`,
    callback: (datas) => {
        datas.rootDOM.querySelector(".colored").onclick = function(e) {
            console.log(datas.dataScope.name);
        }
    }
});

oda.createPoly({
    name: "oda-table",
    param: {
        id: {
            value: "default"
        },
        list: {
            value: []
        }
    },
    html: `<style>table, th, td {border: 1px solid black;}</style><table id="myTable"><thead><tr><th>col1</th></tr></thead><tbody></tbody></table>`,
    callback: (datas) => {
        let table = datas.rootDOM.getElementById("myTable").getElementsByTagName('tbody')[0];

        for(let index in datas.dataScope.list){
            let elt = datas.dataScope.list[index];
            let row = table.insertRow(index);
            let cell = row.insertCell(0);
            cell.innerHTML = elt;
        }
    }
});

oda.createPoly({
    name: "avatar-list",
    html: `<style>table, th, td {border: 1px solid black;}</style><table id="myTable"><thead><tr><th>avatar</th></tr></thead><tbody></tbody></table>`,
    callback: (datas) => {
        let table = datas.rootDOM.getElementById("myTable").getElementsByTagName('tbody')[0];

        for(let index in datas.oldDOMContent.getElementsByTagName('my-photo')){
            let elt = datas.oldDOMContent.getElementsByTagName('my-photo')[index];
            if(typeof elt === 'object'){
                let row = table.insertRow(index);
                let cell = row.insertCell(0);
                cell.innerHTML = elt.outerHTML;
            }
        }
    }
});

oda.createPoly({
    name: "my-photo",
    param: {
        class: {
            value: "class"
        },
        src: {
            value: "src"
        }
    },
    html: `<span style="font-weight: bold;">{{innerHTML}}</span>`,
    callback: (datas) => {

    }
});

document.querySelector('#test').innerHTML ='<hello-world name="aurore"></hello-world>';

document.querySelector('#test2').innerHTML ='<hello-world name="enrico"></hello-world>';