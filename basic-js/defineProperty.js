/**
 * created by Administrator on 2019-3-21
 */

//Object.defineProperty() 是 ES5 中的新对象方法,允许定义对象属性和/或更改属性的值和/或元数据。

//writable : true      // 属性值可修改
// enumerable : true    // 属性可枚举
// configurable : true  // 属性可重新配置
// writable : false     // 属性值不可修改
// enumerable : false   // 属性不可枚举
// configurable : false // 属性不可重新配置

//// 定义 getter
// get: function() { return language }
// // 定义 setter
// set: function(value) { language = value }

// var person = {
//     age: '18',
//     gender: 'woman'
// };
//
// Object.defineProperty(person, 'name', {
//     writable: false,        //writable这个属性是不可修改的，默认为true,若设置为false.则不能修改属性值
//     configurable: false,     //configurable这个属性设置为false,表示不能从对象中删除属性
//     Enumerable: false,       //表示能否通过for-in循环返回属性
//     value: 'leeyowon'
// });
//
// console.log(person);
// console.log(person.name);
//
// person.name = 'liulu';
// delete person.name;
//
// console.log(person.name);

//定义多个属性  defineProperties

var idol = {};

Object.defineProperties(idol,
    {
        edition:{
            value:1
        },
        name:{
            value:11
        },
        age:{
            value:10
        },
    });

console.log(idol);
console.log(idol.edition);
console.log(idol.name);
console.log(idol.age);
var res=idol.hasOwnProperty('name');  //hasOwnProperty 判断对象自身有没有某个属性;可以检测一个属性是存在于实例中还是存在
var req=idol.hasOwnProperty('work');
console.log(res);
console.log(req);
