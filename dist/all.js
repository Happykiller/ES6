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
        console.log(scope.list);
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

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYSxHQUFHLFdBQUgsR0FBRztBQUNaLGFBRFMsR0FBRyxHQUNHOzhCQUROLEdBQUc7O0FBRVIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLEdBQUc7O3FDQU1FO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLHNDQUFvQyxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7U0FDbEU7OzttQ0FFa0I7QUFDZixnQkFBSSxHQUFHLGVBQWUsQ0FBQzs7OENBRGQsSUFBSTtBQUFKLG9CQUFJOzs7QUFFYixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNoQixtQkFBRyxVQUFRLEdBQUcsTUFBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztBQUNILGVBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOzs7Ozs7Ozs7Ozs7OzttQ0FXVyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsZ0JBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsZ0JBQU0sZUFBZSxHQUFHO0FBQ3BCLHdCQUFRLEVBQUUsSUFBSTtBQUNkLDBCQUFVLEVBQUUsSUFBSTtBQUNoQiw0QkFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQzs7QUFFRixpQkFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO0FBQ3hCLG9CQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLG9CQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMvQyx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN2Qjs7QUFFRCxtQkFBTyxDQUFDLGVBQWUsR0FBRztBQUN0QixxQkFBSyxtQkFBSTtBQUNMLHdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNuQyx3QkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1Qyx3QkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN6Qix3QkFBSSxLQUFLLEdBQUksRUFBRSxDQUFDOztBQUVoQix5QkFBSSxJQUFJLEtBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO0FBQ3hCLDRCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUcsQ0FBQyxDQUFDOztBQUV0Qyw0QkFBRyxBQUFDLFFBQVEsSUFBSSxJQUFJLElBQU0sSUFBSSxDQUFDLEtBQUcsQ0FBQyxJQUFJLFFBQVEsQUFBQyxFQUFDO0FBQzdDLG9DQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUcsQ0FBQyxDQUFDO3lCQUN4Qjs7QUFFRCw2QkFBSyxDQUFDLEtBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQzs7QUFFdEIsOEJBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3JCLCtCQUFHLEVBQUUsTUFBTTtBQUNYLGdDQUFJLFNBQU8sS0FBRyxPQUFJO0FBQ2xCLDhCQUFFLEVBQUUsUUFBUTt5QkFDZixDQUFDLENBQUM7cUJBQ047O0FBRUQsMkJBQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDOztBQUUzQix3QkFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFMUIsMEJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNoQzthQUNKLENBQUM7O0FBRUYsZ0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUM1RCx5QkFBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7YUFDM0QsQ0FBQyxDQUFDO1NBQ047Ozs7Ozs7Ozs7Ozs7bUNBVVcsUUFBUSxFQUFFO0FBQ2xCLGdCQUFJO0FBQ0Esb0JBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUM7QUFDcEIsMkJBQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztpQkFDdkI7O0FBRUQsb0JBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNkLG9CQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBQztBQUM1RCx1QkFBRyxHQUFHLElBQUksQ0FBQztpQkFDZDs7QUFFRCxvQkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXZFLG9CQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7O0FBRWxDLG9CQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCx1QkFBTyxTQUFTLENBQUM7YUFDcEIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNULHVCQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7OztXQTlHUSxHQUFHOzs7Ozs7QUNKaEIsNEJBQTBCOztBQUMxQixJQUFJLEdBQUcsR0FBRyxjQUFTLENBQUM7QUFDcEIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQzs7QUFFN0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUNYLFFBQUksRUFBRSxhQUFhO0FBQ25CLFNBQUssRUFBRTtBQUNILFlBQUksRUFBRTtBQUNGLGlCQUFLLEVBQUUsU0FBUztTQUNuQjtLQUNKO0FBQ0QsUUFBSSxrR0FBZ0c7QUFDcEcsWUFBUSxFQUFFLGtCQUFDLElBQUksRUFBRSxLQUFLLEVBQUs7QUFDdkIsWUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxDQUFDLEVBQUU7QUFDakQsbUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCLENBQUE7S0FDSjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxHQUFHLENBQUMsVUFBVSxDQUFDO0FBQ1gsUUFBSSxFQUFFLFdBQVc7QUFDakIsU0FBSyxFQUFFO0FBQ0gsVUFBRSxFQUFFO0FBQ0EsaUJBQUssRUFBRSxTQUFTO1NBQ25CO0FBQ0QsWUFBSSxFQUFFO0FBQ0YsaUJBQUssRUFBRSxFQUFFO1NBQ1o7S0FDSjtBQUNELFFBQUksNklBQTJJO0FBQy9JLFlBQVEsRUFBRSxrQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFLO0FBQ3ZCLGVBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFBQyxBQUc1RSxZQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsQUFHN0IsWUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBRzlCLFlBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7QUFBQyxBQUc3QixZQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsQUFHOUIsYUFBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDOUIsYUFBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7S0FDakM7Q0FDSixDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUUsMkNBQTJDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbi8vaHR0cDovL2Jsb2cuc29hdC5mci8yMDE1LzAyL2h0bWwtNS1pbnRyb2R1Y3Rpb24tYXV4LXdlYi1jb21wb25lbnRzL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgICAgICB0aGlzLnBvbHlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgO1xyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG5hbWVcclxuICAgICAqIHBhcmFtXHJcbiAgICAgKiBjc3NcclxuICAgICAqIGh0bWxcclxuICAgICAqIGluaXRcclxuICAgICAqIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJpYnV0ID0ge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgbGV0IGVsdCA9IHBhcmFtcy5wYXJhbVtrZXldO1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IE9iamVjdC5hc3NpZ24oZWx0LCBkZWZhdWx0QXR0cmlidXQpO1xyXG4gICAgICAgICAgICBvcHRpb25zW2tleV0gPSBjb3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVkQ2FsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb290ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLmh0bWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAge307XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zLnBhcmFtKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGUgPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZigodmFyaWFibGUgPT0gbnVsbCkgJiYgKHRoaXNba2V5XSAhPSB2YXJpYWJsZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHRoaXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlW2tleV0gPSB2YXJpYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhhdC5yZXBsYWNlQWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmQ6IGB7eyR7a2V5fX19YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnk6IHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2socm9vdCwgc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2x5c1twYXJhbXMubmFtZV0gPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQocGFyYW1zLm5hbWUsIHtcclxuICAgICAgICAgICAgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb3B0aW9ucylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtc1xyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLnN0clxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmZpbmRcclxuICAgICAqIEBwYXJhbSBwX3BhcmFtcy5ieVxyXG4gICAgICogQHBhcmFtIHBfcGFyYW1zLmlnbm9yZUNhc2UgYnkgZGVmYXVsdCBmYWxzZVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgcmVwbGFjZUFsbCAocF9wYXJhbXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihwX3BhcmFtcy5maW5kID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcF9wYXJhbXMuc3RyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0ID0gXCJnXCI7XHJcbiAgICAgICAgICAgIGlmKHBfcGFyYW1zLmhhc093blByb3BlcnR5KCdpZ25vcmVDYXNlJykgJiYgcF9wYXJhbXMuaWdub3JlQ2FzZSl7XHJcbiAgICAgICAgICAgICAgICBvcHQgPSAnZ2knO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyRmluZCA9IHBfcGFyYW1zLmZpbmQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2dpLCBcIlxcXFwkMVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoc3RyRmluZCwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJSZXR1cm4gPSBwX3BhcmFtcy5zdHIucmVwbGFjZShyZSwgcF9wYXJhbXMuYnkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0clJldHVybjtcclxuICAgICAgICB9IGNhdGNoIChlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09kYX0gZnJvbSAnLi9PZGEnO1xyXG52YXIgb2RhID0gbmV3IE9kYSgpO1xyXG5vZGEuZ2V0VmVyc2lvbigpO1xyXG5vZGEuc2F5SGVsbG8oXCJGYWJyaWNlXCIsIFwiQXVyb3JlXCIsIFwiSWxsaWRhblwiKTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwiaGVsbG8td29ybGRcIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbDogYDxzdHlsZT4uY29sb3JlZCB7Y29sb3I6IGdyZWVuO308L3N0eWxlPjxoMT5IZWxsbyA8c3BhbiBjbGFzcz1cImNvbG9yZWRcIj57e25hbWV9fTwvc3Bhbj4hPC9oMT5gLFxyXG4gICAgY2FsbGJhY2s6IChyb290LCBzY29wZSkgPT4ge1xyXG4gICAgICAgIHJvb3QucXVlcnlTZWxlY3RvcihcIi5jb2xvcmVkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5vZGEuY3JlYXRlUG9seSh7XHJcbiAgICBuYW1lOiBcIm9kYS10YWJsZVwiLFxyXG4gICAgcGFyYW06IHtcclxuICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0bWw6IGA8c3R5bGU+dGFibGUsIHRoLCB0ZCB7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7fTwvc3R5bGU+PHRhYmxlIGlkPVwibXlUYWJsZVwiPjx0aGVhZD48dHI+PHRoPmNvbDE8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PC90Ym9keT48L3RhYmxlPmAsXHJcbiAgICBjYWxsYmFjazogKHJvb3QsIHNjb3BlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2NvcGUubGlzdCk7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gcm9vdC5nZXRFbGVtZW50QnlJZChcIm15VGFibGVcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSA8dHI+IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgMXN0IHBvc2l0aW9uIG9mIHRoZSB0YWJsZTpcclxuICAgICAgICB2YXIgcm93ID0gdGFibGUuaW5zZXJ0Um93KDApO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgbmV3IGNlbGxzICg8dGQ+IGVsZW1lbnRzKSBhdCB0aGUgMXN0IGFuZCAybmQgcG9zaXRpb24gb2YgdGhlIFwibmV3XCIgPHRyPiBlbGVtZW50OlxyXG4gICAgICAgIHZhciBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgPHRyPiBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIDFzdCBwb3NpdGlvbiBvZiB0aGUgdGFibGU6XHJcbiAgICAgICAgdmFyIHJvdyA9IHRhYmxlLmluc2VydFJvdygxKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBjZWxscyAoPHRkPiBlbGVtZW50cykgYXQgdGhlIDFzdCBhbmQgMm5kIHBvc2l0aW9uIG9mIHRoZSBcIm5ld1wiIDx0cj4gZWxlbWVudDpcclxuICAgICAgICB2YXIgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHNvbWUgdGV4dCB0byB0aGUgbmV3IGNlbGxzOlxyXG4gICAgICAgIGNlbGwxLmlubmVySFRNTCA9IFwiTkVXIENFTEwxXCI7XHJcbiAgICAgICAgY2VsbDIuaW5uZXJIVE1MID0gXCJORVcgQ0VMTDJcIjtcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdCcpLmlubmVySFRNTCA9JzxoZWxsby13b3JsZCBuYW1lPVwiYXVyb3JlXCI+PC9oZWxsby13b3JsZD4nOyJdfQ==
