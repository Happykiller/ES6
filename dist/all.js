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

        this.version = "0.1.150402.01";
    }

    _createClass(Oda, [{
        key: "getVersion",
        value: function getVersion() {
            console.log("Oda FrameWork current version : " + this.version);
        }
    }]);

    return Oda;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _multiply = require('./multiply');

var _Oda = require('./Oda');

console.log((0, _multiply.multiply)(2, 3)); // => 2 * 3 = 6

var greeter = new _multiply.Greeter();
console.log(greeter.message);

var oda = new _Oda.Oda();
oda.getVersion();

},{"./Oda":1,"./multiply":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.multiply = multiply;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function multiply(a, b) {
    return a * b;
};

/**
 * @class
 * An awesome script
 */

var Greeter = exports.Greeter = function () {
    function Greeter() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? 'Dear Coder' : arguments[0];
        var text = arguments.length <= 1 || arguments[1] === undefined ? 'hi there' : arguments[1];

        _classCallCheck(this, Greeter);

        this.name = name;
        this.text = text;
    }

    _createClass(Greeter, [{
        key: 'message',
        get: function get() {
            return this.text + ' ' + this.name + '!';
        },
        set: function set(text) {
            this.text = text + "coucou";
        }
    }]);

    return Greeter;
}();

;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXE9kYS5qc3giLCJzcmNcXGFwcC5qc3giLCJzcmNcXG11bHRpcGx5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDR2E7QUFDVCxhQURTLEdBQ1QsR0FBZTs4QkFETixLQUNNOztBQUNYLGFBQUssT0FBTCxHQUFlLGVBQWYsQ0FEVztLQUFmOztpQkFEUzs7cUNBS0s7QUFDVixvQkFBUSxHQUFSLHNDQUErQyxLQUFLLE9BQUwsQ0FBL0MsQ0FEVTs7OztXQUxMOzs7Ozs7QUNIYjs7QUFPQTs7QUFOQSxRQUFRLEdBQVIsQ0FBWSx3QkFBUyxDQUFULEVBQVksQ0FBWixDQUFaOztBQUdBLElBQUksVUFBVSx1QkFBVjtBQUNKLFFBQVEsR0FBUixDQUFZLFFBQVEsT0FBUixDQUFaOztBQUdBLElBQUksTUFBTSxjQUFOO0FBQ0osSUFBSSxVQUFKOzs7Ozs7Ozs7OztRQ1RnQjs7OztBQUFULFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QjtBQUMzQixXQUFPLElBQUksQ0FBSixDQURvQjtDQUF4Qjs7Ozs7OztJQVFNO0FBQ1QsYUFEUyxPQUNULEdBQW9EO1lBQXhDLDZEQUFPLDRCQUFpQztZQUFuQiw2REFBTywwQkFBWTs7OEJBRDNDLFNBQzJDOztBQUNoRCxhQUFLLElBQUwsR0FBWSxJQUFaLENBRGdEO0FBRWhELGFBQUssSUFBTCxHQUFZLElBQVosQ0FGZ0Q7S0FBcEQ7O2lCQURTOzs0QkFLSztBQUNWLG1CQUFVLEtBQUssSUFBTCxTQUFhLEtBQUssSUFBTCxNQUF2QixDQURVOzswQkFHRixNQUFNO0FBQ2QsaUJBQUssSUFBTCxHQUFZLE9BQU8sUUFBUCxDQURFOzs7O1dBUlQ7OztBQVdaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhhcHB5a2lsbGVyIG9uIDAyLzA0LzIwMTYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT2RhIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMS4xNTA0MDIuMDFcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZXJzaW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT2RhIEZyYW1lV29yayBjdXJyZW50IHZlcnNpb24gOiAke3RoaXMudmVyc2lvbn1gKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7bXVsdGlwbHl9IGZyb20gJy4vbXVsdGlwbHknO1xuY29uc29sZS5sb2cobXVsdGlwbHkoMiwgMykpOyAvLyA9PiAyICogMyA9IDZcblxuaW1wb3J0IHtHcmVldGVyfSBmcm9tICcuL211bHRpcGx5JztcbnZhciBncmVldGVyID0gbmV3IEdyZWV0ZXIoKTtcbmNvbnNvbGUubG9nKGdyZWV0ZXIubWVzc2FnZSk7XG5cbmltcG9ydCB7T2RhfSBmcm9tICcuL09kYSc7XG52YXIgb2RhID0gbmV3IE9kYSgpO1xub2RhLmdldFZlcnNpb24oKTsiLCJleHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICAgIHJldHVybiBhICogYjtcbn07XG5cbi8qKlxuICogQGNsYXNzXG4gKiBBbiBhd2Vzb21lIHNjcmlwdFxuICovXG5leHBvcnQgY2xhc3MgR3JlZXRlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9ICdEZWFyIENvZGVyJywgdGV4dCA9ICdoaSB0aGVyZScpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy50ZXh0fSAke3RoaXMubmFtZX0hYFxuICAgIH1cbiAgICBzZXQgbWVzc2FnZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQgKyBcImNvdWNvdVwiXG4gICAgfVxufTsiXX0=
