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
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Oda = require("./Oda");

var _OdaGames = require("./OdaGames/OdaGames");

var _OdaGamesFindMe = require("./OdaGames/OdaGamesFindMe");

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

},{"./Oda":1,"./OdaGames/OdaGames":2,"./OdaGames/OdaGamesFindMe":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lcy5qc3giLCJzcmNcXE9kYUdhbWVzXFxPZGFHYW1lc0ZpbmRNZS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQUE7OztJQUdhLEcsV0FBQSxHO0FBQ1QsbUJBQWU7QUFBQTs7QUFDWDtBQUNBLGFBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLLE9BQUwsR0FBZSxlQUFmOztBQUVBO0FBQ0EsZUFBTyxHQUFQLEdBQWEsRUFBYjtBQUNBLGVBQU8sR0FBUCxDQUFXLE9BQVgsR0FBcUIsS0FBSyxPQUExQjtBQUNIOztBQUVEOzs7Ozs7O3FDQUdjO0FBQ1Ysb0JBQVEsR0FBUixzQ0FBK0MsS0FBSyxPQUFwRDtBQUNIOztBQUVEOzs7Ozs7bUNBR21CO0FBQ2YsZ0JBQUksa0JBQUo7O0FBRGUsOENBQU4sSUFBTTtBQUFOLG9CQUFNO0FBQUE7O0FBRWYsaUJBQUssT0FBTCxDQUFhLGVBQU87QUFDaEIsNkJBQVcsR0FBWDtBQUNILGFBRkQ7QUFHQSxrQkFBTSxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsSUFBSSxNQUFKLEdBQVcsQ0FBekIsQ0FBTjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OzttQ0FTWSxNLEVBQVE7QUFDaEIsZ0JBQUksT0FBTyxJQUFYOztBQUVBLGdCQUFJLFVBQVUsRUFBZDs7QUFFQSxnQkFBTSxrQkFBa0I7QUFDcEIsMEJBQVUsSUFEVTtBQUVwQiw0QkFBWSxJQUZRO0FBR3BCLDhCQUFjO0FBSE0sYUFBeEI7O0FBTUEsaUJBQUksSUFBSSxHQUFSLElBQWUsT0FBTyxLQUF0QixFQUE0QjtBQUN4QixvQkFBSSxNQUFNLE9BQU8sS0FBUCxDQUFhLEdBQWIsQ0FBVjtBQUNBLG9CQUFJLE9BQU8sT0FBTyxN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Z2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPZGEge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIC8vUHJpdmF0ZSBwYXJ0XHJcbiAgICAgICAgdGhpcy5wb2x5cyA9IHt9O1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC4xLjE2MTEyNS4wMVwiO1xyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYSA9IHt9O1xyXG4gICAgICAgIHdpbmRvdy5PZGEudmVyc2lvbiA9IHRoaXMudmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBnZXRWZXJzaW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT2RhIEZyYW1lV29yayBjdXJyZW50IHZlcnNpb24gOiAke3RoaXMudmVyc2lvbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHdob3NcclxuICAgICAqL1xyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgO1xyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wYXJhbVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jc3NcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuaHRtbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5pbml0XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXJhbXMuY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUG9seSAocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0QXR0cmlidXQgPSB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMucGFyYW0pe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gcGFyYW1zLnBhcmFtW2tleV07XHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gT2JqZWN0LmFzc2lnbihlbHQsIGRlZmF1bHRBdHRyaWJ1dCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zLmNyZWF0ZWRDYWxsYmFjayA9IHtcclxuICAgICAgICAgICAgdmFsdWUgKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJjaFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9ICB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBzY29wZVsnaW5uZXJIVE1MJ10gPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCByb290ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLmh0bWw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhhdC5yZXBsYWNlQWxsKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3tpbm5lckhUTUx9fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnk6IHNjb3BlWydpbm5lckhUTUwnXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gdmFyaWFibGUucmVwbGFjZSgvJy9nLCAnXCInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGpzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaCAoZXgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHZhcmlhYmxlID09IG51bGwpICYmICh0aGlzW2tleV0gIT0gdmFyaWFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZVtrZXldID0gdmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3ske2tleX19fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5OiB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICByb290RE9NOiByb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTY29wZTogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkRE9NQ29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb2x5OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2soZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhhdC5wb2x5c1twYXJhbXMubmFtZV0gPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQocGFyYW1zLm5hbWUsIHtcclxuICAgICAgICAgICAgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb3B0aW9ucylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc3RyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmZpbmRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYnlcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlnbm9yZUNhc2UgYnkgZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgcmVwbGFjZUFsbCAocGFyYW1zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocGFyYW1zLmZpbmQgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXMuc3RyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0ID0gXCJnXCI7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlQ2FzZScpICYmIHBhcmFtcy5pZ25vcmVDYXNlKXtcclxuICAgICAgICAgICAgICAgIG9wdCA9ICdnaSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJGaW5kID0gcGFyYW1zLmZpbmQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2dpLCBcIlxcXFwkMVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoc3RyRmluZCwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJSZXR1cm4gPSBwYXJhbXMuc3RyLnJlcGxhY2UocmUsIHBhcmFtcy5ieSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyUmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBvZGEgPSBuZXcgT2RhKCk7IiwiZXhwb3J0IGNsYXNzIE9kYUdhbWVzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1ByaXZhdGUgcGFydFxyXG5cclxuICAgICAgICAvL1B1YmxpYyBwYXJ0XHJcbiAgICAgICAgd2luZG93Lk9kYS5HYW1lcyA9IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgb2RhR2FtZXMgPSBuZXcgT2RhR2FtZXMoKTsiLCJleHBvcnQgY2xhc3MgT2RhR2FtZXNGaW5kTWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vUHJpdmF0ZSBwYXJ0XHJcbiAgICAgICAgdGhpcy5nb2FsID0gdGhpcy5zZXRHb2FsKCk7XHJcbiAgICAgICAgdGhpcy5uYlRyeSA9IDA7XHJcbiAgICAgICAgdGhpcy5uYlRyeU1heCA9IDM7XHJcblxyXG4gICAgICAgIC8vUHVibGljIHBhcnRcclxuICAgICAgICB3aW5kb3cuT2RhLkdhbWVzLkZpbmRNZSA9IHt9O1xyXG4gICAgICAgIHdpbmRvdy5PZGEuR2FtZXMuRmluZE1lLnByb3Bvc2UgPSB0aGlzLnByb3Bvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcG9zZSAoY2hvaWNlKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGNob2ljZUludCA9IHBhcnNlSW50KGNob2ljZSk7XHJcbiAgICAgICAgICAgIGlmKE51bWJlci5pc05hTihjaG9pY2VJbnQpKXtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGAnJHtjaG9pY2V9JyBpcyBub3QgYW4gaW50ZWdlci5gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLm5iVHJ5Kys7XHJcbiAgICAgICAgICAgICAgICBpZihvZGFHYW1lc0ZpbmRNZS5uYlRyeSA8IG9kYUdhbWVzRmluZE1lLm5iVHJ5TWF4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaG9pY2UgPT09IG9kYUdhbWVzRmluZE1lLmdvYWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBgWW91IHdpbiAhISAoaW4gJHtvZGFHYW1lc0ZpbmRNZS5uYlRyeSsxfSB0cnkpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2RhR2FtZXNGaW5kTWUubmJUcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZGFHYW1lc0ZpbmRNZS5zZXRHb2FsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoY2hvaWNlID4gb2RhR2FtZXNGaW5kTWUuZ29hbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGBUbyBiaWcgLCkgKCR7b2RhR2FtZXNGaW5kTWUubmJUcnlNYXggLSBvZGFHYW1lc0ZpbmRNZS5uYlRyeX0gdHJ5IGxlZnQpYDtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGBUbyBzbWFsbCA6byAoJHtvZGFHYW1lc0ZpbmRNZS5uYlRyeU1heCAtIG9kYUdhbWVzRmluZE1lLm5iVHJ5fSB0cnkgbGVmdClgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IGBGYWlsIG5vIG1vcmUgdHJpZXMgISEgKFRoZSBnb2FsIHdhcyAke29kYUdhbWVzRmluZE1lLmdvYWx9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgb2RhR2FtZXNGaW5kTWUubmJUcnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG9kYUdhbWVzRmluZE1lLnNldEdvYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChleCl7XHJcbiAgICAgICAgICAgIHN0ciA9IGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdvYWwgKCkge1xyXG4gICAgICAgIGxldCBnb2FsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBnb2FsO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgb2RhR2FtZXNGaW5kTWUgPSBuZXcgT2RhR2FtZXNGaW5kTWUoKTsiLCJpbXBvcnQgeyBvZGEgfSBmcm9tICcuL09kYSc7XHJcbmltcG9ydCB7IE9kYUdhbWVzIH0gZnJvbSBcIi4vT2RhR2FtZXMvT2RhR2FtZXNcIjtcclxuaW1wb3J0IHsgT2RhR2FtZXNGaW5kTWUgfSBmcm9tIFwiLi9PZGFHYW1lcy9PZGFHYW1lc0ZpbmRNZVwiO1xyXG5cclxub2RhLmdldFZlcnNpb24oKTtcclxub2RhLnNheUhlbGxvKFwiRmFicmljZVwiLCBcIkF1cm9yZVwiLCBcIklsbGlkYW5cIik7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+LmNvbG9yZWQge2NvbG9yOiBncmVlbjt9PC9zdHlsZT48aDE+SGVsbG8gPHNwYW4gY2xhc3M9XCJjb2xvcmVkXCI+e3tuYW1lfX08L3NwYW4+ITwvaDE+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBkYXRhcy5yb290RE9NLnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JlZFwiKS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhcy5kYXRhU2NvcGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwib2RhLXRhYmxlXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+Y29sMTwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48L3Rib2R5PjwvdGFibGU+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkYXRhcy5yb290RE9NLmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpbmRleCBpbiBkYXRhcy5kYXRhU2NvcGUubGlzdCl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBkYXRhcy5kYXRhU2NvcGUubGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IGVsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJhdmF0YXItbGlzdFwiLFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+YXZhdGFyPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLm9sZERPTUNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ215LXBob3RvJykpe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbHQgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0Lm91dGVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcIm15LXBob3RvXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGNsYXNzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImNsYXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNyYzoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJzcmNcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj57e2lubmVySFRNTH19PC9zcGFuPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0JykuaW5uZXJIVE1MID0nPGhlbGxvLXdvcmxkIG5hbWU9XCJhdXJvcmVcIj48L2hlbGxvLXdvcmxkPic7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdDInKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImVucmljb1wiPjwvaGVsbG8td29ybGQ+JzsiXX0=
