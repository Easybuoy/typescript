interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User created ${this.name}`);
  }

  register() {
    console.log(this.name);
  }

  payInvoice() {
    console.log(`${this.name} paid invoice`);
  }
}

// let john = new User("John", "john@gmail.com", 40);
// console.log(john.register());
// console.log(john);

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let ezekiel: User = new Member(1, "ezekiel", "ezekiel@gmail.com", 40);
console.log(ezekiel.payInvoice());
