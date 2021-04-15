/********************************************************************************************************
 * Создать функцию, генерирующую шахматную доску.                                                       *
 * При этом можно использовать любые html-теги по своему желанию.                                       *
 * Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.        *
 * Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.   *
 ********************************************************************************************************/
 

// предсставим доску ввиде объекта
const cheesBoard = {
	// делаем контейнер для доски.
	body: document.getElementsByTagName('body')[0],
	// метод генерации шахматной доски
	renderCheesBoard() {
		// инициализирую таблицу
		const table = document.createElement('table');
		// элементарные стили ширина и высота
		table.style.width = '350px';
		table.style.height = '350px';
		table.style.textAlign = 'center';
		// вставляем таблицу в body
		this.body.appendChild(table);
		// список строк
		const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		// список колонок
		const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
		// добавлем строки
		for (row = 0; row < rows.length; row++){
			const tr = document.createElement('tr');
			table.appendChild(tr);
			// на каждой итерации добавляем по 10 ячеек в каждую строку
			for (col = 0; col < cols.length; col++) {
				const td = document.createElement ('td');
				tr.appendChild(td);
				// если строка ноль, вставляем букву
				if (rows[row] === 0& cols[col] !== 0) {
				td.innerHTML = cols[col];
				}
				// если колонка ноль, вставляем цифру
				else if (cols[col] === 0 && rows[row] !== 0) {
				td.innerHTML = rows[row];
				}
				// проверяем является ли поле черным
				if (this.fieldIsBlack(row, col)) {
				td.style.backgroundColor = 'black';
				}
			}
		}
	},
	
	fieldIsBlack(rowNum, colNum) {
	// боковые поля не раскрашиваем
    if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
      return false;
    }
	// если строка нечетная, а колонка четная или строка четная, а колонка нечетная тогда красим
    return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
  },
};


cheesBoard.renderCheesBoard();