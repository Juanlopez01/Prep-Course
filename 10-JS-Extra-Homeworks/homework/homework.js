// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var pares = {}
  for(i = 0; i < string.length; i++){
    if(pares.hasOwnProperty(string[i])){
        pares[string[i]] = pares[string[i]] + 1
          } else {
           pares[string[i]] = 1
            
          }      
    }return pares
  } 


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus = ''
  let mayus = ''
  for(i = 0; i < s.length; i++){
    if(s[i] === s[i].toLowerCase()){
        minus = minus + s[i]
    } else {
      mayus = mayus + s[i]
    }
  } 
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    let frase = str.split(' ')
    let final = frase.map(function(ele){
      return ele.split('').reverse().join('')
    })
    return final.join(' ')

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numerostr = numero.toString();
  let numerostrrev = numerostr.split('').reverse().join('');
  if(numerostr === numerostrrev){
    return 'Es capicua'
  } else {
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadarray = cadena.split('')
  let cadfinal = []
  for(i = 0; i < cadarray.length; i++){
    if(cadarray[i] !== 'a' && cadarray [i] !== 'b' && cadarray[i] !== 'c'){
        cadfinal.push(cadarray[i])
    }
  } 
    return cadfinal.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrayorden = arr.sort(function(a , b){
    return a.length - b.length
  })
    return arrayorden
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let inter = []
  let mayor = undefined
  if(arreglo1.length >= arreglo2.length){
    mayor = arreglo1.length
  } else {
    mayor = arreglo2.length
  }
  for(i = 0; i < mayor; i++){
    switch(arreglo1.includes(arreglo2[i])){
      case true:
        inter.push(arreglo2[i])
        break;
      case false: 
       break;
    }
  } 
  return inter
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

