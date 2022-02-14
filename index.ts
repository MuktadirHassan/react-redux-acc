const a: string = "Hello world!";

// string, number, Array, null, undefined, bollean, never, unknown
// any

function getLowerCase(str: string) {
  return str.toLowerCase();
}

console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello world!"));
console.log(getLowerCase(""));

const b: number = 234;

function add(number1: number = 23, number2: number): number {
  return number1 + number2;
}

const substract = (number1: number, number2: number): number => {
  return number1 - number2;
};

substract(34, 23);
add(3, 4);
add(54, b);

// Array<T>

const arr2: Array<number | string> = [123, 234, "Tamim"];

const arr: number[] = [123, 234, 456];
const arr1: string[] = ["123", "234", "456"];

type numberAndString = number | string;

const id: numberAndString = 23;

interface IPerson {
  name: string;
  age: number;
  hobby?: string;
}
const person1: IPerson = {
  name: "Tamim",
  age: 22,
  hobby: "Programming",
};

const person2: IPerson = {
  name: "Mezba",
  age: 25,
};

const personArr: Array<IPerson> = [person1, person2];

// Enums

enum Colors {
  color1 = "#ededed",
  color2 = "#ededff",
  color3 = "#ededee",
}

console.log(Colors.color3);

// Generic ->
// function _concat<T>(a: T, b: T) {
//   return a + b;
// }

// _concat<number>(1, 3);
// _concat<string>("Muktaidr", "Tamim");
