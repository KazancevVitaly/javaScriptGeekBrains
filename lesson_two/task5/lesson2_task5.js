'use strict'
/****************************************************************************************
 * Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.   *
 * Обязательно использовать оператор return.                                            *
 ****************************************************************************************/
 
 // сложение
function addition(a = 10, b = 5){
	return `Результат сложения введенных параметров ${(a + b)}.` ;	
 } 
 
 // вычитание
 function subtraction(a = 10, b = 5){
	return `Результат вычитания введенных параметров  ${(a - b)}.`;
 }
 
 // умножение
 function mult (a = 10,  b = 5) {
	return `Результат умножения введенных параметров ${(a * b)}.`; 
 }
 
 // деление
 function division (a = 10, b = 5) {
	 return `Результат деления введенных параметров ${(a / b)}.`;
 }
 

const functionExecutionResult = addition();
console.log(functionExecutionResult);

 console.log(addition());
 console.log(subtraction());
 console.log(mult());
 console.log(division());