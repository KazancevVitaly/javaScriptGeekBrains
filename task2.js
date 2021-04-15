/***************************************************************************************************************************
 * 2 Продолжить работу с интернет-магазином:                                                                               *
 *	2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?  *
 *	2.2. Реализуйте такие объекты.                                                                                         *
 *	2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.                                           *
 ***************************************************************************************************************************/
 
 // 2.1. элементы массива, на основе которого была создана корзина, можно заменить
 // объектами product с присущими этим оъектам свойствами name, price и прочие характеристки товара
 
 // 2.2
 let product = {
	 name: 'ball',
	 price: 100,
 };
 
 let product1 = {
	 name: 'dumbbell',
	 price: 350,
 };
 
 let product2 = {
	 name: 'skates',
	 price: 754,
 };

 //2.3
 basket = {
	 //список товаров
	 listProduct: [],
	 //метод добавления товаров в корзину
	 listProductPush(prod){
		 this.listProduct.push(prod);
	 },
	 //количество товаров в корзине
	 ammountProduct(){
		 return this.listProduct.length;
	 },
	 //стоимость товаров в корзине
	 //метод подсчета стоимости товаров в корзине
	 countBasketPrice(basketPrice = 0) {
		 for (i = 0; i < this.listProduct.length; i++) {
			 basketPrice += this.listProduct[i].price;
		 }
         return basketPrice;
	 },
 };
 
 //проверяем список товаров в корзине --- список пуст
 console.log(basket.listProduct);''
 //проверяем количество товаров -- товаров ноль
 console.log(basket.ammountProduct());
 //считаем стоимость
 basket.countBasketPrice();
 // стоимость - ноль
 console.log(basket.countBasketPrice());
 
 //добавляем товары в корзину
 basket.listProductPush(product);
 basket.listProductPush(product1);
 basket.listProductPush(product2);
 //еще раз смотрим список -- список изменился
 console.log(basket.listProduct);
 // количество товаров тепер равно 3
 console.log(basket.ammountProduct());
 // считаем стоимость
 console.log(basket.countBasketPrice());
 // стоимость равна 1204

 
 