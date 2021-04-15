/* ************************************************************************************************
 * Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. *
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:   *
 *   3.1. Пустая корзина должна выводить строку «Корзина пуста»;                                  *
 *   3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».                   *
 * ************************************************************************************************/
 
 let product = {
	 name: 'ball',
	 price: 100,
	 position: 5,
 };

 let product1 = {
	 name: 'dumbbell',
	 price: 350,
	 position: 2,
 };

 let product2 = {
	 name: 'skates',
	 price: 754,
	 position: 1,
 };
 
 const basket = {
	 //список товаров
	 listProduct: [],
	 //метод добавления товаров в корзину
	 listProductPush(prod){
		 this.listProduct.push(prod);
	 },
	 //количество товаров в корзине
	 ammountProduct(){
		 let n = 0;
		 for (i = 0; i < this.listProduct.length; i++){
			 n += this.listProduct[i].position
		 }
		 return n;
	 },
	 //метод подсчета стоимости товаров в корзине
	 countBasketPrice(basketPrice = 0) {
		 for (i = 0; i < this.listProduct.length; i++){
			 basketPrice = basketPrice + 
			 this.listProduct[i].price * this.listProduct[i].position;
		 }
		 // Наполненная должна выводить «В корзине: n товаров на сумму m рублей»
		 return '"В корзине ' + this.ammountProduct() + ' товаров стоимостью '+ 
				basketPrice + '$"';
	 },
	 
	 basketEl: document.getElementById('basket'),
	
	// реализую генерацию корзины
	 getBasket(){
		 // наименование колонок
		 let nameCol = ['Product', 'Price', 'position'];
		 // сделаем корзину ввиде таблицы
		 let table = document.createElement('table');
		 table.style.border = '1px solid black';
		 table.style.textAlign = 'center';
		 // первая строка, в которой будут названия колонок
		 let tr = document.createElement('tr');
		 this.basketEl.appendChild(table);
		 table.appendChild(tr);
		 for (col = 0; col < nameCol.length; col++){
			let td = document.createElement('td');
			td.style.border = '1px solid black';
			tr.appendChild(td);
			td.innerHTML = nameCol[col];
		 }
		 // 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
		 if (this.ammountProduct() === 0) {
			 let p = document.createElement('p');
			 p.innerText = '"Корзина пуста"';
			 this.basketEl.appendChild(p);
		 }
		 // 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
		 else {
			 // проходим по списку товаров
			 for (prod = 0;prod < this.listProduct.length; prod++){
				 // строка с товаром
				 let rowGood = document.createElement('tr');
				 table.appendChild(rowGood);
				 // проходим по свойствам товара и встраиваим их в корзину
				 for (let prop in this.listProduct[prod]){
					 let td = document.createElement('td');
					 td.style.border = '1px solid black';
					 rowGood.appendChild(td);
					 td.innerHTML = this.listProduct[prod][prop];
				 }
			 }
			 /*let rowGood = document.createElement('tr');
			 table.appendChild(rowGood);
			 let td = document.createElement('td');
			 rowGood.appendChild(td);*/
			 basketAm = this.countBasketPrice();
			 let p = document.createElement('p');
			 p.innerText = basketAm;
			 this.basketEl.appendChild(p);
		 }
	 }, 
 };
 
 
 basket.listProductPush(product);
 basket.listProductPush(product1);
 basket.listProductPush(product2);
 basket.getBasket();
 
 
 // Если товара нет, тогда выводиится только первая строка с наименованием 
 // разделов корзины и текст, что корзина пуста
 //
