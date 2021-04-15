/* *************************************************************************************************************
 * 1. Доработать модуль корзины.                                                                               *
 *		a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы   *
 * 		b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида                   *
 * *************************************************************************************************************/
 /*
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
 };*/
 
 const catalog = {
	 // Блок каталога
	 catalogDiv: null,
	 // Корзина
	 basket: null,
	 //Список товаров
	 catalogList: [
		{
			idProd: 1,
			name: 'ball',
			price: 100,
		},
		{
			idProd: 2,
			name: 'dumbbell',
			price: 350,
		},
		{
			idProd: 3,
			name: 'skates',
			price: 754,
		}
	 ],
	
	//инициализирую каталог
	 init (catalogDivClass, basket) {
		 this.catalogDiv = document.querySelector(`.${catalogDivClass}`);
		 this.basket = basket;
		 this.render();
		 this.addEventHandlers();
	 },
	 
	 render() {
		 if (this.getCatalogListLength() > 0) {
			 this.renderCatalogList();
		 } else {
			 this.renderEmptyCatalog();
		 }
	 },
	 
	 //обработка событий
	 addEventHandlers () {
		 this.catalogDiv.addEventListener('click', event =>
		 this.addToBasket(event));
	 },
	 
	 // Добавляю товар в корзину
	 addToBasket (event) {
		 if (!event.target.classList.contains ('product-add-to-basket')) return;
		 const idProduct = +event.target.dataset.idProd;
		 const productToAdd = this.catalogList.find((product) => product.idProd === idProduct);
		 this.basket.addToBasket(productToAdd);
	 },
	 
	 // Количество товара в каталоге
	 getCatalogListLength () {
		 return this.catalogList.length;
	 },
	 
	 //список товара
	 renderCatalogList() {
		 this.catalogDiv.innerHTML = '';
		 this.catalogList.forEach (item => {
			 this.catalogDiv.insertAdjacentHTML ('beforeend',
			 this.renderCatalogItem(item));
		 });
	 },
	 
	 renderCatalogItem (item) {
		 return `<div class="product">
				<h3>${item.name}</h3>
				<p>${item.price}</p>
				<button class="product-add-to-basket" data-id-prod="${item.idProd}">В корзину</button>
				</div>`;
	 },
	 
	 renderEmptyCatalog() {
        this.catalogDiv.innerHTML = '';
        this.catalogDiv.textContent = 'Каталог товаров пуст';
    },
 };
 
 const basket = {
	 // блок корзины
	 basketDiv: document.getElementById('basket'),
	 
	 //кнопка очистки
	 clrBasketButton: null,
	 
	 //список товаров
	 listProduct: [],
	 
	 //инициализация корзины
	 init (basketDiv, clrBasketButton) {
		 this.clrBasketButton = document.querySelector(`.${clrBasketButton}`);
		 this.addEventHandlers();
		 this.getBasket();
	 },

	 // Обработка событий для очистки корзины
	 addEventHandlers() {
		 this.clrBasketButton.addEventListener('click', this.dropBasket.bind(this));
	 },
	 
	 // Очистка корзины
	 dropBasket() {
		 this.listProduct = [];
		 const basketTbl = document.getElementsByTagName('table')[0];
		 basketTbl.remove();
		 const basketTxt = document.getElementsByTagName('p')[3];
		 basketTxt.remove();
		 this.getBasket();
	 },
	 
	 //Добавляю товар в корзину
	 addToBasket(product) {
		 if (product) {
			 const findBasket = this.listProduct.find(({idProd}) => product.idProd === idProd);
			 if (findBasket) {
				 findBasket.position++;
			 } else {
				 this.listProduct.push ({...product, position: 1});
			 }
			 const basketTable = document.getElementsByTagName('table')[0];
			 basketTable.remove();
			 const basketText = document.getElementsByTagName('p')[3];
			 basketText.remove();
			 this.getBasket();
		 } else {
			 alert('Ошибка ввода!');
		 }
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
				basketPrice + '$';
	 },
	
	// реализую генерацию корзины
	 getBasket(){
		 // наименование колонок
		 let nameCol = ['ID', 'Product', 'Price', 'Ammount'];
		 // сделаем корзину ввиде таблицы
		 let table = document.createElement('table');
		 table.style.border = '1px solid black';
		 table.style.textAlign = 'center';
		 // первая строка, в которой будут названия колонок
		 let tr = document.createElement('tr');
		 this.basketDiv.appendChild(table);
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
			 this.basketDiv.appendChild(p);
		 }
		 // 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
		 else {
			 // проходим по списку товаров
			 for (prod = 0; prod < this.listProduct.length; prod++){
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
			 this.basketDiv.appendChild(p);
		 }
	 }, 
 };
 
 /*
 basket.listProductPush(product)
 basket.listProductPush(product1);
 basket.listProductPush(product2);
*/
//basket.getBasket();
 

 catalog.init('catalog', basket);
 basket.init(basket.basketDiv, 'clr-basket-button');