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
//http://blog.soat.fr/2015/02/html-5-introduction-aux-web-components/

var Oda = exports.Oda = function () {
    function Oda() {
        _classCallCheck(this, Oda);

        this.version = "0.1.150402.01";
        this.polys = {};
    }

    _createClass(Oda, [{
        key: "getVersion",
        value: function getVersion() {
            console.log("Oda FrameWork current version : " + this.version);
        }
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
         * name
         * param
         * css
         * html
         * init
         * callback
         * @param params
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
                    var root = this.createShadowRoot();
                    var content = document.createElement("div");
                    var target = params.html;
                    var scope = {};

                    for (var _key2 in params.param) {
                        var variable = this.getAttribute(_key2);

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

                    content.innerHTML = target;

                    root.appendChild(content);

                    params.callback(root, scope);
                }
            };

            this.polys[params.name] = document.registerElement(params.name, {
                prototype: Object.create(HTMLElement.prototype, options)
            });
        }

        /**
         * @param p_params
         * @param p_params.str
         * @param p_params.find
         * @param p_params.by
         * @param p_params.ignoreCase by default false
         * @returns {String}
         */

    }, {
        key: "replaceAll",
        value: function replaceAll(p_params) {
            try {
                if (p_params.find === '') {
                    return p_params.str;
                }

                var opt = "g";
                if (p_params.hasOwnProperty('ignoreCase') && p_params.ignoreCase) {
                    opt = 'gi';
                }

                var strFind = p_params.find.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");

                var re = new RegExp(strFind, opt);

                var strReturn = p_params.str.replace(re, p_params.by);

                return strReturn;
            } catch (er) {
                return null;
            }
        }
    }]);

    return Oda;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _Oda = require("./Oda");

var oda = new _Oda.Oda();
oda.getVersion();
oda.sayHello("Fabrice", "Aurore", "Illidan");

oda.createPoly({
    name: "hello-world",
    param: {
        name: {
            value: "default"
        }
    },
    html: "<style>.colored {color: green;}</style><h1>Hello <span class=\"colored\">{{name}}</span>!</h1>",
    callback: function callback(root, scope) {
        root.querySelector(".colored").onclick = function (e) {
            console.log(scope.name);
        };
    }
});

oda.createPoly({
    name: "oda-table",
    html: "<style>table, th, td {border: 1px solid black;}</style><table id=\"myTable\"><thead><tr><th>col1</th></tr></thead><tbody></tbody></table>",
    callback: function callback(root, scope) {
        var table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

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

document.querySelector('#test').innerHTML = '<hello-world name="aurore"></hello-world>';

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYSxHQUFHLFdBQUgsR0FBRztBQUNaLGFBRFMsR0FBRyxHQUNHOzhCQUROLEdBQUc7O0FBRVIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLEdBQUc7O3FDQU1FO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLHNDQUFvQyxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7U0FDbEU7OzttQ0FFa0I7QUFDZixnQkFBSSxHQUFHLGVBQWUsQ0FBQzs7OENBRGQsSUFBSTtBQUFKLG9CQUFJOzs7QUFFYixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNoQixtQkFBRyxVQUFRLEdBQUcsTUFBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztBQUNILGVBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOzs7Ozs7Ozs7Ozs7OzttQ0FXVyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsZ0JBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsZ0JBQU0sZUFBZSxHQUFHO0FBQ3BCLHdCQUFRLEVBQUUsSUFBSTtBQUNkLDBCQUFVLEVBQUUsSUFBSTtBQUNoQiw0QkFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQzs7QUFFRixpQkFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO0FBQ3hCLG9CQUFJLEdB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ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBIYXBweWtpbGxlciBvbiAwMi8wNC8yMDE2LlxyXG4gKi9cclxuLy9odHRwOi8vYmxvZy5zb2F0LmZyLzIwMTUvMDIvaHRtbC01LWludHJvZHVjdGlvbi1hdXgtd2ViLWNvbXBvbmVudHMvXHJcbmV4cG9ydCBjbGFzcyBPZGEge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC4xLjE1MDQwMi4wMVwiO1xyXG4gICAgICAgIHRoaXMucG9seXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZXJzaW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT2RhIEZyYW1lV29yayBjdXJyZW50IHZlcnNpb24gOiAke3RoaXMudmVyc2lvbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlIZWxsbyAoLi4ud2hvcykge1xyXG4gICAgICAgIGxldCBzdHIgPSBgQm9uam91ciA6IGA7XHJcbiAgICAgICAgd2hvcy5mb3JFYWNoKHdobyA9PiB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgICR7d2hvfSxgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aC0xKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbmFtZVxyXG4gICAgICogcGFyYW1cclxuICAgICAqIGNzc1xyXG4gICAgICogaHRtbFxyXG4gICAgICogaW5pdFxyXG4gICAgICogY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUG9seSAocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0QXR0cmlidXQgPSB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMucGFyYW0pe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gcGFyYW1zLnBhcmFtW2tleV07XHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gT2JqZWN0LmFzc2lnbihlbHQsIGRlZmF1bHRBdHRyaWJ1dCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zLmNyZWF0ZWRDYWxsYmFjayA9IHtcclxuICAgICAgICAgICAgdmFsdWUgKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb3QgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBwYXJhbXMuaHRtbDtcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9ICB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMucGFyYW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh2YXJpYWJsZSA9PSBudWxsKSAmJiAodGhpc1trZXldICE9IHZhcmlhYmxlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdGhpc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IHZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGF0LnJlcGxhY2VBbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7JHtrZXl9fX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieTogdmFyaWFibGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhyb290LCBzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnBvbHlzW3BhcmFtcy5uYW1lXSA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChwYXJhbXMubmFtZSwge1xyXG4gICAgICAgICAgICBwcm90b3R5cGU6IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBvcHRpb25zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuc3RyXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuZmluZFxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmJ5XHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuaWdub3JlQ2FzZSBieSBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICByZXBsYWNlQWxsIChwX3BhcmFtcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHBfcGFyYW1zLmZpbmQgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwX3BhcmFtcy5zdHI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBcImdcIjtcclxuICAgICAgICAgICAgaWYocF9wYXJhbXMuaGFzT3duUHJvcGVydHkoJ2lnbm9yZUNhc2UnKSAmJiBwX3BhcmFtcy5pZ25vcmVDYXNlKXtcclxuICAgICAgICAgICAgICAgIG9wdCA9ICdnaSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJGaW5kID0gcF9wYXJhbXMuZmluZC5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZ2ksIFwiXFxcXCQxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChzdHJGaW5kLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0clJldHVybiA9IHBfcGFyYW1zLnN0ci5yZXBsYWNlKHJlLCBwX3BhcmFtcy5ieSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyUmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7T2RhfSBmcm9tICcuL09kYSc7XHJcbnZhciBvZGEgPSBuZXcgT2RhKCk7XHJcbm9kYS5nZXRWZXJzaW9uKCk7XHJcbm9kYS5zYXlIZWxsbyhcIkZhYnJpY2VcIiwgXCJBdXJvcmVcIiwgXCJJbGxpZGFuXCIpO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJoZWxsby13b3JsZFwiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHN0eWxlPi5jb2xvcmVkIHtjb2xvcjogZ3JlZW47fTwvc3R5bGU+PGgxPkhlbGxvIDxzcGFuIGNsYXNzPVwiY29sb3JlZFwiPnt7bmFtZX19PC9zcGFuPiE8L2gxPmAsXHJcbiAgICBjYWxsYmFjazogKHJvb3QsIHNjb3BlKSA9PiB7XHJcbiAgICAgICAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yZWRcIikub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwib2RhLXRhYmxlXCIsXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5jb2wxPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChyb290LCBzY29wZSkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgPHRyPiBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIDFzdCBwb3NpdGlvbiBvZiB0aGUgdGFibGU6XHJcbiAgICAgICAgdmFyIHJvdyA9IHRhYmxlLmluc2VydFJvdygwKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBjZWxscyAoPHRkPiBlbGVtZW50cykgYXQgdGhlIDFzdCBhbmQgMm5kIHBvc2l0aW9uIG9mIHRoZSBcIm5ld1wiIDx0cj4gZWxlbWVudDpcclxuICAgICAgICB2YXIgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcclxuICAgICAgICB2YXIgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHNvbWUgdGV4dCB0byB0aGUgbmV3IGNlbGxzOlxyXG4gICAgICAgIGNlbGwxLmlubmVySFRNTCA9IFwiTkVXIENFTEwxXCI7XHJcbiAgICAgICAgY2VsbDIuaW5uZXJIVE1MID0gXCJORVcgQ0VMTDJcIjtcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdCcpLmlubmVySFRNTCA9JzxoZWxsby13b3JsZCBuYW1lPVwiYXVyb3JlXCI+PC9oZWxsby13b3JsZD4nOyJdfQ==
