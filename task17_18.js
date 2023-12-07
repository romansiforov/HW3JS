// 17

document.write("<hr>");
document.write(`
1. Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив 
на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер 
елемента масиву.
2. Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.
`);

const arrayLenght = parseInt(prompt("Enter array lenght"));

const arrayTask17_18 = new Array(arrayLenght);
for (let i = 0; i < arrayTask17_18.length; i++) {
    arrayTask17_18[i] = i + 1;
}

document.write("<hr>" + arrayTask17_18 + "<hr>");

for (let i = 0; i < arrayTask17_18.length; i++) {
    if (arrayTask17_18[i] % 2 == 0) {
        document.write(`<span style='background-color:red'>${arrayTask17_18[i]}</span>`);
        continue;
    }
    document.write(`<p>${arrayTask17_18[i]}</p>`)
}