/*
 Actividad en clase de JavaScript
 Do Hyun Nam, A01025276

 De preferencia correr con node js, 
  pero si no lo tiene se puede correr en el navegador con el archivo index.html o 
  ingresando al link de js1.dhnam.space.
 */

// Ejercicio 1
const noRepeat = (str) => {
  let strLow = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (strLow.indexOf(char) === strLow.lastIndexOf(char)) {
      return str.charAt(i);
    }
  }

  return "No hay caracteres unicos";
};

// Ejercicio 2
const bubbleSort = (arr) => {
  let swapp;
  let n = arr.length - 1;
  let newArr = arr;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (newArr[i] < newArr[i + 1]) {
        let temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return newArr;
};

// Ejercicio 3
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    var left = [];
    var right = [];
    var newArr = [];
    var pivot = arr.pop();
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return newArr.concat(quickSort(left), pivot, quickSort(right));
  }
};

// Ejercicio 4
const ej4_1 = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
};

const ej4_2 = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
};

// Ejercicio 5
class vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  unitVector() {
    let magnitude = this.magnitude();
    return new vector(
      this.x / magnitude,
      this.y / magnitude,
      this.z / magnitude
    );
  }
  sum(vector) {
    return new vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }
  sub(vector) {
    return new vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }
  scalar(scalar) {
    return new vector(this.x * scalar, this.y * scalar, this.z * scalar);
  }
}

// Ejercicio 6
const mcd = (a, b) => {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

// Ejercicio 7
const isOrtogonal = (vector1, vector2) => {
  return (
    vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z === 0
  );
};

// Ejercicio 8
const stringToLeetspeak = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a") {
      newStr += "4";
    } else if (str.charAt(i) === "e") {
      newStr += "3";
    } else if (str.charAt(i) === "o") {
      newStr += "0";
    } else if (str.charAt(i) === "i") {
      newStr += "1";
    } else if (str.charAt(i) === "s") {
      newStr += "5";
    } else {
      newStr += str.charAt(i);
    }
  }

  return newStr;
};

// Ejercicio 9
const returnFactors = (num) => {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

// Ejercicio 10
const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

/** Testing */

// Test Arrays
let arr1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
let arr2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8];
let arr3 = [1, 6, 9, 10, 14, 16, 18, 18, 1, 2, 2];

// Test Strings
let str1 = "Hola Mundo";
let str2 = "abacddbec";
let str3 = "Never odd or even";

/** Ejercicio 1
 * h
 * e
 * no hay
 */
console.log(
  "Ejercicio 1\n",
  noRepeat(str1),
  "\n",
  noRepeat(str2),
  "\n",
  noRepeat(str3),
  "\n-------------------------------------\n"
);

/** Ejercicio 2
 * [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [6, 12, 13, 13, 14, 15, 15, 17]
 * [1, 1, 2, 2, 6, 9, 10, 14, 16, 18, 18]
 */
console.log(
  "Ejercicio 2\n",
  bubbleSort(arr1),
  "\n",
  bubbleSort(arr2),
  "\n",
  bubbleSort(arr3),
  "\n-------------------------------------\n"
);

/** Ejercicio 3
 * [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [6, 12, 13, 13, 14, 15, 15, 17]
 * [1, 1, 2, 2, 6, 9, 10, 14, 16, 18, 18]
 */
console.log(
  "Ejercicio 3\n",
  quickSort(arr1),
  "\n",
  quickSort(arr2),
  "\n",
  quickSort(arr3),
  "\n-------------------------------------\n"
);

/** Ejercicio 4.1
 * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [2, 1]
 */
console.log(
  "Ejercicio 4.1\n",
  ej4_1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  "\n",
  ej4_1([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
  "\n",
  ej4_1([1, 2]),
  "\n-------------------------------------\n"
);

/** Ejercicio 4.2
 * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [2, 1]
 */
console.log("Ejercicio 4.2\n");
l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
l2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
l3 = [1, 2];
ej4_2(l1);
console.log(l1, "\n");
ej4_2(l2);
console.log(l2, "\n");
ej4_2(l3);
console.log(l3, "\n-------------------------------------\n");

/** Ejercicio 5
 * vector 1 -> x = 1, y = 2, z = 3
 * vector 2 -> x = 2, y = 3, z = 1
 * vector 3 -> x = 3, y = 1, z = -9
 */
console.log("Ejercicio 5\n");
const vector1 = new vector(1, 2, 3);
console.log(
  "Vector1 con los siguientes valores: ",
  "\n",
  "x: ",
  vector1.x,
  " y: ",
  vector1.y,
  " z: ",
  vector1.z
);
const vector2 = new vector(2, 3, 1);
console.log(
  "Vector2 con los siguientes valores: ",
  "\n",
  "x: ",
  vector2.x,
  " y: ",
  vector2.y,
  " z: ",
  vector2.z
);
const vector3 = new vector(3, 1, -9);
console.log(
  "Vector3 con los siguientes valores: ",
  "\n",
  "x: ",
  vector3.x,
  " y: ",
  vector3.y,
  " z: ",
  vector3.z,
  "\n-------------------------------------\n"
);

/** Ejercicio 6
 * 6
 * 45
 * 1
 */
console.log(
  "Ejercicio 6\n",
  mcd(12, 6),
  "\n",
  mcd(45, 90),
  "\n",
  mcd(57, 94),
  "\n-------------------------------------\n"
);

/** Ejercicio 7
 * false
 * false
 * true
 */
console.log(
  "Ejercicio 7\n",
  isOrtogonal(vector1, vector2),
  "\n",
  isOrtogonal(vector1, vector3),
  "\n",
  isOrtogonal(vector2, vector3),
  "\n-------------------------------------\n"
);

/** Ejercicio 8
 * H0l4 Mund0 
 * 4b4cddb3c 
 * N3v3r 0dd 0r 3v3n 
 */
console.log(
  "Ejercicio 8\n",
  stringToLeetspeak(str1),
  "\n",
  stringToLeetspeak(str2),
  "\n",
  stringToLeetspeak(str3),
  "\n-------------------------------------\n"
);

/** Ejercicio 9
 * [ 1, 2, 3, 4, 6, 12 ] 
 * [ 1, 3, 5, 15 ] 
 * [
     1,    2,    3,     4,    5,    6,    8,    9,
    10,   12,   15,    16,   18,   20,   24,   25,
    30,   36,   40,    45,   48,   50,   60,   72,
    75,   80,   90,   100,  120,  125,  144,  150,
   180,  200,  225,   240,  250,  300,  360,  375,
   400,  450,  500,   600,  720,  750,  900, 1000,
  1125, 1200, 1500,  1800, 2000, 2250, 3000, 3600,
  4500, 6000, 9000, 18000
 ] 
 */
console.log(
  "Ejercicio 9\n",
  returnFactors(12),
  "\n",
  returnFactors(15),
  "\n",
  returnFactors(18000),
  "\n-------------------------------------\n"
);

/** Ejercicio 10
 * [55, 34, 21, 13, 8, 5,  3,  2,  1] 
 * [9, 8, 7, 6, 5, 4, 3, 2, 1] 
 * [18, 16, 14, 10, 9,  6,  2,  1] 
 */
console.log(
  "Ejercicio 10\n",
  removeDuplicates(arr1),
  "\n",
  removeDuplicates(arr2),
  "\n",
  removeDuplicates(arr3),
  "\n-------------------------------------\n"
);
