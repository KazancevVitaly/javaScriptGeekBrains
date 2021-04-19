'use strict'
// Не выполняя кода, ответить, что выведет браузер и почему:

// if (!("a" in window)) {
//     var a = 1;
// }
// alert(a);
/* undefind, потому что переменная объявлена через var,
 * а потому хойстинг и условие не выполняется, поэтому присвоение значения
 * не происходит. Интерперетатор читает так:
 * var a
 * if (!("a" in window)) {
 *     a = 1;
 *  }
 * alert(a);
 */

// var b = function a(x) {
//     x && a(--x);
// };
// alert(a);
/*ReferenceError: a is not defind. потому что функция a видима только внутри переменной b */

// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a);
// f a(x) {return x * 2;}
/* Потому что интерперетатор видит так:
 * var a;
 * function a(x) {
 *  return x * 2;
 * }
 * alert()a;
 * */

// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3);
/* 3 -- неочевидный для меня результат. ждал, что будет 10. 
*/

// function a() {
//     alert(this);
// }
// a.call(null);
/* null -- это яно, потому что контекст вызова null */