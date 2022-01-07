// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length - 1];
  /* return array.pop(); */
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var aAux = []
  for (let i = 0; i < array.length; i++) {
    aAux.push(array[i]+1)
  }
  var array1 = array.map((elemento) => elemento +1)
  return aAux;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var vCad = "";

  for (let i = 0; i < palabras.length; i++) {

    if (i === palabras.length - 1) {
      vCad += palabras[i];
    }
    else{
      vCad += palabras[i]+" ";
    }
  }
/*   return palabras.join(' ') */
  return vCad;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  return array.includes(elemento); 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var vAcu = 0;
  for (let i = 0; i < numeros.length; i++) {
    vAcu += numeros[i];
  }
  return vAcu;
/*   return numeros.reduce() */
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var vAcu = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
     vAcu += resultadosTest[i] 
  }
  vProm = vAcu / resultadosTest.length;

  return vProm
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var vMax = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > vMax) {
      vMax = numeros[i];
    }
  }
  return vMax;
  /* return Math.max(...numeros) */
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
/*   console.log(arguments.length) */
  if ( arguments.length == 0) {
    return 0;
  }
  else{
    var vAux = 1;
    for (let i = 0; i < arguments.length; i++) {
      /* console.log(arguments[i]); */
      vAux *= arguments[i];
    }
    return vAux;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var vInc = 0;
  for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > 18){
          vInc++;
        }
  }
  return vInc;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  } else{
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n % 2 == 0 || n % 2 == 1) {
    var vAux = n.toString();
    var RegExp = /^9/;
    return RegExp.test(vAux);
  }else{
    return false;
  }
}
/* 
var v = n.charAt(0)
return v; 
*/

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var vFlag = false;
  for(let i = 0; i < arreglo.length-1; i++) {
    /* console.log (`>>>${i}`) */
    for (let j = i+1; j < arreglo.length; j++) {
      /* console.log (`•${j}`) */
      if(arreglo[i] === arreglo[j]) {
        vFlag === false;
      } else{
        vFlag = true;
      }

    }
    if(vFlag === true) {
      return false;
    }
  }
  if (vFlag === false) {
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var aSearch = [ "Marzo", "Noviembre", "Enero"]
  var aF = [];
  for (let i = 0; i < aSearch.length; i++) {
    /* console.log(aSearch[i]); */
      for (let j = 0; j < array.length; j++) {
        /* console.log(array[j]); */
        if (aSearch[i] === array[j]) {
          aF.push(array[j])
          /* console.log(aF); */
        }
      }
  }
  return (aF.length === aSearch.length) ?  aF : "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var aF = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      aF.push(array[i]);
    }
  }
  return aF;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var aCont = [];
  var vAux = numero;
  var vFlag = false;

  for (let i = 0; i < 10; i++) {
/*     console.log(">>>"+vAux) */
    if (vAux === i) {
      vFlag = true;
      break;
    } else{
      vAux = vAux + 2;
      aCont.push(vAux);
    }
  }
  
  if (vFlag) {
    return "Se interrumpió la ejecución"
  } else{
    return aCont
  }

  /* var array = [];
  var suma = numero;
  for (let i = 0; i < 10; i++) {
    suma += 2;
    if(suma === i) break;
    else array.push(suma);
  }
  if (i<10) return "Se interrumpió la ejecución" 
  else return array */
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var aCont = [];
  var vAcu = numero;
  for (let i = 0; i < 10; i++) {
        if (i !== 5) {
          vAcu += 2;    
        }
        else{
          continue;
        }
        /* console.log(vAcu); */
        aCont.push(vAcu);
  }
  return aCont;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
