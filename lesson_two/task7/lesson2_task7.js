/****************************************************
 *Сравнить null и 0. Попробуйте объяснить результат.*
 ****************************************************/
 
 console.log(null == 0);  //false
 console.log(null === 0); //false
 console.log(null > 0);   //false
 console.log(null < 0);   //false
 console.log(null >= 0);  //true
 console.log(null <= 0);  //true
 console.log(null != 0);  //true
 
 // так присходит, потому что  
 console.log(Number(null)); // дает 0, при этом null не есть собственно ноль, а является указанием на отсутствие объекта
                            // поэтому null == 0 дает false, а null >= 0 и null <= 0 дают true, т.к. операция приведения 
							// null к числу обращает null в 0(ноль).