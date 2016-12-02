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
        _classCallCheck(this, OdaInterfaces);
    }
    //Private part

    //Public part


    /**
     * @param {array} whos
     */


    _createClass(OdaInterfaces, [{
        key: 'sayHello',
        value: function sayHello() {
            var str = 'Bonjour : ';

            for (var _len = arguments.length, whos = Array(_len), _key = 0; _key < _len; _key++) {
                whos[_key] = arguments[_key];
            }

            whos.forEach(function (who) {
                str += ' ' + who + ',';
            });
            str = str.substr(0, str.length - 1);
            console.log(str);
        }
    }, {
        key: 'getJSON',
        value: function getJSON(url, success, error) {
            'use strict';

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr.responseText);
                    }
                }
            };
            xhr.open('GET', url);
            xhr.send();
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
    html: "<style>.colored {color: green;}</style><h1>Hello <span class=\"colored\">{{name}}</span>!</h1>",
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
    html: "<style>table, th, td {border: 1px solid black;}</style><table id=\"myTable\"><thead><tr><th>col1</th></tr></thead><tbody></tbody></table>",
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
    html: "<style>table, th, td {border: 1px solid black;}</style><table id=\"myTable\"><thead><tr><th>avatar</th></tr></thead><tbody></tbody></table>",
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
    html: "<span style=\"font-weight: bold;\">{{innerHTML}}</span>",
    callback: function callback(datas) {}
});

document.querySelector('#test').innerHTML = '<hello-world name="aurore"></hello-world>';

document.querySelector('#test2').innerHTML = '<hello-world name="enrico"></hello-world>';

_Oda.oda.Interfaces.getJSON('https://jsonplaceholder.typicode.com/posts', function (response) {
    console.log(response);
});

},{"./Oda":1,"./OdaGames/OdaGames":2,"./OdaGames/OdaGamesFindMe":3,"./OdaInterfaces/OdaInterfaces":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lcy5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lc0ZpbmRNZS5qc3giLCJzcmNcXE9kYUludGVyZmFjZXNcXE9kYUludGVyZmFjZXMuanN4Iiwic3JjXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7SUFHYSxHLFdBQUEsRztBQUNULG1CQUFlO0FBQUE7O0FBQ1g7QUFDQSxhQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBSyxPQUFMLEdBQWUsZUFBZjs7QUFFQTtBQUNBLGVBQU8sR0FBUCxHQUFhLEVBQWI7QUFDQSxlQUFPLEdBQVAsQ0FBVyxPQUFYLEdBQXFCLEtBQUssT0FBMUI7QUFDSDs7QUFFRDs7Ozs7OztxQ0FHYztBQUNWLG9CQUFRLEdBQVIsc0NBQStDLEtBQUssT0FBcEQ7QUFDSDs7QUFFRDs7Ozs7O21DQUdtQjtBQUNmLGdCQUFJLGtCQUFKOztBQURlLDhDQUFOLElBQU07QUFBTixvQkFBTTtBQUFBOztBQUVmLGlCQUFLLE9BQUwsQ0FBYSxlQUFPO0FBQ2hCLDZCQUFXLEdBQVg7QUFDSCxhQUZEO0FBR0Esa0JBQU0sSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLElBQUksTUFBSixHQUFXLENBQXpCLENBQU47QUFDQSxvQkFBUSxHQUFSLENBQVksR0FBWjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7bUNBU1ksTSxFQUFRO0FBQ2hCLGdCQUFJLE9BQU8sSUFBWDs7QUFFQSxnQkFBSSxVQUFVLEVBQWQ7O0FBRUEsZ0JBQU0sa0JBQWtCO0FBQ3BCLDBCQUFVLElBRFU7QUFFcEIsNEJBQVksSUFGUTtBQUdwQiw4QkFBYztBQUhNLGFBQXhCOztBQU1BLGlCQUFJLElBQUksR0FBUixJQUFlLE9BQU8sS0FBdEIsRUFBNEI7QUFDeEIsb0JBQUksTUFBTSxPQUFPLEtB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LFlBQUksUUFBUSxNQUFNLE9BQU4sQ0FBYyxjQUFkLENBQTZCLFNBQTdCLEVBQXdDLG9CQUF4QyxDQUE2RCxPQUE3RCxFQUFzRSxDQUF0RSxDQUFaOztBQUVBLGFBQUksSUFBSSxLQUFSLElBQWlCLE1BQU0sYUFBTixDQUFvQixvQkFBcEIsQ0FBeUMsVUFBekMsQ0FBakIsRUFBc0U7QUFDbEUsZ0JBQUksTUFBTSxNQUFNLGFBQU4sQ0FBb0Isb0JBQXBCLENBQXlDLFVBQXpDLEVBQXFELEtBQXJELENBQVY7QUFDQSxnQkFBRyxRQUFPLEdBQVAseUNBQU8sR0FBUCxPQUFlLFFBQWxCLEVBQTJCO0FBQ3ZCLG9CQUFJLE1BQU0sTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQVY7QUFDQSxvQkFBSSxPQUFPLElBQUksVUFBSixDQUFlLENBQWYsQ0FBWDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsSUFBSSxTQUFyQjtBQUNIO0FBQ0o7QUFDSjtBQWRVLENBQWY7O0FBaUJBLFNBQUksVUFBSixDQUFlO0FBQ1gsVUFBTSxVQURLO0FBRVgsV0FBTztBQUNILGVBQU87QUFDSCxtQkFBTztBQURKLFNBREo7QUFJSCxhQUFLO0FBQ0QsbUJBQU87QUFETjtBQUpGLEtBRkk7QUFVWCxtRUFWVztBQVdYLGNBQVUsa0JBQUMsS0FBRCxFQUFXLENBRXBCO0FBYlUsQ0FBZjs7QUFnQkEsU0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEdBQTJDLDJDQUEzQzs7QUFFQSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNEMsMkNBQTVDOztBQUVBLFNBQUksVUFBSixDQUFlLE9BQWYsQ0FBdUIsNENBQXZCLEVBQXFFLG9CQUFZO0FBQ3pFLFlBQVEsR0FBUixDQUFZLFFBQVo7QUFDSCxDQUZMIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhhcHB5a2lsbGVyIG9uIDAyLzA0LzIwMTYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG4gICAgICAgIHRoaXMucG9seXMgPSB7fTtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNjExMjUuMDFcIjtcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgICAgIHdpbmRvdy5PZGEgPSB7fTtcclxuICAgICAgICB3aW5kb3cuT2RhLnZlcnNpb24gPSB0aGlzLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB3aG9zXHJcbiAgICAgKi9cclxuICAgIHNheUhlbGxvICguLi53aG9zKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGBCb25qb3VyIDogYDtcclxuICAgICAgICB3aG9zLmZvckVhY2god2hvID0+IHtcclxuICAgICAgICAgICAgc3RyICs9IGAgJHt3aG99LGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoLTEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMucGFyYW1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmh0bWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuaW5pdFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcGFyYW1zLmNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJpYnV0ID0ge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IHBhcmFtcy5wYXJhbVtrZXldO1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IE9iamVjdC5hc3NpZ24oZWx0LCBkZWZhdWx0QXR0cmlidXQpO1xyXG4gICAgICAgICAgICBvcHRpb25zW2tleV0gPSBjb3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVkQ2FsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFyY2hcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAge307XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVbJ2lubmVySFRNTCddID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5odG1sO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7aW5uZXJIVE1MfX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5OiBzY29wZVsnaW5uZXJIVE1MJ11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtcy5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IHZhcmlhYmxlLnJlcGxhY2UoLycvZywgJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2ggKGV4KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh2YXJpYWJsZSA9PSBudWxsKSAmJiAodGhpc1trZXldICE9IHZhcmlhYmxlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdGhpc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IHZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGF0LnJlcGxhY2VBbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7JHtrZXl9fX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieTogdmFyaWFibGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByb290LmlubmVySFRNTCA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdERPTTogcm9vdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU2NvcGU6IHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZERPTUNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9seTogdGhpc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoYXQucG9seXNbcGFyYW1zLm5hbWVdID0gZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KHBhcmFtcy5uYW1lLCB7XHJcbiAgICAgICAgICAgIHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUsIG9wdGlvbnMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnN0clxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5maW5kXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmJ5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pZ25vcmVDYXNlIGJ5IGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VBbGwgKHBhcmFtcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtcy5maW5kID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zLnN0cjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IFwiZ1wiO1xyXG4gICAgICAgICAgICBpZihwYXJhbXMuaGFzT3duUHJvcGVydHkoJ2lnbm9yZUNhc2UnKSAmJiBwYXJhbXMuaWdub3JlQ2FzZSl7XHJcbiAgICAgICAgICAgICAgICBvcHQgPSAnZ2knO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyRmluZCA9IHBhcmFtcy5maW5kLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9naSwgXCJcXFxcJDFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHN0ckZpbmQsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyUmV0dXJuID0gcGFyYW1zLnN0ci5yZXBsYWNlKHJlLCBwYXJhbXMuYnkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0clJldHVybjtcclxuICAgICAgICB9IGNhdGNoIChlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgb2RhID0gbmV3IE9kYSgpOyIsImV4cG9ydCBjbGFzcyBPZGFHYW1lcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9Qcml2YXRlIHBhcnRcclxuXHJcbiAgICAgICAgLy9QdWJsaWMgcGFydFxyXG4gICAgICAgIHdpbmRvdy5PZGEuR2FtZXMgPSB7fTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG9kYUdhbWVzID0gbmV3IE9kYUdhbWVzKCk7IiwiZXhwb3J0IGNsYXNzIE9kYUdhbWVzRmluZE1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG4gICAgICAgIHRoaXMuZ29hbCA9IHRoaXMuc2V0R29hbCgpO1xyXG4gICAgICAgIHRoaXMubmJUcnkgPSAwO1xyXG4gICAgICAgIHRoaXMubmJUcnlNYXggPSAzO1xyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYS5HYW1lcy5GaW5kTWUgPSB7fTtcclxuICAgICAgICB3aW5kb3cuT2RhLkdhbWVzLkZpbmRNZS5wcm9wb3NlID0gdGhpcy5wcm9wb3NlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3Bvc2UgKGNob2ljZSkge1xyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBjaG9pY2VJbnQgPSBwYXJzZUludChjaG9pY2UpO1xyXG4gICAgICAgICAgICBpZihOdW1iZXIuaXNOYU4oY2hvaWNlSW50KSl7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBgJyR7Y2hvaWNlfScgaXMgbm90IGFuIGludGVnZXIuYDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5uYlRyeSsrO1xyXG4gICAgICAgICAgICAgICAgaWYob2RhR2FtZXNGaW5kTWUubmJUcnkgPCBvZGFHYW1lc0ZpbmRNZS5uYlRyeU1heCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hvaWNlID09PSBvZGFHYW1lc0ZpbmRNZS5nb2FsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gYFlvdSB3aW4gISEgKGluICR7b2RhR2FtZXNGaW5kTWUubmJUcnkrMX0gdHJ5KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2RhR2FtZXNGaW5kTWUuc2V0R29hbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGNob2ljZSA+IG9kYUdhbWVzRmluZE1lLmdvYWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBgVG8gYmlnICwpICgke29kYUdhbWVzRmluZE1lLm5iVHJ5TWF4IC0gb2RhR2FtZXNGaW5kTWUubmJUcnl9IHRyeSBsZWZ0KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBgVG8gc21hbGwgOm8gKCR7b2RhR2FtZXNGaW5kTWUubmJUcnlNYXggLSBvZGFHYW1lc0ZpbmRNZS5uYlRyeX0gdHJ5IGxlZnQpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBgRmFpbCBubyBtb3JlIHRyaWVzICEhIChUaGUgZ29hbCB3YXMgJHtvZGFHYW1lc0ZpbmRNZS5nb2FsfSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5zZXRHb2FsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXgpe1xyXG4gICAgICAgICAgICBzdHIgPSBleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHb2FsICgpIHtcclxuICAgICAgICBsZXQgZ29hbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gZ29hbDtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG9kYUdhbWVzRmluZE1lID0gbmV3IE9kYUdhbWVzRmluZE1lKCk7IiwiaW1wb3J0IHsgb2RhIH0gZnJvbSAnLi4vT2RhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPZGFJbnRlcmZhY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB3aG9zXHJcbiAgICAgKi9cclxuICAgIHNheUhlbGxvICguLi53aG9zKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGBCb25qb3VyIDogYDtcclxuICAgICAgICB3aG9zLmZvckVhY2god2hvID0+IHtcclxuICAgICAgICAgICAgc3RyICs9IGAgJHt3aG99LGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoLTEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SlNPTih1cmwsIHN1Y2Nlc3MsIGVycm9yKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm9kYS5JbnRlcmZhY2VzID0gbmV3IE9kYUludGVyZmFjZXMoKTsiLCJpbXBvcnQgeyBvZGEgfSBmcm9tICcuL09kYSc7XHJcbmltcG9ydCB7IE9kYUdhbWVzIH0gZnJvbSBcIi4vT2RhR2FtZXMvT2RhR2FtZXNcIjtcclxuaW1wb3J0IHsgT2RhR2FtZXNGaW5kTWUgfSBmcm9tIFwiLi9PZGFHYW1lcy9PZGFHYW1lc0ZpbmRNZVwiO1xyXG5pbXBvcnQgeyBPZGFJbnRlcmZhY2VzIH0gZnJvbSBcIi4vT2RhSW50ZXJmYWNlcy9PZGFJbnRlcmZhY2VzXCI7XHJcblxyXG5vZGEuZ2V0VmVyc2lvbigpO1xyXG5vZGEuc2F5SGVsbG8oXCJGYWJyaWNlXCIsIFwiQXVyb3JlXCIsIFwiSWxsaWRhblwiKTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwiaGVsbG8td29ybGRcIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT4uY29sb3JlZCB7Y29sb3I6IGdyZWVuO308L3N0eWxlPjxoMT5IZWxsbyA8c3BhbiBjbGFzcz1cImNvbG9yZWRcIj57e25hbWV9fTwvc3Bhbj4hPC9oMT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGRhdGFzLnJvb3RET00ucXVlcnlTZWxlY3RvcihcIi5jb2xvcmVkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLmRhdGFTY29wZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJvZGEtdGFibGVcIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5jb2wxPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLmRhdGFTY29wZS5saXN0KXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IGRhdGFzLmRhdGFTY29wZS5saXN0W2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImF2YXRhci1saXN0XCIsXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5hdmF0YXI8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PC90Ym9keT48L3RhYmxlPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZGF0YXMucm9vdERPTS5nZXRFbGVtZW50QnlJZChcIm15VGFibGVcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggaW4gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKSl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBkYXRhcy5vbGRET01Db250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdteS1waG90bycpW2luZGV4XTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGVsdCA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBlbHQub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwibXktcGhvdG9cIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgY2xhc3M6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiY2xhc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3JjOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcInNyY1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiPnt7aW5uZXJIVE1MfX08L3NwYW4+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImF1cm9yZVwiPjwvaGVsbG8td29ybGQ+JztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0MicpLmlubmVySFRNTCA9JzxoZWxsby13b3JsZCBuYW1lPVwiZW5yaWNvXCI+PC9oZWxsby13b3JsZD4nO1xyXG5cclxub2RhLkludGVyZmFjZXMuZ2V0SlNPTignaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuKTsiXX0=
