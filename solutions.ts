//problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNum = numbers.filter((num: number) => num % 2 === 0);
  return evenNum;
};

// problem 2
const reverseString = (text: string): string => {
  const reverseStr = text.split("").reverse().join("");
  return reverseStr;
};

// problem 3
const checkType = (value: string | number): string => {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
};

// problem 4
const getProperty = <T, k extends keyof T>(obj: T, key: k) => {
  return obj[key];
};

// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

// problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// problem 7
const getIntersection = (firstArr: number[], secondArr: number[]): number[] => {
  const findArr = firstArr.filter((num: number) => secondArr.includes(num));
  return findArr;
};
