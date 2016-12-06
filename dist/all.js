(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Happykiller on 02/04/2016.
 */
var Oda = exports.Oda = function () {
    function Oda() {
        _classCallCheck(this, Oda);

        //Private part
        this.version = "0.1.161125.01";

        //Public part
        window.Oda = {};
        window.Oda.version = this.version;
    }

    /**
     * 
     */


    _createClass(Oda, [{
        key: "getVersion",
        value: function getVersion() {
            console.log("Oda FrameWork current version : " + this.version);
        }

        /**
         * @param {array} whos
         */

    }, {
        key: "sayHello",
        value: function sayHello() {
            var str = "Bonjour : ";

            for (var _len = arguments.length, whos = Array(_len), _key = 0; _key < _len; _key++) {
                whos[_key] = arguments[_key];
            }

            whos.forEach(function (who) {
                str += " " + who + ",";
            });
            str = str.substr(0, str.length - 1);
            console.log(str);
        }
    }]);

    return Oda;
}();

var oda = exports.oda = new Oda();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OdaGames = exports.OdaGames = function OdaGames() {
    _classCallCheck(this, OdaGames);

    //Private part

    //Public part
    window.Oda.Games = {};
};

var odaGames = new OdaGames();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OdaGamesFindMe = exports.OdaGamesFindMe = function () {
    function OdaGamesFindMe() {
        _classCallCheck(this, OdaGamesFindMe);

        //Private part
        this.goal = this.setGoal();
        this.nbTry = 0;
        this.nbTryMax = 3;

        //Public part
        window.Oda.Games.FindMe = {};
        window.Oda.Games.FindMe.propose = this.propose;
    }

    _createClass(OdaGamesFindMe, [{
        key: "propose",
        value: function propose(choice) {
            var str = "";
            try {
                var choiceInt = parseInt(choice);
                if (Number.isNaN(choiceInt)) {
                    str = "'" + choice + "' is not an integer.";
                } else {
                    odaGamesFindMe.nbTry++;
                    if (odaGamesFindMe.nbTry < odaGamesFindMe.nbTryMax) {
                        if (choice === odaGamesFindMe.goal) {
                            str = "You win !! (in " + (odaGamesFindMe.nbTry + 1) + " try)";
                            odaGamesFindMe.nbTry = 0;
                            odaGamesFindMe.setGoal();
                        } else if (choice > odaGamesFindMe.goal) {
                            str = "To big ,) (" + (odaGamesFindMe.nbTryMax - odaGamesFindMe.nbTry) + " try left)";
                        } else {
                            str = "To small :o (" + (odaGamesFindMe.nbTryMax - odaGamesFindMe.nbTry) + " try left)";
                        }
                    } else {
                        str = "Fail no more tries !! (The goal was " + odaGamesFindMe.goal + ")";
                        odaGamesFindMe.nbTry = 0;
                        odaGamesFindMe.setGoal();
                    }
                }
            } catch (ex) {
                str = ex;
            }
            return str;
        }
    }, {
        key: "setGoal",
        value: function setGoal() {
            var goal = Math.round(Math.random() * 10);
            return goal;
        }
    }]);

    return OdaGamesFindMe;
}();

var odaGamesFindMe = new OdaGamesFindMe();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OdaInterfaces = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Oda = require('../Oda');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OdaInterfaces = exports.OdaInterfaces = function () {
    function OdaInterfaces() {
        //Private part

        //Public part

        _classCallCheck(this, OdaInterfaces);
    }

    _createClass(OdaInterfaces, [{
        key: 'ajax',
        value: function ajax(params) {
            'use strict';

            if (params.method === undefined) {
                params.method = 'GET';
            }
            if (params.synch === undefined) {
                params.synch = false;
            }
            if (params.dataType === undefined) {
                params.dataType = 'JSON';
            }
            if (params.context === undefined) {
                params.context = {};
            }

            var response = {
                code: null,
                data: null,
                context: _Oda.oda.Tooling.clone(params.context)
            };

            if (params.synch) {
                //SYNCH
                var req = new XMLHttpRequest();
                req.open(params.method, params.url, false);
                req.send(null);
                response.code = req.status;
                if (req.status == 200) {
                    if (params.dataType === 'JSON') {
                        response.data = JSON.parse(req.responseText);
                    } else {
                        response.data = req.responseText;
                    }
                }

                return response;
            } else {
                //UNSYNCH
                return new Promise(function (resolve, reject) {
                    var req = new XMLHttpRequest();
                    req.open(params.method, params.url, true);
                    req.send(null);
                    req.onreadystatechange = function (aEvt) {
                        if (req.readyState === 4) {
                            response.code = req.status;
                            if (params.dataType === 'JSON') {
                                response.data = JSON.parse(req.responseText);
                            } else {
                                response.data = req.responseText;
                            }
                            if (req.status === 200) {
                                resolve(response);
                            } else {
                                reject(response);
                            }
                        }
                    };
                });
            }
        }
    }]);

    return OdaInterfaces;
}();

_Oda.oda.Interfaces = new OdaInterfaces();

},{"../Oda":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OdaPresentation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Oda = require('../Oda');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OdaPresentation = exports.OdaPresentation = function () {
    function OdaPresentation() {
        _classCallCheck(this, OdaPresentation);

        //Private part
        this.polys = {};

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


    _createClass(OdaPresentation, [{
        key: 'createPoly',
        value: function createPoly(params) {
            var that = this;

            var options = {};

            var defaultAttribut = {
                writable: true,
                enumerable: true,
                configurable: true
            };

            for (var key in params.param) {
                var elt = params.param[key];
                var copy = Object.assign(elt, defaultAttribut);
                options[key] = copy;
            }

            options.createdCallback = {
                value: function value() {
                    var content = document.createElement("arch");
                    var scope = {};
                    content.innerHTML = this.innerHTML;
                    scope['innerHTML'] = this.innerHTML;
                    this.innerHTML = "";
                    var root = this.createShadowRoot();
                    var target = params.html;

                    target = _Oda.oda.Tooling.replaceAll({
                        str: target,
                        find: '{{innerHTML}}',
                        by: scope['innerHTML']
                    });

                    for (var _key in params.param) {
                        var variable = this.getAttribute(_key);

                        if (variable !== null) {
                            var json = variable.replace(/'/g, '"');
                            try {
                                json = JSON.parse(json);
                                variable = json;
                            } catch (ex) {}
                        }

                        if (variable == null && this[_key] != variable) {
                            variable = this[_key];
                        }

                        scope[_key] = variable;

                        target = _Oda.oda.Tooling.replaceAll({
                            str: target,
                            find: '{{' + _key + '}}',
                            by: variable
                        });
                    }

                    root.innerHTML = target;

                    var datas = {
                        rootDOM: root,
                        dataScope: scope,
                        oldDOMContent: content,
                        poly: this
                    };
                    params.callback(datas);
                }
            };

            that.polys[params.name] = document.registerElement(params.name, {
                prototype: Object.create(HTMLElement.prototype, options)
            });
        }
    }]);

    return OdaPresentation;
}();

_Oda.oda.Presentation = new OdaPresentation();

},{"../Oda":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OdaTooling = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Oda = require("../Oda");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OdaTooling = exports.OdaTooling = function () {
    function OdaTooling() {
        _classCallCheck(this, OdaTooling);
    }
    //Private part

    //Public part


    /**
     * @param {string|integer} num
         * @param {integer} length
        * @returns {string}
        */


    _createClass(OdaTooling, [{
        key: "pad",
        value: function pad(num, length) {
            if (typeof num !== "integer") {
                num = parseInt(num);
            }
            var response = num + "";
            while (response.length < length) {
                response = "0" + response;
            }
            return response;
        }

        /**
         * @param {Date} myDate
         * @param {string} format
         * @returns {string}
         */

    }, {
        key: "dateFormat",
        value: function dateFormat(myDate, format) {
            var yearFull = myDate.getFullYear();
            var year = myDate.getYear();
            var mounth = this.pad(myDate.getMonth() + 1, 2);
            var day = this.pad(myDate.getDate(), 2);
            var hour = this.pad(myDate.getHours(), 2);
            var minute = this.pad(myDate.getMinutes(), 2);
            var second = this.pad(myDate.getSeconds(), 2);

            var response = format.replace("yyyy", yearFull).replace("yy", year).replace("mm", mounth).replace("dd", day).replace("hh", hour).replace("mi", minute).replace("ss", second);

            return response;
        }

        /**
         * @param {Object} params.default
         * @param {Object} params.source
         * @param {Object} params
         * @returns {Object}
         */

    }, {
        key: "mergeRecursive",
        value: function mergeRecursive(params) {
            var objReturn = this.clone(params.default);

            //if array
            if (Array.isArray(objReturn)) {
                //for each elt of target we apply the partn array
                var defaultEltArray = objReturn[0];
                objReturn = [];
                for (var index in params.source) {
                    objReturn.push(this.mergeRecursive({ default: defaultEltArray, source: params.source[index] }));
                }
                //if object
            } else if (objReturn !== null && objReturn !== undefined && objReturn.constructor === Object) {
                for (var key in objReturn) {
                    if (params.source[key] !== undefined) {
                        objReturn[key] = this.mergeRecursive({ default: objReturn[key], source: params.source[key] });
                    }
                }

                //check if sources attrib in more
                for (var key in params.source) {
                    if (!objReturn.hasOwnProperty(key)) {
                        objReturn[key] = params.source[key];
                    }
                }
            } else if (params.source !== null) {
                objReturn = params.source;
            }

            return objReturn;
        }

        /**
         * @param {Object}
         * @returns {Object}
         */

    }, {
        key: "clone",
        value: function clone(obj) {
            if (obj === null || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object') {
                return obj;
            }

            var temp = obj.constructor(); // give temp the original obj's constructor
            for (var key in obj) {
                temp[key] = this.clone(obj[key]);
            }

            return temp;
        }

        /**
         * @param params
         * @param {string} params.str
         * @param {string} params.find
         * @param {string} params.by
         * @param {boolean} params.ignoreCase by default false
         * @returns {String}
         */

    }, {
        key: "replaceAll",
        value: function replaceAll(params) {
            try {
                if (params.find === '') {
                    return params.str;
                }

                var opt = "g";
                if (params.hasOwnProperty('ignoreCase') && params.ignoreCase) {
                    opt = 'gi';
                }

                var strFind = params.find.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");

                var re = new RegExp(strFind, opt);

                var strReturn = params.str.replace(re, params.by);

                return strReturn;
            } catch (er) {
                return null;
            }
        }
    }]);

    return OdaTooling;
}();

_Oda.oda.Tooling = new OdaTooling();

},{"../Oda":1}],7:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Oda = require("./Oda");

var _OdaTooling = require("./OdaTooling/OdaTooling");

var _OdaInterfaces = require("./OdaInterfaces/OdaInterfaces");

var _OdaPresentation = require("./OdaPresentation/OdaPresentation");

var _OdaGames = require("./OdaGames/OdaGames");

var _OdaGamesFindMe = require("./OdaGames/OdaGamesFindMe");

_Oda.oda.getVersion();
_Oda.oda.sayHello("Fabrice", "Aurore", "Illidan");

_Oda.oda.Presentation.createPoly({
    name: "hello-world",
    param: {
        name: {
            value: "default"
        }
    },
    html: "<style>.colored {color: green}</style><h1>Hello <span class=\"colored\">{{name}}</span>!</h1>",
    callback: function callback(datas) {
        datas.rootDOM.querySelector(".colored").onclick = function (e) {
            console.log(datas.dataScope.name);
        };
    }
});

_Oda.oda.Presentation.createPoly({
    name: "oda-table",
    param: {
        id: {
            value: "default"
        },
        list: {
            value: []
        }
    },
    html: "<style>table, th, td {border: 1px solid black}</style><table id=\"myTable\"><thead><tr><th>col1</th></tr></thead><tbody></tbody></table>",
    callback: function callback(datas) {
        var table = datas.rootDOM.getElementById("myTable").getElementsByTagName('tbody')[0];

        for (var index in datas.dataScope.list) {
            var elt = datas.dataScope.list[index];
            var row = table.insertRow(index);
            var cell = row.insertCell(0);
            cell.innerHTML = elt;
        }
    }
});

_Oda.oda.Presentation.createPoly({
    name: "avatar-list",
    html: "<style>table, th, td {border: 1px solid black}</style><table id=\"myTable\"><thead><tr><th>avatar</th></tr></thead><tbody></tbody></table>",
    callback: function callback(datas) {
        var table = datas.rootDOM.getElementById("myTable").getElementsByTagName('tbody')[0];

        for (var index in datas.oldDOMContent.getElementsByTagName('my-photo')) {
            var elt = datas.oldDOMContent.getElementsByTagName('my-photo')[index];
            if ((typeof elt === "undefined" ? "undefined" : _typeof(elt)) === 'object') {
                var row = table.insertRow(index);
                var cell = row.insertCell(0);
                cell.innerHTML = elt.outerHTML;
            }
        }
    }
});

_Oda.oda.Presentation.createPoly({
    name: "my-photo",
    param: {
        class: {
            value: "class"
        },
        src: {
            value: "src"
        }
    },
    html: "<span style=\"font-weight: bold\">{{innerHTML}}</span>",
    callback: function callback(datas) {}
});

document.querySelector('#test').innerHTML = '<hello-world name="aurore"></hello-world>';

document.querySelector('#test2').innerHTML = '<hello-world name="enrico"></hello-world>';

var truc = {
    test: 'coucou'
};

_Oda.oda.Interfaces.ajax({
    url: 'users.json',
    context: truc
}).then(function (response) {
    console.log(response);
});

truc.test = 'hllo';

console.log(truc);

},{"./Oda":1,"./OdaGames/OdaGames":2,"./OdaGames/OdaGamesFindMe":3,"./OdaInterfaces/OdaInterfaces":4,"./OdaPresentation/OdaPresentation":5,"./OdaTooling/OdaTooling":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lcy5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lc0ZpbmRNZS5qc3giLCJzcmNcXE9kYUludGVyZmFjZXNcXE9kYUludGVyZmFjZXMuanN4Iiwic3JjXFxPZGFQcmVzZW50YXRpb25cXE9kYVByZXNlbnRhdGlvbi5qc3giLCJzcmNcXE9kYVRvb2xpbmdcXE9kYVRvb2xpbmcuanN4Iiwic3JjXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7SUFHYSxHLFdBQUEsRztBQUNULG1CQUFlO0FBQUE7O0FBQ1g7QUFDQSxhQUFLLE9BQUwsR0FBZSxlQUFmOztBQUVBO0FBQ0EsZUFBTyxHQUFQLEdBQWEsRUFBYjtBQUNBLGVBQU8sR0FBUCxDQUFXLE9BQVgsR0FBcUIsS0FBSyxPQUExQjtBQUNIOztBQUVEOzs7Ozs7O3FDQUdjO0FBQ1Ysb0JBQVEsR0FBUixzQ0FBK0MsS0FBSyxPQUFwRDtBQUNIOztBQUVEOzs7Ozs7bUNBR21CO0FBQ2YsZ0JBQUksa0JBQUo7O0FBRGUsOENBQU4sSUFBTTtBQUFOLG9CQUFNO0FBQUE7O0FBRWYsaUJBQUssT0FBTCxDQUFhLGVBQU87QUFDaEIsNkJBQVcsR0FBWDtBQUNILGFBRkQ7QUFHQSxrQkFBTSxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsSUFBSSxNQUFKLEdBQVcsQ0FBekIsQ0FBTjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0g7Ozs7OztBQUdFLElBQUksb0JBQU0sSUFBSSxHQUFKLEVBQVY7Ozs7Ozs7Ozs7O0lDakNNLFEsV0FBQSxRLEdBRVQsb0JBQWM7QUFBQTs7QUFDVjs7QUFFQTtBQUNBLFdBQU8sR0FBUCxDQUFXLEtBQVgsR0FBbUIsRUFBbkI7QUFDSCxDOztBQUdMLElBQUksV0FBVyxJQUFJLFFBQUosRUFBZjs7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bEIsRUFBMkI7QUFDdkIsb0JBQUksTUFBTSxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBVjtBQUNBLG9CQUFJLE9BQU8sSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFYO0FBQ0EscUJBQUssU0FBTCxHQUFpQixJQUFJLFNBQXJCO0FBQ0g7QUFDSjtBQUNKO0FBZHVCLENBQTVCOztBQWlCQSxTQUFJLFlBQUosQ0FBaUIsVUFBakIsQ0FBNEI7QUFDeEIsVUFBTSxVQURrQjtBQUV4QixXQUFPO0FBQ0gsZUFBTztBQUNILG1CQUFPO0FBREosU0FESjtBQUlILGFBQUs7QUFDRCxtQkFBTztBQUROO0FBSkYsS0FGaUI7QUFVeEIsa0VBVndCO0FBV3hCLGNBQVUsa0JBQUMsS0FBRCxFQUFXLENBRXBCO0FBYnVCLENBQTVCOztBQWdCQSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsU0FBaEMsR0FBMkMsMkNBQTNDOztBQUVBLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE0QywyQ0FBNUM7O0FBRUEsSUFBSSxPQUFPO0FBQ1AsVUFBTTtBQURDLENBQVg7O0FBSUEsU0FBSSxVQUFKLENBQWUsSUFBZixDQUFvQjtBQUNoQixTQUFLLFlBRFc7QUFFaEIsYUFBUztBQUZPLENBQXBCLEVBR0csSUFISCxDQUdRLG9CQUFZO0FBQ2hCLFlBQVEsR0FBUixDQUFZLFFBQVo7QUFDSCxDQUxEOztBQU9BLEtBQUssSUFBTCxHQUFZLE1BQVo7O0FBRUEsUUFBUSxHQUFSLENBQVksSUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBIYXBweWtpbGxlciBvbiAwMi8wNC8yMDE2LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9kYSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgLy9Qcml2YXRlIHBhcnRcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNjExMjUuMDFcIlxyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYSA9IHt9XHJcbiAgICAgICAgd2luZG93Lk9kYS52ZXJzaW9uID0gdGhpcy52ZXJzaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHdob3NcclxuICAgICAqL1xyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgXHJcbiAgICAgICAgd2hvcy5mb3JFYWNoKHdobyA9PiB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgICR7d2hvfSxgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgb2RhID0gbmV3IE9kYSgpIiwiZXhwb3J0IGNsYXNzIE9kYUdhbWVzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYS5HYW1lcyA9IHt9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBvZGFHYW1lcyA9IG5ldyBPZGFHYW1lcygpIiwiZXhwb3J0IGNsYXNzIE9kYUdhbWVzRmluZE1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG4gICAgICAgIHRoaXMuZ29hbCA9IHRoaXMuc2V0R29hbCgpXHJcbiAgICAgICAgdGhpcy5uYlRyeSA9IDBcclxuICAgICAgICB0aGlzLm5iVHJ5TWF4ID0gM1xyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYS5HYW1lcy5GaW5kTWUgPSB7fVxyXG4gICAgICAgIHdpbmRvdy5PZGEuR2FtZXMuRmluZE1lLnByb3Bvc2UgPSB0aGlzLnByb3Bvc2VcclxuICAgIH1cclxuXHJcbiAgICBwcm9wb3NlIChjaG9pY2UpIHtcclxuICAgICAgICBsZXQgc3RyID0gXCJcIlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBjaG9pY2VJbnQgPSBwYXJzZUludChjaG9pY2UpXHJcbiAgICAgICAgICAgIGlmKE51bWJlci5pc05hTihjaG9pY2VJbnQpKXtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGAnJHtjaG9pY2V9JyBpcyBub3QgYW4gaW50ZWdlci5gXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb2RhR2FtZXNGaW5kTWUubmJUcnkrK1xyXG4gICAgICAgICAgICAgICAgaWYob2RhR2FtZXNGaW5kTWUubmJUcnkgPCBvZGFHYW1lc0ZpbmRNZS5uYlRyeU1heCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hvaWNlID09PSBvZGFHYW1lc0ZpbmRNZS5nb2FsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gYFlvdSB3aW4gISEgKGluICR7b2RhR2FtZXNGaW5kTWUubmJUcnkrMX0gdHJ5KWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2RhR2FtZXNGaW5kTWUubmJUcnkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLnNldEdvYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGNob2ljZSA+IG9kYUdhbWVzRmluZE1lLmdvYWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBgVG8gYmlnICwpICgke29kYUdhbWVzRmluZE1lLm5iVHJ5TWF4IC0gb2RhR2FtZXNGaW5kTWUubmJUcnl9IHRyeSBsZWZ0KWBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGBUbyBzbWFsbCA6byAoJHtvZGFHYW1lc0ZpbmRNZS5uYlRyeU1heCAtIG9kYUdhbWVzRmluZE1lLm5iVHJ5fSB0cnkgbGVmdClgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gYEZhaWwgbm8gbW9yZSB0cmllcyAhISAoVGhlIGdvYWwgd2FzICR7b2RhR2FtZXNGaW5kTWUuZ29hbH0pYFxyXG4gICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLnNldEdvYWwoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGV4KXtcclxuICAgICAgICAgICAgc3RyID0gZXhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG5cclxuICAgIHNldEdvYWwgKCkge1xyXG4gICAgICAgIGxldCBnb2FsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgcmV0dXJuIGdvYWxcclxuICAgIH1cclxufVxyXG5cclxubGV0IG9kYUdhbWVzRmluZE1lID0gbmV3IE9kYUdhbWVzRmluZE1lKCkiLCJpbXBvcnQgeyBvZGEgfSBmcm9tICcuLi9PZGEnXHJcblxyXG5leHBvcnQgY2xhc3MgT2RhSW50ZXJmYWNlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9Qcml2YXRlIHBhcnRcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgfVxyXG5cclxuICAgIGFqYXgocGFyYW1zKXtcclxuICAgICAgICAndXNlIHN0cmljdCdcclxuICAgICAgICBpZihwYXJhbXMubWV0aG9kID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBwYXJhbXMubWV0aG9kID0gJ0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyYW1zLnN5bmNoID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBwYXJhbXMuc3luY2ggPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwYXJhbXMuZGF0YVR5cGUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHBhcmFtcy5kYXRhVHlwZSA9ICdKU09OJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwYXJhbXMuY29udGV4dCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcGFyYW1zLmNvbnRleHQgPSB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICBjb2RlOiBudWxsLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBvZGEuVG9vbGluZy5jbG9uZShwYXJhbXMuY29udGV4dClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHBhcmFtcy5zeW5jaCl7XHJcbiAgICAgICAgICAgIC8vU1lOQ0hcclxuICAgICAgICAgICAgbGV0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgICAgIHJlcS5vcGVuKHBhcmFtcy5tZXRob2QsIHBhcmFtcy51cmwsIGZhbHNlKVxyXG4gICAgICAgICAgICByZXEuc2VuZChudWxsKVxyXG4gICAgICAgICAgICByZXNwb25zZS5jb2RlID0gcmVxLnN0YXR1c1xyXG4gICAgICAgICAgICBpZihyZXEuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbXMuZGF0YVR5cGUgPT09ICdKU09OJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVxLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vVU5TWU5DSFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgICAgICAgICByZXEub3BlbihwYXJhbXMubWV0aG9kLCBwYXJhbXMudXJsLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgcmVxLnNlbmQobnVsbClcclxuICAgICAgICAgICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoYUV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jb2RlID0gcmVxLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJhbXMuZGF0YVR5cGUgPT09ICdKU09OJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVxLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5vZGEuSW50ZXJmYWNlcyA9IG5ldyBPZGFJbnRlcmZhY2VzKCkiLCJpbXBvcnQgeyBvZGEgfSBmcm9tICcuLi9PZGEnXHJcblxyXG5leHBvcnQgY2xhc3MgT2RhUHJlc2VudGF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG4gICAgICAgIHRoaXMucG9seXMgPSB7fVxyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMucGFyYW1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmh0bWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuaW5pdFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcGFyYW1zLmNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBdHRyaWJ1dCA9IHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IHBhcmFtcy5wYXJhbVtrZXldXHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gT2JqZWN0LmFzc2lnbihlbHQsIGRlZmF1bHRBdHRyaWJ1dClcclxuICAgICAgICAgICAgb3B0aW9uc1trZXldID0gY29weVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVkQ2FsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFyY2hcIilcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9ICB7fVxyXG4gICAgICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTFxyXG4gICAgICAgICAgICAgICAgc2NvcGVbJ2lubmVySFRNTCddID0gdGhpcy5pbm5lckhUTUxcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgbGV0IHJvb3QgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5odG1sXHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gb2RhLlRvb2xpbmcucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7aW5uZXJIVE1MfX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5OiBzY29wZVsnaW5uZXJIVE1MJ11cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB2YXJpYWJsZS5yZXBsYWNlKC8nL2csICdcIicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGpzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoIChleCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZigodmFyaWFibGUgPT0gbnVsbCkgJiYgKHRoaXNba2V5XSAhPSB2YXJpYWJsZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHRoaXNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IHZhcmlhYmxlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG9kYS5Ub29saW5nLnJlcGxhY2VBbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7JHtrZXl9fX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieTogdmFyaWFibGVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGFyZ2V0XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RET006IHJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNjb3BlOiBzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRET01Db250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvbHk6IHRoaXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhkYXRhcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhhdC5wb2x5c1twYXJhbXMubmFtZV0gPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQocGFyYW1zLm5hbWUsIHtcclxuICAgICAgICAgICAgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb3B0aW9ucylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5vZGEuUHJlc2VudGF0aW9uID0gbmV3IE9kYVByZXNlbnRhdGlvbigpIiwiaW1wb3J0IHsgb2RhIH0gZnJvbSAnLi4vT2RhJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE9kYVRvb2xpbmcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vUHJpdmF0ZSBwYXJ0XHJcblxyXG4gICAgICAgIC8vUHVibGljIHBhcnRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGludGVnZXJ9IG51bVxyXG4gICAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbGVuZ3RoXHJcbiAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICAgICovXHJcbiAgICBwYWQobnVtLCBsZW5ndGgpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBudW0gIT09IFwiaW50ZWdlclwiKXtcclxuICAgICAgICAgICAgbnVtID0gcGFyc2VJbnQobnVtKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBudW0gKyBcIlwiXHJcbiAgICAgICAgd2hpbGUgKHJlc3BvbnNlLmxlbmd0aCA8IGxlbmd0aCl7XHJcbiAgICAgICAgcmVzcG9uc2UgPSBcIjBcIiArIHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtEYXRlfSBteURhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGRhdGVGb3JtYXQobXlEYXRlLCBmb3JtYXQpe1xyXG4gICAgICAgIHZhciB5ZWFyRnVsbCA9IG15RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgdmFyIHllYXIgPSBteURhdGUuZ2V0WWVhcigpXHJcbiAgICAgICAgdmFyIG1vdW50aCA9IHRoaXMucGFkKG15RGF0ZS5nZXRNb250aCgpICsgMSwgMilcclxuICAgICAgICB2YXIgZGF5ID0gdGhpcy5wYWQobXlEYXRlLmdldERhdGUoKSwgMilcclxuICAgICAgICB2YXIgaG91ciA9IHRoaXMucGFkKG15RGF0ZS5nZXRIb3VycygpLCAyKVxyXG4gICAgICAgIHZhciBtaW51dGUgPSB0aGlzLnBhZChteURhdGUuZ2V0TWludXRlcygpLCAyKVxyXG4gICAgICAgIHZhciBzZWNvbmQgPSB0aGlzLnBhZChteURhdGUuZ2V0U2Vjb25kcygpLCAyKVxyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmb3JtYXQucmVwbGFjZShcInl5eXlcIiwgeWVhckZ1bGwpLnJlcGxhY2UoXCJ5eVwiLHllYXIpLnJlcGxhY2UoXCJtbVwiLG1vdW50aCkucmVwbGFjZShcImRkXCIsZGF5KS5yZXBsYWNlKFwiaGhcIixob3VyKS5yZXBsYWNlKFwibWlcIixtaW51dGUpLnJlcGxhY2UoXCJzc1wiLHNlY29uZClcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zLmRlZmF1bHRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMuc291cmNlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBtZXJnZVJlY3Vyc2l2ZShwYXJhbXMpIHtcclxuICAgICAgICB2YXIgb2JqUmV0dXJuID0gdGhpcy5jbG9uZShwYXJhbXMuZGVmYXVsdClcclxuXHJcbiAgICAgICAgLy9pZiBhcnJheVxyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkob2JqUmV0dXJuKSl7XHJcbiAgICAgICAgICAgIC8vZm9yIGVhY2ggZWx0IG9mIHRhcmdldCB3ZSBhcHBseSB0aGUgcGFydG4gYXJyYXlcclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRFbHRBcnJheSA9IG9ialJldHVyblswXVxyXG4gICAgICAgICAgICBvYmpSZXR1cm4gPSBbXVxyXG4gICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHBhcmFtcy5zb3VyY2Upe1xyXG4gICAgICAgICAgICAgICAgb2JqUmV0dXJuLnB1c2godGhpcy5tZXJnZVJlY3Vyc2l2ZSh7ZGVmYXVsdDogZGVmYXVsdEVsdEFycmF5LCBzb3VyY2U6IHBhcmFtcy5zb3VyY2VbaW5kZXhdfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiBvYmplY3RcclxuICAgICAgICB9ZWxzZSBpZigob2JqUmV0dXJuICE9PSBudWxsKSAmJiAob2JqUmV0dXJuICE9PSB1bmRlZmluZWQpICYmIChvYmpSZXR1cm4uY29uc3RydWN0b3IgPT09IE9iamVjdCkpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmpSZXR1cm4pe1xyXG4gICAgICAgICAgICAgICAgaWYocGFyYW1zLnNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialJldHVybltrZXldID0gIHRoaXMubWVyZ2VSZWN1cnNpdmUoe2RlZmF1bHQ6IG9ialJldHVybltrZXldLCBzb3VyY2U6IHBhcmFtcy5zb3VyY2Vba2V5XX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc291cmNlcyBhdHRyaWIgaW4gbW9yZVxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zLnNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIW9ialJldHVybi5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICBvYmpSZXR1cm5ba2V5XSA9IHBhcmFtcy5zb3VyY2Vba2V5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYocGFyYW1zLnNvdXJjZSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIG9ialJldHVybiA9IHBhcmFtcy5zb3VyY2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpSZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgY2xvbmUob2JqKSB7XHJcbiAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGVtcCA9IG9iai5jb25zdHJ1Y3RvcigpIC8vIGdpdmUgdGVtcCB0aGUgb3JpZ2luYWwgb2JqJ3MgY29uc3RydWN0b3JcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHRlbXBba2V5XSA9IHRoaXMuY2xvbmUob2JqW2tleV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGVtcFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5zdHJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZmluZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5ieVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaWdub3JlQ2FzZSBieSBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICByZXBsYWNlQWxsIChwYXJhbXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihwYXJhbXMuZmluZCA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5zdHJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IFwiZ1wiXHJcbiAgICAgICAgICAgIGlmKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlQ2FzZScpICYmIHBhcmFtcy5pZ25vcmVDYXNlKXtcclxuICAgICAgICAgICAgICAgIG9wdCA9ICdnaSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHN0ckZpbmQgPSBwYXJhbXMuZmluZC5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZ2ksIFwiXFxcXCQxXCIpXHJcblxyXG4gICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHN0ckZpbmQsIG9wdClcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJSZXR1cm4gPSBwYXJhbXMuc3RyLnJlcGxhY2UocmUsIHBhcmFtcy5ieSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJSZXR1cm5cclxuICAgICAgICB9IGNhdGNoIChlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxub2RhLlRvb2xpbmcgPSBuZXcgT2RhVG9vbGluZygpIiwiaW1wb3J0IHsgb2RhIH0gZnJvbSAnLi9PZGEnXHJcbmltcG9ydCB7IE9kYVRvb2xpbmcgfSBmcm9tIFwiLi9PZGFUb29saW5nL09kYVRvb2xpbmdcIlxyXG5pbXBvcnQgeyBPZGFJbnRlcmZhY2VzIH0gZnJvbSBcIi4vT2RhSW50ZXJmYWNlcy9PZGFJbnRlcmZhY2VzXCJcclxuaW1wb3J0IHsgT2RhUHJlc2VudGF0aW9uIH0gZnJvbSBcIi4vT2RhUHJlc2VudGF0aW9uL09kYVByZXNlbnRhdGlvblwiXHJcbmltcG9ydCB7IE9kYUdhbWVzIH0gZnJvbSBcIi4vT2RhR2FtZXMvT2RhR2FtZXNcIlxyXG5pbXBvcnQgeyBPZGFHYW1lc0ZpbmRNZSB9IGZyb20gXCIuL09kYUdhbWVzL09kYUdhbWVzRmluZE1lXCJcclxuXHJcbm9kYS5nZXRWZXJzaW9uKClcclxub2RhLnNheUhlbGxvKFwiRmFicmljZVwiLCBcIkF1cm9yZVwiLCBcIklsbGlkYW5cIilcclxuXHJcbm9kYS5QcmVzZW50YXRpb24uY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+LmNvbG9yZWQge2NvbG9yOiBncmVlbn08L3N0eWxlPjxoMT5IZWxsbyA8c3BhbiBjbGFzcz1cImNvbG9yZWRcIj57e25hbWV9fTwvc3Bhbj4hPC9oMT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGRhdGFzLnJvb3RET00ucXVlcnlTZWxlY3RvcihcIi5jb2xvcmVkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLmRhdGFTY29wZS5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbm9kYS5QcmVzZW50YXRpb24uY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcIm9kYS10YWJsZVwiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+dGFibGUsIHRoLCB0ZCB7Ym9yZGVyOiAxcHggc29saWQgYmxhY2t9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+Y29sMTwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48L3Rib2R5PjwvdGFibGU+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkYXRhcy5yb290RE9NLmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXVxyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLmRhdGFTY29wZS5saXN0KXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IGRhdGFzLmRhdGFTY29wZS5saXN0W2luZGV4XVxyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KGluZGV4KVxyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApXHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxub2RhLlByZXNlbnRhdGlvbi5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwiYXZhdGFyLWxpc3RcIixcclxuICAgIGh0bWw6IGA8c3R5bGU+dGFibGUsIHRoLCB0ZCB7Ym9yZGVyOiAxcHggc29saWQgYmxhY2t9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+YXZhdGFyPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdXHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggaW4gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKSl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBkYXRhcy5vbGRET01Db250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdteS1waG90bycpW2luZGV4XVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgZWx0ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgwKVxyXG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBlbHQub3V0ZXJIVE1MXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5vZGEuUHJlc2VudGF0aW9uLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJteS1waG90b1wiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBjbGFzczoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJjbGFzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcmM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwic3JjXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIj57e2lubmVySFRNTH19PC9zcGFuPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcblxyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImF1cm9yZVwiPjwvaGVsbG8td29ybGQ+J1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QyJykuaW5uZXJIVE1MID0nPGhlbGxvLXdvcmxkIG5hbWU9XCJlbnJpY29cIj48L2hlbGxvLXdvcmxkPidcclxuXHJcbmxldCB0cnVjID0ge1xyXG4gICAgdGVzdDogJ2NvdWNvdSdcclxufVxyXG5cclxub2RhLkludGVyZmFjZXMuYWpheCh7XHJcbiAgICB1cmw6ICd1c2Vycy5qc29uJyxcclxuICAgIGNvbnRleHQ6IHRydWNcclxufSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxufSk7XHJcblxyXG50cnVjLnRlc3QgPSAnaGxsbydcclxuXHJcbmNvbnNvbGUubG9nKHRydWMpIl19
