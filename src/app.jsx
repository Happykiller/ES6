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
    html: `<style>table, th, td {border: 1px solid black;}</style><table id="myTable"><thead><tr><th>col1</th></tr></thead><tbody></tbody></table>`,
    callback: (root, scope) => {
        let table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
    }
});

document.querySelector('#test').innerHTML ='<hello-world name="aurore"></hello-world>';