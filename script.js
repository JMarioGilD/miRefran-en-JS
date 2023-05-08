// 1.Declara una variable llamada miRefran.
let miRefran;

// 2.En otra línea asigna un refrán cualquiera a esa variable.
miRefran = "Recuerda siempre que tu enfoque determina tu realidad";

// 3.Declara una variable llamada longitudRefran y asigna a esa variable la cantidad de letras de miRefran.
let longitudRefran = miRefran.length;
console.log(longitudRefran);

// 4.En otra línea asigna a la variable novenaLetra el valor de la novena letra del refrán.
let novenaLetra = miRefran[4];
console.log(novenaLetra);

// 5.En otra línea asigna a la variable ultimaLetra el valor da la última letra del refrán.
let ultimaLetra = miRefran[52];
console.log(ultimaLetra);

// 6.Busca el índice de la cadena "que" en tu refrán y asignalo a la variable indicePalabra. Si el índice es menor que cero busca cualquier otra preposición hasta que sea mayor a 0.
let indicePalabra = miRefran.indexOf("que");
console.log(indicePalabra);

// 7.reemplaza la preposición encontrada por la cadena "(palabra robada)"
miRefran = miRefran.replace("que", "palabra robada");
document.write(miRefran);

// 8.Convierte a mayúsculas todos los caracteres de tu refrán.(*)
console.log(miRefran.toUpperCase('Recuerda siempre que tu enfoque deteermina tu realidad'))

