/********************************************************************
 * Присвоить переменной а значение в промежутке [0..15].           A*
 * С помощью оператора switch организовать вывод чисел от a до 15. B *
 ********************************************************************/
 
// A присваиваю значение от 0 до 15
let a = 0; 
 
// B Вывожу значение при помощи switch
switch(a){
	case 0:
		console.log(a++);
		break;
	case 1:
		console.log(a++);
		break;
	case 2:
		console.log(a++);
		break;
	case 3:
		console.log(a++);
		break;
	case 4:
		console.log(a++);
		break;
	case 5:
		console.log(a++);
		break;
	case 6:
		console.log(a++);
		break;
	case 7:
		console.log(a++);
		break;
	case 8:
		console.log(a++);
		break;
	case 9:
		console.log(a++);
		break;
	case 10:
		console.log(a++);
		break;
	case 11:
		console.log(a++);
		break;
	case 12:
		console.log(a++);
		break;
	case 13:
		console.log(a++);
		break;
	case 14:
		console.log(a++);
		break;
	case 15:
		console.log(a++);
		break;
	default
		console.log('Необходимо значение от 0 до 15')
 }
 
 // Про постфиксный инкремент не догадался, поначалу собирал строку из чисел, исправил после урока.