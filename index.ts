// Create an interface called PersonInterface
interface PersonInterface {
    readonly firstName: string;
    readonly lastName: string; 
    age: number; 
    favoriteColor?: string; 

    toString(): string; //toString() function with no parameters and returns a string
}


// Create an interface called ContactInterface
interface ContactInterface extends PersonInterface { // ContactInterface intends from PersonInterface
    phoneNumber: string; //property called phoneNumber(number)
    email?: string; //optional email (string)

    printContactDetails(): void; //method with no inputs, returns no data, but will log a message to the console

}

// Create a new object variable that has PersonInterface type
let info: PersonInterface = {
    firstName: "Chris",
    lastName: "Ponce",
    age: 28,
    favoriteColor: "blue",

    toString: function() {  //implement the toString() method to return a sentence with the info
        return `${this.firstName} ${this.lastName} is ${this.age} years old and his favorite color is ${this.favoriteColor}.`;
    }
};

function getInfo(print: PersonInterface): void {  //create a function to call the toString() method using dot notation
    console.log(`${print.toString()}`);
}

getInfo(info); // call getInfo() function

// create a new object variable that implements the ContactInterface
let newInfo: ContactInterface = {  //assign all necessary properties
    firstName: "Amber",
    lastName: "Williams",
    age: 25,
    favoriteColor: "pink",
    phoneNumber: "208-550-2732",
    email: "amberPonce00123@gmail.com",

    printContactDetails: function() {  //implement the printContactDetails() method
        return `${this.firstName} ${this.lastName} is ${this.age} years old and her favorite color is ${this.favoriteColor}.\n${this.firstName} can be reached at ${this.phoneNumber} or ${this.email}.`;
    }
};

function getInfo2(print: ContactInterface): void {  //create a function to call the printContactDetails(method)
    console.log(`${print.printContactDetails()}`);
}

getInfo2(newInfo);  // call printContactDetails









