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
oda.deployPoly();

},{"./Oda":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJYTtBQUNULGFBRFMsR0FDVCxHQUFlOzhCQUROLEtBQ007O0FBQ1gsYUFBSyxPQUFMLEdBQWUsZUFBZixDQURXO0tBQWY7O2lCQURTOztxQ0FLSztBQUNWLG9CQUFRLEdBQVIsc0NBQStDLEtBQUssT0FBTCxDQUEvQyxDQURVOzs7O21DQUlLO0FBQ2YsZ0JBQUksa0JBQUosQ0FEZTs7OENBQU47O2FBQU07O0FBRWYsaUJBQUssT0FBTCxDQUFhLGVBQU87QUFDaEIsNkJBQVcsU0FBWCxDQURnQjthQUFQLENBQWIsQ0FGZTtBQUtmLGtCQUFNLElBQUksTUFBSixDQUFXLENBQVgsRUFBYyxJQUFJLE1BQUosR0FBVyxDQUFYLENBQXBCLENBTGU7QUFNZixvQkFBUSxHQUFSLENBQVksR0FBWixFQU5lOzs7O3FDQVNMO0FBQ1YsZ0JBQUksZ0JBQWdCLFNBQVMsZUFBVCxDQUF5QixhQUF6QixFQUF3QztBQUN4RCwyQkFBVyxPQUFPLE1BQVAsQ0FBYyxZQUFZLFNBQVosRUFBdUI7QUFDNUMsMEJBQU07QUFDRiwrQkFBTyxPQUFQO0FBQ0Esa0NBQVUsSUFBVjtBQUNBLG9DQUFZLElBQVo7QUFDQSxzQ0FBYyxJQUFkO3FCQUpKO0FBTUEscUNBQWlCOztBQUNiLGdEQUFTO0FBQ0wsZ0NBQUksT0FBTyxLQUFLLGdCQUFMLEVBQVAsQ0FEQztBQUVMLGdDQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVYsQ0FGQztBQUdMLGdDQUFJLE9BQU8sS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQVAsQ0FIQzs7QUFLTCxnQ0FBRyxRQUFRLElBQVIsSUFBZ0IsS0FBSyxJQUFMLElBQWEsSUFBYixFQUFrQjtBQUNqQyxxQ0FBSyxJQUFMLEdBQVksSUFBWixDQURpQzs2QkFBckM7O0FBSUEsb0NBQVEsU0FBUixjQUE2QixLQUFLLElBQUwsTUFBN0IsQ0FUSztBQVVMLGlDQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFWSzt5QkFESTtxQkFBakI7aUJBUE8sQ0FBWDthQURnQixDQUFoQixDQURNOzs7O1dBbEJMOzs7Ozs7QUNKYjs7QUFDQSxJQUFJLE1BQU0sY0FBTjtBQUNKLElBQUksVUFBSjtBQUNBLElBQUksUUFBSixDQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsU0FBbEM7QUFDQSxJQUFJLFVBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFwcHlraWxsZXIgb24gMDIvMDQvMjAxNi5cclxuICovXHJcbi8vaHR0cDovL2Jsb2cuc29hdC5mci8yMDE1LzAyL2h0bWwtNS1pbnRyb2R1Y3Rpb24tYXV4LXdlYi1jb21wb25lbnRzL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZXJzaW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT2RhIEZyYW1lV29yayBjdXJyZW50IHZlcnNpb24gOiAke3RoaXMudmVyc2lvbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlIZWxsbyAoLi4ud2hvcykge1xyXG4gICAgICAgIGxldCBzdHIgPSBgQm9uam91ciA6IGA7XHJcbiAgICAgICAgd2hvcy5mb3JFYWNoKHdobyA9PiB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgICR7d2hvfSxgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aC0xKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZXBsb3lQb2x5ICgpIHtcclxuICAgICAgICBsZXQgcG9seUhlbGxvV29yZCA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnaGVsbG8td29ybGQnLCB7XHJcbiAgICAgICAgICAgIHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHsgICAgICAgICAgICAgICAgIC8vIG9wdGlvbm5lbCBzaSBvbiBuJ2EgcGFzIGJlc29pbiBkZSB2YWxldXIgcGFyIGTDqWZhdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJNeWxhblwiLCAgICAgICAgLy8gdmFsZXVyIHBhciBkw6lmYXV0IGRlIGwnYXR0cmlidXQgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZENhbGxiYWNrOiB7IC8vIGV4w6ljdXTDqSDDoCBjaGFxdWUgY3LDqWF0aW9uIGQndW4gw6lsw6ltZW50IDxoZWxsby13b3JsZD5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5hbWUgIT0gbnVsbCAmJiB0aGlzLm5hbWUgIT0gbmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVyVGV4dCA9IGBIZWxsbyAke3RoaXMubmFtZX0hYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09kYX0gZnJvbSAnLi9PZGEnO1xudmFyIG9kYSA9IG5ldyBPZGEoKTtcbm9kYS5nZXRWZXJzaW9uKCk7XG5vZGEuc2F5SGVsbG8oXCJGYWJyaWNlXCIsIFwiQXVyb3JlXCIsIFwiSWxsaWRhblwiKTtcbm9kYS5kZXBsb3lQb2x5KCk7Il19
