/**
 * Created by tanglili on 16/6/20.
 */

//Javascript模块化编程 的由来
//原始写法
function m1() {
    // ...
}
function m2() {
    // ...
}
//对象写法
var module1 = new Object({
    _count : 0,
    m1:function () {
        // ...
    },
    m2:function () {
        // ...
    }
});

//使用的时候，就是调用这个对象的属性。
module1.m1();

//但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值。
module1._count = 5;

//立即执行函数写法
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        // ...
    };
    var m2 = function () {
        // ...
    };
    return {
        m1 : m1,
        m2 : m2
    };
})();

// 使用上面的写法，外部代码无法读取内部的_count变量。
console.info(module1._count); // undefined

//放大模式
var module1 = (function (mod) {
    mod.m3 = function () {
        //...
    };
    return mod;
})(module1);

//上面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块。
//宽放大模式
var module1 = (function (mod) {
    // ..   
    return mod;
})(window.module1 || {});


var module1 = (function ($,YAHOO) {
    // ...
})(jQuery,YAHOO);



// CommonJS

var math = require('math');
math.add(2,3);

//AMD

//AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
require([module], callback);
//第一个参数[module]，是一个数组，里面的成员就是要加载的模块；
// 第二个参数callback，则是加载成功之后的回调函数。
//如果将前面的代码改写成AMD形式，就是下面这样：
require(['math'],function (math) {
    math.add(2.3);
});









