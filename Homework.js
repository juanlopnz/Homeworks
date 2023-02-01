// Estructuras de datos y algortimos
// Homework
// Nombre: Juan Carlos López Ramirez
// Codigo: 2211464

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const array2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const length = array.length;
console.log("length: ", length);

const isArray = Array.isArray(array);
console.log("isArray: ", isArray);

const at = array.at(2); // at(posición)
console.log("at: ", at);

const concat = array.concat(array2);
console.log("concat: ", concat);

const constructor = new Array("es", "ejemplo");
console.log("Tamaño constructor: ", constructor.length);
console.log("Posición constructor: ", constructor[0])

const copyWithin = array2.copyWithin(0, 1, 2);
console.log("copyWithin: ", copyWithin);
// No entendí cómo funciona

let iterator = array2.entries();
console.log("entries 1: ", iterator.next().value);
console.log("entries 1: ", iterator.next().value);

const every = array.every(x => x > 2)
console.log("every: ", every);

const fill = [...array].fill(0, 1, 8);
console.log("fill: ", fill);

const filter = [...array].filter(x => x > 5);
console.log("filter: ", filter);

const find = array.find(x => x < 10);
console.log("find: ", find);

const findIndex = array.findIndex(x => (x % 2) === 0);
console.log("findIndex: ", findIndex);

const findLast = array.findLast(x => x < 10);
console.log("findLast: ", findLast);

const findLastIndex = array.findLastIndex(x => (x % 2) === 0)
console.log("findLastIndex: ", findLastIndex);

const array3 = ["Perro","Gato","Caballo", ["Pez","Tiburon"]]
const flat = array3.flat()
console.log("flat: ", flat);

const array4 = ["Está lloviendo", "", " en Cali"];
const flatMap = array4.flatMap((x) => x.split(" "));
console.log("flatMap: ", flatMap)

console.log("forEach: ")
const forEach = array.forEach(x => console.log(x * 2));

const from = Array.from("Juan Carlos");
console.log("from:", from);

const includes = array.includes(0, 0)
console.log("includes: ", includes);

const indexOf = array2.indexOf("j")
console.log("indexOf: ", indexOf);

const join = array2.join(", ")
console.log("join: ", join);

console.log("keys: ")
const keys = array2.keys();
for (const x of keys) {
  console.log(x);
}

const array5 = ["a","b", "a", "b", "a", "c", "d"]
const lastIndexOf = array5.lastIndexOf("a")
console.log("lastIndexOf: ", lastIndexOf);

const map = array.map(x => x * 0.5)
console.log("map: ", map);

const of = Array.of(1, 2, 3, 4, 5, 6, 6, 6)
console.log("of: ", of);

const pop = of.pop(); //of es array de prueba
console.log("pop: ", pop);

const push = of.push(7) //of es array de prueba
console.log("push: ", of);

const reduce = array.reduce((x, y) => x + y)
console.log("reduce: ", reduce);

const reduceRight = array.reduceRight((x, y) => x / y)
console.log("reduceRight: ", reduceRight);

const reverse = [...array2].reverse();
console.log("reverse: ", reverse);

const shift = of.shift(); //of es array de prueba
console.log("shift: ", shift);

const slice = array2.slice(2, 6);
console.log("slice: ", slice);

const some = array.some(x => (x % 3) === 0);
console.log("some: ", some);

const array6 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
array6.sort();
console.log("sort: ", array6);

const splice = array6.splice(2, 0, "Diciembre");
console.log("splice: ", array6);

const toLocaleString = array2.toLocaleString();
console.log("toLocaleString: ", toLocaleString);

const toString = array6.toString();
console.log("toString: ", toString);

const unshift = of.unshift(7) //of es array de prueba
console.log("unshift: ", of);

console.log("values: ")
const values = array2.values();
for (const x of values) {
  console.log(x);
}

// ¡¡FIN!!



