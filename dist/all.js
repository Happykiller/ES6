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
        this.polys = {};
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

        /**
         * @param params
         * @param {string} params.name
         * @param {string} params.param
         * @param {string} params.css
         * @param {string} params.html
         * @param {string} params.init
         * @param {function} params.callback
         */

    }, {
        key: "createPoly",
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

                    target = that.replaceAll({
                        str: target,
                        find: "{{innerHTML}}",
                        by: scope['innerHTML']
                    });

                    for (var _key2 in params.param) {
                        var variable = this.getAttribute(_key2);

                        if (variable !== null) {
                            var json = variable.replace(/'/g, '"');
                            try {
                                json = JSON.parse(json);
                                variable = json;
                            } catch (ex) {}
                        }

                        if (variable == null && this[_key2] != variable) {
                            variable = this[_key2];
                        }

                        scope[_key2] = variable;

                        target = that.replaceAll({
                            str: target,
                            find: "{{" + _key2 + "}}",
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

            var response = {
                code: null,
                data: null
            };

            if (params.method === undefined) {
                params.method = 'GET';
            }
            if (params.synch === undefined) {
                params.synch = false;
            }
            if (params.dataType === undefined) {
                params.dataType = 'JSON';
            }
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
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Oda = require("./Oda");

var _OdaGames = require("./OdaGames/OdaGames");

var _OdaGamesFindMe = require("./OdaGames/OdaGamesFindMe");

var _OdaInterfaces = require("./OdaInterfaces/OdaInterfaces");

_Oda.oda.getVersion();
_Oda.oda.sayHello("Fabrice", "Aurore", "Illidan");

_Oda.oda.createPoly({
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

_Oda.oda.createPoly({
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

_Oda.oda.createPoly({
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

_Oda.oda.createPoly({
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

_Oda.oda.Interfaces.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts'
}).then(function (response) {
    console.log(response);
});

},{"./Oda":1,"./OdaGames/OdaGames":2,"./OdaGames/OdaGamesFindMe":3,"./OdaInterfaces/OdaInterfaces":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lcy5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lc0ZpbmRNZS5qc3giLCJzcmNcXE9kYUludGVyZmFjZXNcXE9kYUludGVyZmFjZXMuanN4Iiwic3JjXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7SUFHYSxHLFdBQUEsRztBQUNULG1CQUFlO0FBQUE7O0FBQ1g7QUFDQSxhQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBSyxPQUFMLEdBQWUsZUFBZjs7QUFFQTtBQUNBLGVBQU8sR0FBUCxHQUFhLEVBQWI7QUFDQSxlQUFPLEdBQVAsQ0FBVyxPQUFYLEdBQXFCLEtBQUssT0FBMUI7QUFDSDs7QUFFRDs7Ozs7OztxQ0FHYztBQUNWLG9CQUFRLEdBQVIsc0NBQStDLEtBQUssT0FBcEQ7QUFDSDs7QUFFRDs7Ozs7O21DQUdtQjtBQUNmLGdCQUFJLGtCQUFKOztBQURlLDhDQUFOLElBQU07QUFBTixvQkFBTTtBQUFBOztBQUVmLGlCQUFLLE9BQUwsQ0FBYSxlQUFPO0FBQ2hCLDZCQUFXLEdBQVg7QUFDSCxhQUZEO0FBR0Esa0JBQU0sSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLElBQUksTUFBSixHQUFXLENBQXpCLENBQU47QUFDQSxvQkFBUSxHQUFSLENBQVksR0FBWjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7bUNBU1ksTSxFQUFRO0FBQ2hCLGdCQUFJLE9BQU8sSUFBWDs7QUFFQSxnQkFBSSxVQUFVLEVBQWQ7O0FBRUEsZ0JBQU0sa0JBQWtCO0FBQ3BCLDBCQUFVLElBRFU7QUFFcEIsNEJBQVksSUFGUTtBQUdwQiw4QkFBYztBQUhNLGFBQXhCOztBQU1BLGlCQUFJLElBQUksR0FBUixJQUFlLE9BQU8sS0FBdEIsRUFBNEI7QUFDeEIsb0JBQUksTUFBTSxPQUFPLEtB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QU0sYUFBTixDQUFvQixvQkFBcEIsQ0FBeUMsVUFBekMsRUFBcUQsS0FBckQsQ0FBVjtBQUNBLGdCQUFHLFFBQU8sR0FBUCx5Q0FBTyxHQUFQLE9BQWUsUUFBbEIsRUFBMkI7QUFDdkIsb0JBQUksTUFBTSxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBVjtBQUNBLG9CQUFJLE9BQU8sSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFYO0FBQ0EscUJBQUssU0FBTCxHQUFpQixJQUFJLFNBQXJCO0FBQ0g7QUFDSjtBQUNKO0FBZFUsQ0FBZjs7QUFpQkEsU0FBSSxVQUFKLENBQWU7QUFDWCxVQUFNLFVBREs7QUFFWCxXQUFPO0FBQ0gsZUFBTztBQUNILG1CQUFPO0FBREosU0FESjtBQUlILGFBQUs7QUFDRCxtQkFBTztBQUROO0FBSkYsS0FGSTtBQVVYLGtFQVZXO0FBV1gsY0FBVSxrQkFBQyxLQUFELEVBQVcsQ0FFcEI7QUFiVSxDQUFmOztBQWdCQSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsU0FBaEMsR0FBMkMsMkNBQTNDOztBQUVBLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE0QywyQ0FBNUM7O0FBRUEsU0FBSSxVQUFKLENBQWUsSUFBZixDQUFvQjtBQUNoQixTQUFLO0FBRFcsQ0FBcEIsRUFFRyxJQUZILENBRVEsb0JBQVk7QUFDaEIsWUFBUSxHQUFSLENBQVksUUFBWjtBQUNILENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPZGEge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIC8vUHJpdmF0ZSBwYXJ0XHJcbiAgICAgICAgdGhpcy5wb2x5cyA9IHt9XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gXCIwLjEuMTYxMTI1LjAxXCJcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgICAgIHdpbmRvdy5PZGEgPSB7fVxyXG4gICAgICAgIHdpbmRvdy5PZGEudmVyc2lvbiA9IHRoaXMudmVyc2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldFZlcnNpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBPZGEgRnJhbWVXb3JrIGN1cnJlbnQgdmVyc2lvbiA6ICR7dGhpcy52ZXJzaW9ufWApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB3aG9zXHJcbiAgICAgKi9cclxuICAgIHNheUhlbGxvICguLi53aG9zKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGBCb25qb3VyIDogYFxyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoLTEpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5uYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnBhcmFtXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5odG1sXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmluaXRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhcmFtcy5jYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVQb2x5IChwYXJhbXMpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXNcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fVxyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0QXR0cmlidXQgPSB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtcy5wYXJhbSl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBwYXJhbXMucGFyYW1ba2V5XVxyXG4gICAgICAgICAgICBsZXQgY29weSA9IE9iamVjdC5hc3NpZ24oZWx0LCBkZWZhdWx0QXR0cmlidXQpXHJcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IGNvcHlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnMuY3JlYXRlZENhbGxiYWNrID0ge1xyXG4gICAgICAgICAgICB2YWx1ZSAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcmNoXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAge31cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUxcclxuICAgICAgICAgICAgICAgIHNjb3BlWydpbm5lckhUTUwnXSA9IHRoaXMuaW5uZXJIVE1MXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGxldCByb290ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KClcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBwYXJhbXMuaHRtbFxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7aW5uZXJIVE1MfX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5OiBzY29wZVsnaW5uZXJIVE1MJ11cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB2YXJpYWJsZS5yZXBsYWNlKC8nL2csICdcIicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGpzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoIChleCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZigodmFyaWFibGUgPT0gbnVsbCkgJiYgKHRoaXNba2V5XSAhPSB2YXJpYWJsZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHRoaXNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IHZhcmlhYmxlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3ske2tleX19fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5OiB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcm9vdC5pbm5lckhUTUwgPSB0YXJnZXRcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdERPTTogcm9vdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU2NvcGU6IHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZERPTUNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9seTogdGhpc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKGRhdGFzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGF0LnBvbHlzW3BhcmFtcy5uYW1lXSA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChwYXJhbXMubmFtZSwge1xyXG4gICAgICAgICAgICBwcm90b3R5cGU6IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBvcHRpb25zKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnN0clxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5maW5kXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmJ5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pZ25vcmVDYXNlIGJ5IGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VBbGwgKHBhcmFtcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtcy5maW5kID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zLnN0clxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0ID0gXCJnXCJcclxuICAgICAgICAgICAgaWYocGFyYW1zLmhhc093blByb3BlcnR5KCdpZ25vcmVDYXNlJykgJiYgcGFyYW1zLmlnbm9yZUNhc2Upe1xyXG4gICAgICAgICAgICAgICAgb3B0ID0gJ2dpJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyRmluZCA9IHBhcmFtcy5maW5kLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9naSwgXCJcXFxcJDFcIilcclxuXHJcbiAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoc3RyRmluZCwgb3B0KVxyXG5cclxuICAgICAgICAgICAgdmFyIHN0clJldHVybiA9IHBhcmFtcy5zdHIucmVwbGFjZShyZSwgcGFyYW1zLmJ5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0clJldHVyblxyXG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IG9kYSA9IG5ldyBPZGEoKSIsImV4cG9ydCBjbGFzcyBPZGFHYW1lcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9Qcml2YXRlIHBhcnRcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgICAgIHdpbmRvdy5PZGEuR2FtZXMgPSB7fVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgb2RhR2FtZXMgPSBuZXcgT2RhR2FtZXMoKSIsImV4cG9ydCBjbGFzcyBPZGFHYW1lc0ZpbmRNZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9Qcml2YXRlIHBhcnRcclxuICAgICAgICB0aGlzLmdvYWwgPSB0aGlzLnNldEdvYWwoKVxyXG4gICAgICAgIHRoaXMubmJUcnkgPSAwXHJcbiAgICAgICAgdGhpcy5uYlRyeU1heCA9IDNcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgICAgIHdpbmRvdy5PZGEuR2FtZXMuRmluZE1lID0ge31cclxuICAgICAgICB3aW5kb3cuT2RhLkdhbWVzLkZpbmRNZS5wcm9wb3NlID0gdGhpcy5wcm9wb3NlXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcG9zZSAoY2hvaWNlKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCJcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgY2hvaWNlSW50ID0gcGFyc2VJbnQoY2hvaWNlKVxyXG4gICAgICAgICAgICBpZihOdW1iZXIuaXNOYU4oY2hvaWNlSW50KSl7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgJyR7Y2hvaWNlfScgaXMgbm90IGFuIGludGVnZXIuYFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5KytcclxuICAgICAgICAgICAgICAgIGlmKG9kYUdhbWVzRmluZE1lLm5iVHJ5IDwgb2RhR2FtZXNGaW5kTWUubmJUcnlNYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNob2ljZSA9PT0gb2RhR2FtZXNGaW5kTWUuZ29hbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGBZb3Ugd2luICEhIChpbiAke29kYUdhbWVzRmluZE1lLm5iVHJ5KzF9IHRyeSlgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5zZXRHb2FsKClcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihjaG9pY2UgPiBvZGFHYW1lc0ZpbmRNZS5nb2FsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gYFRvIGJpZyAsKSAoJHtvZGFHYW1lc0ZpbmRNZS5uYlRyeU1heCAtIG9kYUdhbWVzRmluZE1lLm5iVHJ5fSB0cnkgbGVmdClgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBgVG8gc21hbGwgOm8gKCR7b2RhR2FtZXNGaW5kTWUubmJUcnlNYXggLSBvZGFHYW1lc0ZpbmRNZS5uYlRyeX0gdHJ5IGxlZnQpYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IGBGYWlsIG5vIG1vcmUgdHJpZXMgISEgKFRoZSBnb2FsIHdhcyAke29kYUdhbWVzRmluZE1lLmdvYWx9KWBcclxuICAgICAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5uYlRyeSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5zZXRHb2FsKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChleCl7XHJcbiAgICAgICAgICAgIHN0ciA9IGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuXHJcbiAgICBzZXRHb2FsICgpIHtcclxuICAgICAgICBsZXQgZ29hbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIHJldHVybiBnb2FsXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBvZGFHYW1lc0ZpbmRNZSA9IG5ldyBPZGFHYW1lc0ZpbmRNZSgpIiwiaW1wb3J0IHsgb2RhIH0gZnJvbSAnLi4vT2RhJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE9kYUludGVyZmFjZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vUHJpdmF0ZSBwYXJ0XHJcblxyXG4gICAgICAgIC8vUHVibGljIHBhcnRcclxuICAgIH1cclxuXHJcbiAgICBhamF4KHBhcmFtcyl7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICBjb2RlOiBudWxsLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYXJhbXMubWV0aG9kID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBwYXJhbXMubWV0aG9kID0gJ0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyYW1zLnN5bmNoID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBwYXJhbXMuc3luY2ggPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwYXJhbXMuZGF0YVR5cGUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHBhcmFtcy5kYXRhVHlwZSA9ICdKU09OJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwYXJhbXMuc3luY2gpe1xyXG4gICAgICAgICAgICAvL1NZTkNIXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgICAgICByZXEub3BlbihwYXJhbXMubWV0aG9kLCBwYXJhbXMudXJsLCBmYWxzZSlcclxuICAgICAgICAgICAgcmVxLnNlbmQobnVsbClcclxuICAgICAgICAgICAgcmVzcG9uc2UuY29kZSA9IHJlcS5zdGF0dXNcclxuICAgICAgICAgICAgaWYocmVxLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgaWYocGFyYW1zLmRhdGFUeXBlID09PSAnSlNPTicpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlcS5yZXNwb25zZVRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL1VOU1lOQ0hcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgICAgICAgICAgcmVxLm9wZW4ocGFyYW1zLm1ldGhvZCwgcGFyYW1zLnVybCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHJlcS5zZW5kKG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gKGFFdnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY29kZSA9IHJlcS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1zLmRhdGFUeXBlID09PSAnSlNPTicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlcS5yZXNwb25zZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxub2RhLkludGVyZmFjZXMgPSBuZXcgT2RhSW50ZXJmYWNlcygpIiwiaW1wb3J0IHsgb2RhIH0gZnJvbSAnLi9PZGEnXHJcbmltcG9ydCB7IE9kYUdhbWVzIH0gZnJvbSBcIi4vT2RhR2FtZXMvT2RhR2FtZXNcIlxyXG5pbXBvcnQgeyBPZGFHYW1lc0ZpbmRNZSB9IGZyb20gXCIuL09kYUdhbWVzL09kYUdhbWVzRmluZE1lXCJcclxuaW1wb3J0IHsgT2RhSW50ZXJmYWNlcyB9IGZyb20gXCIuL09kYUludGVyZmFjZXMvT2RhSW50ZXJmYWNlc1wiXHJcblxyXG5vZGEuZ2V0VmVyc2lvbigpXHJcbm9kYS5zYXlIZWxsbyhcIkZhYnJpY2VcIiwgXCJBdXJvcmVcIiwgXCJJbGxpZGFuXCIpXHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+LmNvbG9yZWQge2NvbG9yOiBncmVlbn08L3N0eWxlPjxoMT5IZWxsbyA8c3BhbiBjbGFzcz1cImNvbG9yZWRcIj57e25hbWV9fTwvc3Bhbj4hPC9oMT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGRhdGFzLnJvb3RET00ucXVlcnlTZWxlY3RvcihcIi5jb2xvcmVkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLmRhdGFTY29wZS5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwib2RhLXRhYmxlXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFja308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5jb2wxPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdXHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggaW4gZGF0YXMuZGF0YVNjb3BlLmxpc3Qpe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gZGF0YXMuZGF0YVNjb3BlLmxpc3RbaW5kZXhdXHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoMClcclxuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBlbHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImF2YXRhci1saXN0XCIsXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrfTwvc3R5bGU+PHRhYmxlIGlkPVwibXlUYWJsZVwiPjx0aGVhZD48dHI+PHRoPmF2YXRhcjwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48L3Rib2R5PjwvdGFibGU+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkYXRhcy5yb290RE9NLmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXVxyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLm9sZERPTUNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ215LXBob3RvJykpe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKVtpbmRleF1cclxuICAgICAgICAgICAgaWYodHlwZW9mIGVsdCA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdyhpbmRleClcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoMClcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0Lm91dGVySFRNTFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJteS1waG90b1wiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBjbGFzczoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJjbGFzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcmM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwic3JjXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIj57e2lubmVySFRNTH19PC9zcGFuPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcblxyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImF1cm9yZVwiPjwvaGVsbG8td29ybGQ+J1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QyJykuaW5uZXJIVE1MID0nPGhlbGxvLXdvcmxkIG5hbWU9XCJlbnJpY29cIj48L2hlbGxvLXdvcmxkPidcclxuXHJcbm9kYS5JbnRlcmZhY2VzLmFqYXgoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyxcclxufSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxufSk7Il19
