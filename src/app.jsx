import {Oda} from './Oda';
var oda = new Oda();
oda.getVersion();
oda.sayHello("Fabrice", "Aurore", "Illidan");
//oda.deployPoly();

oda.createPoly({
    name: "hello",
    param: {
        attr: {
            value: "default"
        }
    },
    css: `#name {
        color: green;
    }`,
    html: `
        <h1>Hello <span id="name"></span>!</h1>
    `,
    init: (datas) => {
        let doc = document.currentScript.ownerDocument;
        let inte = 0;
    },
    callback: (datas) => {
        inte += 1;
        console.log(inte);
    }
});