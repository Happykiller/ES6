(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _multiply = require('./multiply');

console.log((0, _multiply.multiply)(2, 3)); // => 2 * 3 = 6

var greeter = new _multiply.Greeter();
console.log(greeter.message);

},{"./multiply":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qc3giLCJzcmNcXG11bHRpcGx5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBREosUUFBUSxFQUNLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFBQyxBQUc1QixJQUFJLE9BQU8sR0FBRyxjQUROLE9BQU8sRUFDWSxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7O1FDTGIsUUFBUSxHQUFSLFFBQVE7Ozs7QUFBakIsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMzQixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEI7Ozs7OztBQUFDO0lBTVcsT0FBTyxXQUFQLE9BQU87QUFDaEIsYUFEUyxPQUFPLEdBQ29DO1lBQXhDLElBQUkseURBQUcsWUFBWTtZQUFFLElBQUkseURBQUcsVUFBVTs7OEJBRHpDLE9BQU87O0FBRVosWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7S0FDbkI7O2lCQUpRLE9BQU87OzRCQUtGO0FBQ1YsbUJBQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsSUFBSSxPQUFHO1NBQ3RDOzBCQUNXLElBQUksRUFBRTtBQUNkLGdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUE7U0FDOUI7OztXQVZRLE9BQU87OztBQVduQixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7bXVsdGlwbHl9IGZyb20gJy4vbXVsdGlwbHknO1xyXG5jb25zb2xlLmxvZyhtdWx0aXBseSgyLCAzKSk7IC8vID0+IDIgKiAzID0gNlxyXG5cclxuaW1wb3J0IHtHcmVldGVyfSBmcm9tICcuL211bHRpcGx5JztcclxudmFyIGdyZWV0ZXIgPSBuZXcgR3JlZXRlcigpO1xyXG5jb25zb2xlLmxvZyhncmVldGVyLm1lc3NhZ2UpOyIsImV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShhLCBiKSB7XHJcbiAgICByZXR1cm4gYSAqIGI7XHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEFuIGF3ZXNvbWUgc2NyaXB0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JlZXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJ0RlYXIgQ29kZXInLCB0ZXh0ID0gJ2hpIHRoZXJlJykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XHJcbiAgICB9XHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy50ZXh0fSAke3RoaXMubmFtZX0hYFxyXG4gICAgfVxyXG4gICAgc2V0IG1lc3NhZ2UodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQgKyBcImNvdWNvdVwiXHJcbiAgICB9XHJcbn07Il19
