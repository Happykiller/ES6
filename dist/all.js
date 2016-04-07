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

document.querySelector('#test2').innerHTML = '<hello-world name="enrico"></hello-world>';

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYSxHQUFHLFdBQUgsR0FBRztBQUNaLGFBRFMsR0FBRyxHQUNHOzhCQUROLEdBQUc7O0FBRVIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLEdBQUc7O3FDQU1FO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLHNDQUFvQyxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7U0FDbEU7OzttQ0FFa0I7QUFDZixnQkFBSSxHQUFHLGVBQWUsQ0FBQzs7OENBRGQsSUFBSTtBQUFKLG9CQUFJOzs7QUFFYixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNoQixtQkFBRyxVQUFRLEdBQUcsTUFBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztBQUNILGVBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOzs7Ozs7Ozs7Ozs7OzttQ0FXVyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsZ0JBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsZ0JBQU0sZUFBZSxHQUFHO0FBQ3BCLHdCQUFRLEVBQUUsSUFBSTtBQUNkLDBCQUFVLEVBQUUsSUFBSTtBQUNoQiw0QkFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQzs7QUFFRixpQkFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO0FBQ3hCLG9CQUFJLEdB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QyxFQUFDO0FBQ2xFLGdCQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RFLGdCQUFHLFFBQU8sR0FBRyx5Q0FBSCxHQUFHLE9BQUssUUFBUSxFQUFDO0FBQ3ZCLG9CQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLG9CQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLG9CQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7YUFDbEM7U0FDSjtLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVILEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDWCxRQUFJLEVBQUUsVUFBVTtBQUNoQixTQUFLLEVBQUU7QUFDSCxhQUFLLEVBQUU7QUFDSCxpQkFBSyxFQUFFLE9BQU87U0FDakI7QUFDRCxXQUFHLEVBQUU7QUFDRCxpQkFBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0FBQ0QsUUFBSSwyREFBeUQ7QUFDN0QsWUFBUSxFQUFFLGtCQUFDLEtBQUssRUFBSyxFQUVwQjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRSwyQ0FBMkMsQ0FBQzs7QUFFdkYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUUsMkNBQTJDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbi8vaHR0cDovL2Jsb2cuc29hdC5mci8yMDE1LzAyL2h0bWwtNS1pbnRyb2R1Y3Rpb24tYXV4LXdlYi1jb21wb25lbnRzL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgICAgICB0aGlzLnBvbHlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgO1xyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG5hbWVcclxuICAgICAqIHBhcmFtXHJcbiAgICAgKiBjc3NcclxuICAgICAqIGh0bWxcclxuICAgICAqIGluaXRcclxuICAgICAqIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJpYnV0ID0ge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IHBhcmFtcy5wYXJhbVtrZXldO1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IE9iamVjdC5hc3NpZ24oZWx0LCBkZWZhdWx0QXR0cmlidXQpO1xyXG4gICAgICAgICAgICBvcHRpb25zW2tleV0gPSBjb3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVkQ2FsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFyY2hcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAge307XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVbJ2lubmVySFRNTCddID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5odG1sO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7aW5uZXJIVE1MfX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5OiBzY29wZVsnaW5uZXJIVE1MJ11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtcy5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IHZhcmlhYmxlLnJlcGxhY2UoLycvZywgJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2ggKGV4KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh2YXJpYWJsZSA9PSBudWxsKSAmJiAodGhpc1trZXldICE9IHZhcmlhYmxlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdGhpc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IHZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGF0LnJlcGxhY2VBbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHI6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7JHtrZXl9fX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieTogdmFyaWFibGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByb290LmlubmVySFRNTCA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdERPTTogcm9vdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU2NvcGU6IHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZERPTUNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9seTogdGhpc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKGRhdGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucG9seXNbcGFyYW1zLm5hbWVdID0gZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KHBhcmFtcy5uYW1lLCB7XHJcbiAgICAgICAgICAgIHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUsIG9wdGlvbnMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXNcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtcy5zdHJcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtcy5maW5kXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuYnlcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtcy5pZ25vcmVDYXNlIGJ5IGRlZmF1bHQgZmFsc2VcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VBbGwgKHBfcGFyYW1zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocF9wYXJhbXMuZmluZCA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBfcGFyYW1zLnN0cjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IFwiZ1wiO1xyXG4gICAgICAgICAgICBpZihwX3BhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlQ2FzZScpICYmIHBfcGFyYW1zLmlnbm9yZUNhc2Upe1xyXG4gICAgICAgICAgICAgICAgb3B0ID0gJ2dpJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHN0ckZpbmQgPSBwX3BhcmFtcy5maW5kLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9naSwgXCJcXFxcJDFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHN0ckZpbmQsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyUmV0dXJuID0gcF9wYXJhbXMuc3RyLnJlcGxhY2UocmUsIHBfcGFyYW1zLmJ5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJSZXR1cm47XHJcbiAgICAgICAgfSBjYXRjaCAoZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPZGF9IGZyb20gJy4vT2RhJztcclxudmFyIG9kYSA9IG5ldyBPZGEoKTtcclxub2RhLmdldFZlcnNpb24oKTtcclxub2RhLnNheUhlbGxvKFwiRmFicmljZVwiLCBcIkF1cm9yZVwiLCBcIklsbGlkYW5cIik7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcImhlbGxvLXdvcmxkXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+LmNvbG9yZWQge2NvbG9yOiBncmVlbjt9PC9zdHlsZT48aDE+SGVsbG8gPHNwYW4gY2xhc3M9XCJjb2xvcmVkXCI+e3tuYW1lfX08L3NwYW4+ITwvaDE+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBkYXRhcy5yb290RE9NLnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JlZFwiKS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhcy5kYXRhU2NvcGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwib2RhLXRhYmxlXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+Y29sMTwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48L3Rib2R5PjwvdGFibGU+YCxcclxuICAgIGNhbGxiYWNrOiAoZGF0YXMpID0+IHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkYXRhcy5yb290RE9NLmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpbmRleCBpbiBkYXRhcy5kYXRhU2NvcGUubGlzdCl7XHJcbiAgICAgICAgICAgIGxldCBlbHQgPSBkYXRhcy5kYXRhU2NvcGUubGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IGVsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJhdmF0YXItbGlzdFwiLFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+YXZhdGFyPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRhdGFzLnJvb3RET00uZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGRhdGFzLm9sZERPTUNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ215LXBob3RvJykpe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gZGF0YXMub2xkRE9NQ29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbHQgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0Lm91dGVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcIm15LXBob3RvXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGNsYXNzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImNsYXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNyYzoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJzcmNcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj57e2lubmVySFRNTH19PC9zcGFuPmAsXHJcbiAgICBjYWxsYmFjazogKGRhdGFzKSA9PiB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0JykuaW5uZXJIVE1MID0nPGhlbGxvLXdvcmxkIG5hbWU9XCJhdXJvcmVcIj48L2hlbGxvLXdvcmxkPic7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdDInKS5pbm5lckhUTUwgPSc8aGVsbG8td29ybGQgbmFtZT1cImVucmljb1wiPjwvaGVsbG8td29ybGQ+JzsiXX0=
