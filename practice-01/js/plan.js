"use strict";

// === Вариант 1 ===
const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

// Проверки
const totalIsValid =
  Number.isInteger(totalTasks) && totalTasks >= 0 && totalTasks <= 1000;
const completedIsValid =
  Number.isInteger(completedTasks) && completedTasks >= 0;
const dailyIsValid =
  Number.isInteger(dailyLimit) && dailyLimit >= 1 && dailyLimit <= 1000;

if (!totalIsValid || !completedIsValid) {
  console.log("Ошибка: недопустимое количество задач");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем существует");
} else if (!dailyIsValid) {
  console.log("Ошибка: дневная норма должна быть целым числом 1..1000");
} else if (totalTasks === 0 || completedTasks === totalTasks) {
  console.log("Все задачи уже выполнены");
  console.log("Потребуется дней: 0");
} else {
  let remaining = totalTasks - completedTasks;
  let day = 0;

  console.log(`Осталось задач: ${remaining}`);

  while (remaining > 0) {
    day += 1;
    const doneToday = Math.min(dailyLimit, remaining);
    remaining -= doneToday;
    console.log(`День ${day}: выполнено ${doneToday}, осталось ${remaining}`);
  }

  console.log(`Потребуется дней: ${day}`);
}