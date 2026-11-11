"use strict";

// === Вариант 1 ===
const totalTasks = 12;
const completedTasks = 5;

// Проверка типов и допустимости
const totalIsValid =
  Number.isInteger(totalTasks) && totalTasks >= 0 && totalTasks <= 1000;
const completedIsValid =
  Number.isInteger(completedTasks) && completedTasks >= 0;

if (!totalIsValid || !completedIsValid) {
  console.log("Ошибка: недопустимое количество задач (ожидается целое число 0..1000)");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем существует");
} else if (totalTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const percentage = (completedTasks / totalTasks) * 100;

  let status;
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${percentage.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}