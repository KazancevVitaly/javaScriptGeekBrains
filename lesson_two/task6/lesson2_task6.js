/*******************************************************************************************************************************
 * Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),                                     *
 * где arg1, arg2 – значения аргументов, operation – строка с названием операции.                                              *
 * В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) *
 * и вернуть полученное значение (использовать switch).                                                                        *
 *******************************************************************************************************************************/
 
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

 // Реализую функцию с тремя параметрами
 function mathOperation(arg1 = 20, arg2 = 4, operation = '+') {
	 switch(operation){
		 case '+': return console.log(addition(arg1, arg2));
		 case '-': return console.log(subtraction(arg1, arg2));
		 case '*': return console.log(mult(arg1, arg2));
		 case '/': return console.log(division(arg1, arg2));
	 }
 }
 
 mathOperation(20, 4, '+')
 mathOperation(20, 4, '-')
 mathOperation(20, 4, '*')
 mathOperation(20, 4, '/')