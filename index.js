// 1
document.write("<hr>");
document.write("Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.");

const arrayTask1 = ['a', 'b', 'c'];
const array2Task1 = [1, 2, 3];

const resultArrayTask1 = arrayTask1.concat(array2Task1);

document.write("<hr>Результат<br>" + resultArrayTask1);

// 2

document.write("<hr>");
document.write("Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.");

const arrayTask2 = ['a', 'b', 'c'];

const resultArrayTask2 = arrayTask2.concat(1, 2, 3);
document.write("<hr>Результат<br>" + resultArrayTask2);

// 3

document.write("<hr>");
document.write("Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].");

const arrayTask3 = [1, 2, 3];

const arrayResultTask3 = arrayTask3.reverse();
document.write("<hr>Результат<br>" + arrayResultTask3);

// 4

document.write("<hr>");
document.write("Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.");

const arrayTask4 = [1, 2, 3];

arrayTask4.push(4, 5, 6);
document.write("<hr>Результат<br>" + arrayTask4);

// 5

document.write("<hr>");
document.write("Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.");

const arrayTask5 = [1, 2, 3];

arrayTask5.splice(0, 0, 4, 5, 6);
document.write("<hr>Результат<br>" + arrayTask5);

// 6

document.write("<hr>");
document.write("Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.");

const arrayTask6 = ['js', 'css', 'jq'];

document.write("<hr>Результат<br>" + arrayTask6[0]);

// 7

document.write("<hr>");
document.write("Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].");

const arrayTask7 = [1, 2, 3, 4, 5];
const arrayResultTask7 = arrayTask7.splice(0, 3);

document.write("<hr>Результат<br>" + arrayResultTask7);

// 8

document.write("<hr>");
document.write("Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].");

const arrayTask8 = [1, 2, 3, 4, 5];
arrayTask8.splice(1, 2);

document.write("<hr>Результат<br>" + arrayTask8);

// 9

document.write("<hr>");
document.write("Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].");

const arrayTask9 = [1, 2, 3, 4, 5];
arrayTask9.splice(2, 0, 10);

document.write("<hr>Результат<br>" + arrayTask9);

// 10

document.write("<hr>");
document.write("Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.");

const arrayTask10 = [3, 4, 1, 2, 7];
document.write("<br>Був такий массив<br>" + arrayTask10);
arrayTask10.sort();

document.write("<br>Став<br>" + arrayTask10);

// 11

document.write("<hr>");
document.write("Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'.");

const arrayTask11 = ['Привіт, ', 'світ', '!'];
arrayTask11.splice(1, 1, 'мир');
const arrayResult11Task11 = arrayTask11.join(" ");

document.write("<hr>Результат<br>" + arrayResult11Task11);

// 12

document.write("<hr>");
document.write("Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, ').");

const arrayTask12 = ['Привіт, ', 'світ', '!'];
arrayTask12.splice(0, 1, 'Поки');

document.write("<hr>Результат<br>" + arrayTask12);

// 13

document.write("<hr>");
document.write("Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.");

const arrayTask13 = [1, 2, 3, 4, 5];
document.write("<hr>Результат 1<br>" + arrayTask13);

const arrayTask13_1 = new Array(1, 2, 3, 4, 5);
document.write("<hr>Результат 2<br>" + arrayTask13_1);

// 14

document.write("<hr>");
document.write("Дан багатовимірний масив arr. Виведіть за його допомогою слово 'блакитний' 'blue' .");

const arrayTask14 = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
];


document.write("<hr>Результат 'блакитний' arrayTask14[0][0] - " + arrayTask14[0][0]);
document.write("<hr>Результат 'blue' arrayTask14[1][0] - " + arrayTask14[1][0]);


// 16

document.write("<hr>");
document.write("Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.");

const arrayTask16 = ['a', 'b', 'c', 'd'];

document.write(`<hr>Результат<br>  ${arrayTask16[0]}+${arrayTask16[1]}, ${arrayTask16[2] + arrayTask16[3]}`);

//17

document.write("<hr>");
document.write(`Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. 
Елементи масиву будуть розділені комою`
);

const arrayTask19 = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];

let resultString = arrayTask19.join(',');

document.write("<hr>Результат<br>" + resultString);