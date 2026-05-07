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

// problem 3