/***************************************************************************************************************************
 * 2 Продолжить работу с интернет-магазином:                                                                               *
 *	2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?  *
 *	2.2. Реализуйте такие объекты.                                                                                         *
 *	2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.                                           *
 ***************************************************************************************************************************/
 
 // 2.1. элементы массива, на основе которого была создана корзина, можно заменить
 // объектами product с присущеми этим оъектам свойствами name, price и прочие характеристки товара
 
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
 
 //console.log(product['name']);

 //2.3
 basket = {
	 listProduct: [],
	 listProductPush(prod){
		 this.listProduct.push(prod);
	 },
	 ammountProduct(){
		 this.listProduct.length;
	 },
	 basketPrice: 0,
	 countBasketPrice() {
		 for (i = 0; i < this.listProduct.length; i++){
			 this.basketPrice = this.basketPrice + this.listProduct[i].price;
		 }
	 },
 };
 
 console.log(basket.listProduct);
 console.log(basket.ammountProduct);
 console.log(basket.basketPrice);
 basket.listProductPush(product);
 basket.listProductPush(product1);
 basket.listProductPush(product2);
 console.log(basket.listProduct);
 console.log(basket.ammountProduct);
 console.log(basket.basketPrice);
 console.log(basket.listProduct.length);
 
 