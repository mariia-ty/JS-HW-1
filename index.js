// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.
const age = 17;
console.log(age);
// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.
let name = "Mariia";
console.log(name);
// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом.
//Вивести значення цієї змінної в консоль.
let isStudent = true;
console.log(isStudent);
// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.
let myString = "Під лежачий камінь вода не тече";
console.log(myString);
// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення.
//Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
let myNumber = 3;
myNumber += 10;
console.log(myNumber);
// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.
let myNull = null;
console.log(myNull);
// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt().
//Після введення імені вивести повідомлення привітання з використанням введеного імені.
let userName = prompt("Enter your name: ");
console.log(userName);
alert("Hello " + userName + "! Welcome to the website.");
// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm().
//Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".
//Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
let confirmation = confirm("Would you like to continue?");
if (confirmation = true) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}
// Створити скрипт який виводить спливаюче попередження за допомогою alert().
//Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm().
//Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!".
//Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
alert("попередження");
let confirmation2 = confirm("Are you sure you want to continue?");
if ((confirmation2 = true)) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}