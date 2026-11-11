"use strict";

console.log('1. "8" + 2 =', "8" + 2, "| type:", typeof ("8" + 2)); // + - нет
console.log('2. "8" - 2 =', "8" - 2, "| type:", typeof ("8" - 2)); // минус всегда приводит к числовой операции
console.log('3. Number("8") + 2 =', Number("8") + 2, "| type:", typeof (Number("8") + 2)); 
console.log('4. "12" > "3" =', "12" > "3", "| type:", typeof ("12" > "3"));
console.log('5. 12 === "12" =', 12 === "12", "| type:", typeof (12 === "12"));
console.log('6. Number("") =', Number(""), "| type:", typeof Number(""));
console.log('7. Number("text") =', Number("text"), "| type:", typeof Number("text"));
console.log('8. Boolean("false") =', Boolean("false"), "| type:", typeof Boolean("false"));
console.log("9. typeof null =", typeof null, "| type:", typeof (typeof null));
console.log("10. typeof NaN =", typeof NaN, "| type:", typeof (typeof NaN));
