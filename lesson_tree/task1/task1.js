/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

let i = 2;

nextPrime:
while (i < 100) {
    if (i == 2) {
        console.log(i);
        i++;
        continue;
    }
    
    let j = 2;
    while (j < i) {
        if (i % j == 0) {
            i++;
            continue nextPrime;
        } else {
            j++;
            continue;
        }
    }
    console.log(i);
    i++;
}