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

                    params.callback(root, scope, content, this);
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
    callback: function callback(root, scope) {
        root.querySelector(".colored").onclick = function (e) {
            console.log(scope.name);
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
    callback: function callback(root, scope) {
        var table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

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

document.querySelector('#test').innerHTML = '<hello-world name="aurore"></hello-world>';

oda.createPoly({
    name: "avatar-list",
    html: "<style>table, th, td {border: 1px solid black;}</style><table id=\"myTable\"><thead><tr><th>avatar</th></tr></thead><tbody></tbody></table>",
    callback: function callback(root, scope, content, that) {
        var table = root.getElementById("myTable").getElementsByTagName('tbody')[0];

        for (var index in content.getElementsByTagName('my-photo')) {
            var elt = content.getElementsByTagName('my-photo')[index];
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
    callback: function callback(root, scope, content, that) {}
});

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYTtBQUNULGFBRFMsR0FDVCxHQUFlOzhCQUROLEtBQ007O0FBQ1gsYUFBSyxPQUFMLEdBQWUsZUFBZixDQURXO0FBRVgsYUFBSyxLQUFMLEdBQWEsRUFBYixDQUZXO0tBQWY7O2lCQURTOztxQ0FNSztBQUNWLG9CQUFRLEdBQVIsc0NBQStDLEtBQUssT0FBTCxDQUEvQyxDQURVOzs7O21DQUlLO0FBQ2YsZ0JBQUksa0JBQUosQ0FEZTs7OENBQU47O2FBQU07O0FBRWYsaUJBQUssT0FBTCxDQUFhLGVBQU87QUFDaEIsNkJBQVcsU0FBWCxDQURnQjthQUFQLENBQWIsQ0FGZTtBQUtmLGtCQUFNLElBQUksTUFBSixDQUFXLENBQVgsRUFBYyxJQUFJLE1BQUosR0FBVyxDQUFYLENBQXBCLENBTGU7QUFNZixvQkFBUSxHQUFSLENBQVksR0FBWixFQU5lOzs7Ozs7Ozs7Ozs7Ozs7bUNBa0JQLFFBQVE7QUFDaEIsZ0JBQUksT0FBTyxJQUFQLENBRFk7O0FBR2hCLGdCQUFJLFVBQVUsRUFBVixDQUhZOztBQUtoQixnQkFBTSxrQkFBa0I7QUFDcEIsMEJBQVUsSUFBVjtBQUNBLDRCQUFZLElBQVo7QUFDQSw4QkFBYyxJQUFkO2FBSEUsQ0FMVTs7QUFXaEIsaUJBQUksSUFBSSxHQUFKLElBQVcsT0FBTyxLQUFQLEVBQWE7QUFDeEIsb0JBQUksTUFBTSxPQUFPLEtBQVAsQ0FBYSxHQUFiLENBQU4sQ0FEb0I7QUFFeEIsb0JBQUksT0FBTyxPQUFPLE1BQVAsQ0FBYyxHQUFkLEVBQW1CLGVBQW5CLENBQVAsQ0FGb0I7QUFHeEIsd0JBQVEsR0FBUixJQUFlLElBQWYsQ0FId0I7YUFBNUI7O0FBTUEsb0JBQVEsZUFBUixHQUEw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S0FBekMsQ0FBTixDQURrRDtBQUV0RCxnQkFBRyxRQUFPLGlEQUFQLEtBQWUsUUFBZixFQUF3QjtBQUN2QixvQkFBSSxNQUFNLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFOLENBRG1CO0FBRXZCLG9CQUFJLE9BQU8sSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFQLENBRm1CO0FBR3ZCLHFCQUFLLFNBQUwsR0FBaUIsSUFBSSxTQUFKLENBSE07YUFBM0I7U0FGSjtLQUhNO0NBSGQ7O0FBaUJBLElBQUksVUFBSixDQUFlO0FBQ1gsVUFBTSxVQUFOO0FBQ0EsV0FBTztBQUNILGVBQU87QUFDSCxtQkFBTyxPQUFQO1NBREo7QUFHQSxhQUFLO0FBQ0QsbUJBQU8sS0FBUDtTQURKO0tBSko7QUFRQSxtRUFWVztBQVdYLGNBQVUsa0JBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxPQUFkLEVBQXVCLElBQXZCLEVBQWdDLEVBQWhDO0NBWGQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbi8vaHR0cDovL2Jsb2cuc29hdC5mci8yMDE1LzAyL2h0bWwtNS1pbnRyb2R1Y3Rpb24tYXV4LXdlYi1jb21wb25lbnRzL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgICAgICB0aGlzLnBvbHlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgO1xyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG5hbWVcclxuICAgICAqIHBhcmFtXHJcbiAgICAgKiBjc3NcclxuICAgICAqIGh0bWxcclxuICAgICAqIGluaXRcclxuICAgICAqIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJpYnV0ID0ge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IHBhcmFtcy5wYXJhbVtrZXldO1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IE9iamVjdC5hc3NpZ24oZWx0LCBkZWZhdWx0QXR0cmlidXQpO1xyXG4gICAgICAgICAgICBvcHRpb25zW2tleV0gPSBjb3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVkQ2FsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFyY2hcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAge307XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgc2NvcGVbJ2lubmVySFRNTCddID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5odG1sO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluZDogYHt7aW5uZXJIVE1MfX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5OiBzY29wZVsnaW5uZXJIVE1MJ11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtcy5wYXJhbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHZhcmlhYmxlID09IG51bGwpICYmICh0aGlzW2tleV0gIT0gdmFyaWFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZVtrZXldID0gdmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoYXQucmVwbGFjZUFsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kOiBge3ske2tleX19fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5OiB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhyb290LCBzY29wZSwgY29udGVudCwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnBvbHlzW3BhcmFtcy5uYW1lXSA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChwYXJhbXMubmFtZSwge1xyXG4gICAgICAgICAgICBwcm90b3R5cGU6IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBvcHRpb25zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuc3RyXHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuZmluZFxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmJ5XHJcbiAgICAgKiBAcGFyYW0gcF9wYXJhbXMuaWdub3JlQ2FzZSBieSBkZWZhdWx0IGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICByZXBsYWNlQWxsIChwX3BhcmFtcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHBfcGFyYW1zLmZpbmQgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwX3BhcmFtcy5zdHI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBcImdcIjtcclxuICAgICAgICAgICAgaWYocF9wYXJhbXMuaGFzT3duUHJvcGVydHkoJ2lnbm9yZUNhc2UnKSAmJiBwX3BhcmFtcy5pZ25vcmVDYXNlKXtcclxuICAgICAgICAgICAgICAgIG9wdCA9ICdnaSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJGaW5kID0gcF9wYXJhbXMuZmluZC5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZ2ksIFwiXFxcXCQxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChzdHJGaW5kLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0clJldHVybiA9IHBfcGFyYW1zLnN0ci5yZXBsYWNlKHJlLCBwX3BhcmFtcy5ieSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyUmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7T2RhfSBmcm9tICcuL09kYSc7XHJcbnZhciBvZGEgPSBuZXcgT2RhKCk7XHJcbm9kYS5nZXRWZXJzaW9uKCk7XHJcbm9kYS5zYXlIZWxsbyhcIkZhYnJpY2VcIiwgXCJBdXJvcmVcIiwgXCJJbGxpZGFuXCIpO1xyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJoZWxsby13b3JsZFwiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHN0eWxlPi5jb2xvcmVkIHtjb2xvcjogZ3JlZW47fTwvc3R5bGU+PGgxPkhlbGxvIDxzcGFuIGNsYXNzPVwiY29sb3JlZFwiPnt7bmFtZX19PC9zcGFuPiE8L2gxPmAsXHJcbiAgICBjYWxsYmFjazogKHJvb3QsIHNjb3BlKSA9PiB7XHJcbiAgICAgICAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yZWRcIikub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwib2RhLXRhYmxlXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+Y29sMTwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48L3Rib2R5PjwvdGFibGU+YCxcclxuICAgIGNhbGxiYWNrOiAocm9vdCwgc2NvcGUpID0+IHtcclxuICAgICAgICBsZXQgdGFibGUgPSByb290LmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IDx0cj4gZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSAxc3QgcG9zaXRpb24gb2YgdGhlIHRhYmxlOlxyXG4gICAgICAgIHZhciByb3cgPSB0YWJsZS5pbnNlcnRSb3coMCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBuZXcgY2VsbHMgKDx0ZD4gZWxlbWVudHMpIGF0IHRoZSAxc3QgYW5kIDJuZCBwb3NpdGlvbiBvZiB0aGUgXCJuZXdcIiA8dHI+IGVsZW1lbnQ6XHJcbiAgICAgICAgdmFyIGNlbGwxID0gcm93Lmluc2VydENlbGwoMCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSA8dHI+IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgMXN0IHBvc2l0aW9uIG9mIHRoZSB0YWJsZTpcclxuICAgICAgICB2YXIgcm93ID0gdGFibGUuaW5zZXJ0Um93KDEpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgbmV3IGNlbGxzICg8dGQ+IGVsZW1lbnRzKSBhdCB0aGUgMXN0IGFuZCAybmQgcG9zaXRpb24gb2YgdGhlIFwibmV3XCIgPHRyPiBlbGVtZW50OlxyXG4gICAgICAgIHZhciBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG5cclxuICAgICAgICAvLyBBZGQgc29tZSB0ZXh0IHRvIHRoZSBuZXcgY2VsbHM6XHJcbiAgICAgICAgY2VsbDEuaW5uZXJIVE1MID0gXCJORVcgQ0VMTDFcIjtcclxuICAgICAgICBjZWxsMi5pbm5lckhUTUwgPSBcIk5FVyBDRUxMMlwiO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0JykuaW5uZXJIVE1MID0nPGhlbGxvLXdvcmxkIG5hbWU9XCJhdXJvcmVcIj48L2hlbGxvLXdvcmxkPic7XHJcblxyXG5cclxub2RhLmNyZWF0ZVBvbHkoe1xyXG4gICAgbmFtZTogXCJhdmF0YXItbGlzdFwiLFxyXG4gICAgaHRtbDogYDxzdHlsZT50YWJsZSwgdGgsIHRkIHtib3JkZXI6IDFweCBzb2xpZCBibGFjazt9PC9zdHlsZT48dGFibGUgaWQ9XCJteVRhYmxlXCI+PHRoZWFkPjx0cj48dGg+YXZhdGFyPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5PjwvdGJvZHk+PC90YWJsZT5gLFxyXG4gICAgY2FsbGJhY2s6IChyb290LCBzY29wZSwgY29udGVudCwgdGhhdCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGluZGV4IGluIGNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ215LXBob3RvJykpe1xyXG4gICAgICAgICAgICBsZXQgZWx0ID0gY29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbXktcGhvdG8nKVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbHQgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZWx0Lm91dGVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcIm15LXBob3RvXCIsXHJcbiAgICBwYXJhbToge1xyXG4gICAgICAgIGNsYXNzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcImNsYXNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNyYzoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJzcmNcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodG1sOiBgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj57e2lubmVySFRNTH19PC9zcGFuPmAsXHJcbiAgICBjYWxsYmFjazogKHJvb3QsIHNjb3BlLCBjb250ZW50LCB0aGF0KSA9PiB7XHJcblxyXG4gICAgfVxyXG59KTsiXX0=
