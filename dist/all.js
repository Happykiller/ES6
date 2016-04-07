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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
    callback: function callback(datas) {
        datas.rootDOM.querySelector(".colored").onclick = function (e) {
            console.log(datas.dataScope.name);
        };
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

oda.createPoly({
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
    html: "<span style=\"font-weight: bold;\">{{innerHTML}}</span>",
    callback: function callback(datas) {}
});

document.querySelector('#test').innerHTML = '<hello-world name="aurore"></hello-world>';

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYSxHQUFHLFdBQUgsR0FBRztBQUNaLGFBRFMsR0FBRyxHQUNHOzhCQUROLEdBQUc7O0FBRVIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLEdBQUc7O3FDQU1FO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLHNDQUFvQyxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7U0FDbEU7OzttQ0FFa0I7QUFDZixnQkFBSSxHQUFHLGVBQWUsQ0FBQzs7OENBRGQsSUFBSTtBQUFKLG9CQUFJOzs7QUFFYixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNoQixtQkFBRyxVQUFRLEdBQUcsTUFBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztBQUNILGVBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOzs7Ozs7Ozs7Ozs7OzttQ0FXVyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsZ0JBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsZ0JBQU0sZUFBZSxHQUFHO0FBQ3BCLHdCQUFRLEVBQUUsSUFBSTtBQUNkLDBCQUFVLEVBQUUsSUFBSTtBQUNoQiw0QkFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQzs7QUFFRixpQkFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO0FBQ3hCLG9CQUFJLEdB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QyxFQUFDO0FBQ2xFLGdCQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RFLGdCQUFHLFFBQU8sR0FBRyx5Q0FBSCxHQUFHLE9BQUssUUFBUSxFQUFDO0FBQ3ZCLG9CQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLG9CQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLG9CQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7YUFDbEM7U0FDSjtLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDWCxRQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFLLEVBQUU7QUFDSCxhQUFLLEVBQUU7QUFDSCxpQkFBSyxFQUFFLE9BQU87U0FDakI7QUFDRCxXQUFHLEVBQUU7QUFDRCxpQkFBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0FBQ0QsUUFBSSwyREFBeUQ7QUFDN0QsWUFBUSxFQUFFLGtCQUFDLEtBQUssRUFBSyxFQUVwQjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRSwyQ0FBMkMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBIYXBweWtpbGxlciBvbiAwMi8wNC8yMDE2LlxyXG4gKi9cclxuLy9odHRwOi8vYmxvZy5zb2F0LmZyLzIwMTUvMDIvaHRtbC01LWludHJvZHVjdGlvbi1hdXgtd2ViLWNvbXBvbmVudHMvXHJcbmV4cG9ydCBjbGFzcyBPZGEge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFwiMC4xLjE1MDQwMi4wMVwiO1xyXG4gICAgICAgIHRoaXMucG9seXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZXJzaW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT2RhIEZyYW1lV29yayBjdXJyZW50IHZlcnNpb24gOiAke3RoaXMudmVyc2lvbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlIZWxsbyAoLi4ud2hvcykge1xyXG4gICAgICAgIGxldCBzdHIgPSBgQm9uam91ciA6IGA7XHJcbiAgICAgICAgd2hvcy5mb3JFYWNoKHdobyA9PiB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgICR7d2hvfSxgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aC0xKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbmFtZVxyXG4gICAgICogcGFyYW1cclxuICAgICAqIGNzc1xyXG4gICAgICogaHRtbFxyXG4gICAgICogaW5pdFxyXG4gICAgICogY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUG9seSAocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0QXR0cmlidXQgPSB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMucGFyYW0pe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gcGFyYW1zLnBhcmFtW2tleV07XHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gT2JqZWN0LmFzc2lnbihlbHQsIGRlZmF1bHRBdHRyaWJ1dCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zLmNyZWF0ZWRDYWxsYmFjayA9IHtcclxuICAgICAgICAgICAgdmFsdWUgKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJjaFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9ICB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBzY29wZVsnaW5uZXJIVE1MJ10gPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCByb290ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLmh0bWw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhhdC5yZXBsYWNlQWxsKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3tpbm5lckhUTUx9fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnk6IHNjb3BlWydpbm5lckhUTUwnXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gdmFyaWFibGUucmVwbGFjZSgvJy9nLCAnXCInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGpzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaCAoZXgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHZhcmlhYmxlID09IG51bGwpICYmICh0aGlzW2tleV0gIT0gdmFyaWFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZVtrZXldID0gdmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3ske2tleX19fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5OiB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICByb290RE9NOiByb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTY29wZTogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkRE9NQ29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb2x5OiB0aGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2soZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2x5c1twYXJhbXMubmFtZV0gPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQocGFyYW1zLm5hbWUsIHtcclxuICAgICAgICAgICAgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb3B0aW9ucylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtc1xyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLnN0clxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmZpbmRcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtcy5ieVxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmlnbm9yZUNhc2UgYnkgZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgcmVwbGFjZUFsbCAocF9wYXJhbXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihwX3BhcmFtcy5maW5kID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcF9wYXJhbXMuc3RyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0ID0gXCJnXCI7XHJcbiAgICAgICAgICAgIGlmKHBfcGFyYW1zLmhhc093blByb3BlcnR5KCdpZ25vcmVDYXNlJykgJiYgcF9wYXJhbXMuaWdub3JlQ2FzZSl7XHJcbiAgICAgICAgICAgICAgICBvcHQgPSAnZ2knO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyRmluZCA9IHBfcGFyYW1zLmZpbmQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2dpLCBcIlxcXFwkMVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoc3RyRmluZCwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJSZXR1cm4gPSBwX3BhcmFtcy5zdHIucmVwbGFjZShyZSwgcF9wYXJhbXMuYnkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0clJldHVybjtcclxuICAgICAgICB9IGNhdGNoIChlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09kYX0gZnJvbSAnLi9PZGEnO1xyXG52YXIgb2RhID0gbmV3IE9kYSgpO1xyXG5vZGEuZ2V0VmVyc2lvbigpO1xyXG5vZGEuc2F5SGVsbG8oXCJGYWJyaWNlXCIsIFwiQXVyb3JlXCIsIFwiSWxsaWRhblwiKTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwiaGVsbG8td29ybGRcIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT4uY29sb3JlZCB7Y29sb3I6IGdyZWVuO308L3N0eWxlPjxoMT5IZWxsbyA8c3BhbiBjbGFzcz1cImNvbG9yZWRcIj57e25hbWV9fTwvc3Bhbj4hPC9oMT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGRhdGFzLnJvb3RET00ucXVlcnlTZWxlY3RvcihcIi5jb2xvcmVkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLmRhdGFTY29wZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJvZGEtdGFibGVcIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5jb2wxPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLmRhdGFTY29wZS5saXN0KXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IGRhdGFzLmRhdGFTY29wZS5saXN0W2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoMCk7XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImF2YXRhci1saXN0XCIsXHJcbiAgICBodG1sOiBgPHN0eWxlPnRhYmxlLCB0aCwgdGQge2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO308L3N0eWxlPjx0YWJsZSBpZD1cIm15VGFibGVcIj48dGhlYWQ+PHRyPjx0aD5hdmF0YXI8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PC90Ym9keT48L3RhYmxlPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZGF0YXMucm9vdERPTS5nZXRFbGVtZW50QnlJZChcIm15VGFibGVcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggaW4gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKSl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBkYXRhcy5vbGRET01Db250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdteS1waG90bycpW2luZGV4XTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGVsdCA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBlbHQub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwibXktcGhvdG9cIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgY2xhc3M6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiY2xhc3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3JjOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcInNyY1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiPnt7aW5uZXJIVE1MfX08L3NwYW4+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImF1cm9yZVwiPjwvaGVsbG8td29ybGQ+JzsiXX0=
