(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var test2 = require('./test2.js');

module.exports = (function(){
  console.log(test2);
})();
},{"./test2.js":3}],2:[function(require,module,exports){
var $ = require('jquery');
var _ = require('underscore');
var array = [5, 10, 15];

module.exports = (function(){
  console.log($('body').html());
  _.each(array, function(element, index, array) {
    console.log(element + ' : ' + index);
  });

  $.ajax({
    type: 'GET',
    url: '/api/hoge',
    dataType: 'json',
    success: function(res){
      console.log(res);
    }
  })
})();


},{"jquery":"HlZQrA","underscore":"ZKusGn"}],3:[function(require,module,exports){
var $ = require('jquery');
var _ = require('underscore');
var array = [5, 10, 15];
var test = require('./test.js');

module.exports = function () {
  var test2 = test;
  var bb = 'test2bb';
}

},{"./test.js":2,"jquery":"HlZQrA","underscore":"ZKusGn"}],4:[function(require,module,exports){
module.exports = function () {
  var test3 = 'test3'
}

},{}]},{},[1,2,3,4]);