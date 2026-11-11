"use strict";

const plannedText = "8";
const completedText = "3";
const additionalText = "2";

// ИСПРАВЛЕНО: явное преобразование строк в числа
const completedTotal = Number(completedText) + Number(additionalText);
const remainingTasks = Number(plannedText) - completedTotal;

console.log("Выполнено:", completedTotal);   // 5
console.log("Осталось:", remainingTasks);    // 3

let controlSum = 0;

// ИСПРАВЛЕНО: <= чтобы включить 4
for (let taskNumber = 1; taskNumber <= 4; taskNumber += 1) {
  controlSum += taskNumber;
}

console.log("Контрольная сумма:", controlSum); // 10