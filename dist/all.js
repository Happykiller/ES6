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
            var options = {};

            params.param.forEach(function (value) {});

            this.polys[params.name] = document.registerElement(params.name, {
                prototype: Object.create(HTMLElement.prototype, options)
            });
        }
    }, {
        key: "deployPoly",
        value: function deployPoly() {
            var polyHelloWord = document.registerElement('hello-world', {
                prototype: Object.create(HTMLElement.prototype, {
                    name: { // optionnel si on n'a pas besoin de valeur par défaut
                        value: "Mylan", // valeur par défaut de l'attribut name
                        writable: true,
                        enumerable: true,
                        configurable: true
                    },
                    createdCallback: { // exécuté à chaque création d'un élément <hello-world>

                        value: function value() {
                            var root = this.createShadowRoot();
                            var content = document.createElement("h1");
                            var name = this.getAttribute("name");

                            if (name != null && this.name != name) {
                                this.name = name;
                            }

                            content.innerText = "Hello " + this.name + "!";
                            root.appendChild(content);
                        }
                    }
                })
            });
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
//oda.deployPoly();

oda.createPoly({
    name: "hello",
    param: {
        attr: {
            value: "default"
        }
    },
    css: "#name {\n        color: green;\n    }",
    html: "\n        <h1>Hello <span id=\"name\"></span>!</h1>\n    ",
    init: function init(datas) {
        var doc = document.currentScript.ownerDocument;
        var inte = 0;
    },
    callback: function callback(datas) {
        inte += 1;
        console.log(inte);
    }
});

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYSxHQUFHLFdBQUgsR0FBRztBQUNaLGFBRFMsR0FBRyxHQUNHOzhCQUROLEdBQUc7O0FBRVIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLEdBQUc7O3FDQU1FO0FBQ1YsbUJBQU8sQ0FBQyxHQUFHLHNDQUFvQyxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7U0FDbEU7OzttQ0FFa0I7QUFDZixnQkFBSSxHQUFHLGVBQWUsQ0FBQzs7OENBRGQsSUFBSTtBQUFKLG9CQUFJOzs7QUFFYixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNoQixtQkFBRyxVQUFRLEdBQUcsTUFBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztBQUNILGVBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOzs7Ozs7Ozs7Ozs7OzttQ0FXVyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsa0JBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFLLEVBRS9CLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQzVELHlCQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUMzRCxDQUFDLENBQUM7U0FDTjs7O3FDQUVhO0FBQ1YsZ0JBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFO0FBQ3hELHlCQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO0FBQzVDLHdCQUFJLEVBQUU7QUFDRiw2QkFBSyxFQUFFLE9BQU87QUFDZCxnQ0FBUSxFQUFFLElBQUk7QUFDZCxrQ0FBVSxFQUFFLElBQUk7QUFDaEIsb0NBQVksRUFBRSxJQUFJO3FCQUNyQjtBQUNELG1DQUFlLEVBQUU7O0FBQ2IsNkJBQUssbUJBQUk7QUFDTCxnQ0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDbkMsZ0NBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsZ0NBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXJDLGdDQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7QUFDakMsb0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzZCQUNwQjs7QUFFRCxtQ0FBTyxDQUFDLFNBQVMsY0FBWSxJQUFJLENBQUMsSUFBSSxNQUFHLENBQUM7QUFDMUMsZ0NBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKLENBQUM7YUFDTCxDQUFDLENBQUM7U0FDTjs7O1dBakVRLEdBQUc7Ozs7OztBQ0poQiw0QkFBMEI7O0FBQzFCLElBQUksR0FBRyxHQUFHLGNBQVMsQ0FBQztBQUNwQixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQzs7O0FBQUMsQUFHN0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUNYLFFBQUksRUFBRSxPQUFPO0FBQ2IsU0FBSyxFQUFFO0FBQ0gsWUFBSSxFQUFFO0FBQ0YsaUJBQUssRUFBRSxTQUFTO1NBQ25CO0tBQ0o7QUFDRCxPQUFHLHlDQUVEO0FBQ0YsUUFBSSw2REFFSDtBQUNELFFBQUksRUFBRSxjQUFDLEtBQUssRUFBSztBQUNiLFlBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQy9DLFlBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztLQUNoQjtBQUNELFlBQVEsRUFBRSxrQkFBQyxLQUFLLEVBQUs7QUFDakIsWUFBSSxJQUFJLENBQUMsQ0FBQztBQUNWLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbi8vaHR0cDovL2Jsb2cuc29hdC5mci8yMDE1LzAyL2h0bWwtNS1pbnRyb2R1Y3Rpb24tYXV4LXdlYi1jb21wb25lbnRzL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgICAgICB0aGlzLnBvbHlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVyc2lvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9kYSBGcmFtZVdvcmsgY3VycmVudCB2ZXJzaW9uIDogJHt0aGlzLnZlcnNpb259YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5SGVsbG8gKC4uLndob3MpIHtcclxuICAgICAgICBsZXQgc3RyID0gYEJvbmpvdXIgOiBgO1xyXG4gICAgICAgIHdob3MuZm9yRWFjaCh3aG8gPT4ge1xyXG4gICAgICAgICAgICBzdHIgKz0gYCAke3dob30sYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGgtMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG5hbWVcclxuICAgICAqIHBhcmFtXHJcbiAgICAgKiBjc3NcclxuICAgICAqIGh0bWxcclxuICAgICAqIGluaXRcclxuICAgICAqIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBvbHkgKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgIHBhcmFtcy5wYXJhbS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2x5c1twYXJhbXMubmFtZV0gPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQocGFyYW1zLm5hbWUsIHtcclxuICAgICAgICAgICAgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb3B0aW9ucylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVwbG95UG9seSAoKSB7XHJcbiAgICAgICAgbGV0IHBvbHlIZWxsb1dvcmQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2hlbGxvLXdvcmxkJywge1xyXG4gICAgICAgICAgICBwcm90b3R5cGU6IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB7ICAgICAgICAgICAgICAgICAvLyBvcHRpb25uZWwgc2kgb24gbidhIHBhcyBiZXNvaW4gZGUgdmFsZXVyIHBhciBkw6lmYXV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTXlsYW5cIiwgICAgICAgIC8vIHZhbGV1ciBwYXIgZMOpZmF1dCBkZSBsJ2F0dHJpYnV0IG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRDYWxsYmFjazogeyAvLyBleMOpY3V0w6kgw6AgY2hhcXVlIGNyw6lhdGlvbiBkJ3VuIMOpbMOpbWVudCA8aGVsbG8td29ybGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lICE9IG51bGwgJiYgdGhpcy5uYW1lICE9IG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5pbm5lclRleHQgPSBgSGVsbG8gJHt0aGlzLm5hbWV9IWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPZGF9IGZyb20gJy4vT2RhJztcclxudmFyIG9kYSA9IG5ldyBPZGEoKTtcclxub2RhLmdldFZlcnNpb24oKTtcclxub2RhLnNheUhlbGxvKFwiRmFicmljZVwiLCBcIkF1cm9yZVwiLCBcIklsbGlkYW5cIik7XHJcbi8vb2RhLmRlcGxveVBvbHkoKTtcclxuXHJcbm9kYS5jcmVhdGVQb2x5KHtcclxuICAgIG5hbWU6IFwiaGVsbG9cIixcclxuICAgIHBhcmFtOiB7XHJcbiAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBgI25hbWUge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1gLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICAgIDxoMT5IZWxsbyA8c3BhbiBpZD1cIm5hbWVcIj48L3NwYW4+ITwvaDE+XHJcbiAgICBgLFxyXG4gICAgaW5pdDogKGRhdGFzKSA9PiB7XHJcbiAgICAgICAgbGV0IGRvYyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQub3duZXJEb2N1bWVudDtcclxuICAgICAgICBsZXQgaW50ZSA9IDA7XHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2s6IChkYXRhcykgPT4ge1xyXG4gICAgICAgIGludGUgKz0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnRlKTtcclxuICAgIH1cclxufSk7Il19
