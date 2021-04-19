'use strict'
/****************************************************************************************
 * Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.   *
 * Обязательно использовать оператор return.                                            *
 ****************************************************************************************/
 
 // сложение
function addition(a = 10, b = 5){
	return (a + b);	
 } 
 
 // вычитание
 function subtraction(a = 10, b = 5){
	return (a - b);
 }
 
 // умножение
 function mult (a = 10,  b = 5) {
	return (a * b); 
 }
 
 // деление
 function division (a = 10, b = 5) {
	 return (a / b);
 }
 

const functionExecutionResult = addition();
console.log(functionExecutionResult);

 console.log(addition());
 console.log(subtraction());
 console.log(mult(addition(6, 7), addition(5, 9)));
 console.log(division());