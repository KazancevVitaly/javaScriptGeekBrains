/****************************************************************************************
 * Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.   *
 * Обязательно использовать оператор return.                                            *
 ****************************************************************************************/
 
function arithmaticOp(a = 10, b = 5){
	let addition = a + b;
	let subtraction = a - b;
	let mult = a * b;
	let div = a / b;
	return 'Резултат сложения введенных параметров ' + addition + ', вычитания ' + subtraction
	        + ', умножения ' + mult + ', деления ' + div + '.';	
 } 
 
 console.log(arithmaticOp(20, 4));
 