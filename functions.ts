function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(getSum(4,5));

let mySum = function(num1: any, num2: any): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }

  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// console.log(mySum("3", "4"));

function getName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

// console.log(getName("Ezekiel", "Ekunola"));

function myFunctionVoid(): void {
  return;
}
