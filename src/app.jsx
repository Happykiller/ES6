import {Oda} from './Oda';
var oda = new Oda();
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
    callback: (root, scope) => {
        root.querySelector(".colored").onclick = function(e) {
            console.log(scope.name);
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
    callback: (root, scope) => {
        let table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell2 = row.insertCell(0);

        // Add some text to the new cells:
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
    }
});

document.querySelector('#test').innerHTML ='<hello-world name="aurore"></hello-world>';


oda.createPoly({
    name: "avatar-list",
    html: `<style>table, th, td {border: 1px solid black;}</style><table id="myTable"><thead><tr><th>avatar</th></tr></thead><tbody></tbody></table>`,
    callback: (root, scope, content, that) => {
        let table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

        for(let index in content.getElementsByTagName('my-photo')){
            let elt = content.getElementsByTagName('my-photo')[index];
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
    callback: (root, scope, content, that) => {

    }
});