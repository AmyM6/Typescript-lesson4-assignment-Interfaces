// Create a new object variable that has PersonInterface type
var info = {
    firstName: "Chris",
    lastName: "Ponce",
    age: 28,
    favoriteColor: "blue",
    toString: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age, " years old and his favorite color is ").concat(this.favoriteColor, ".");
    }
};
function getInfo(print) {
    console.log("".concat(print.toString()));
}
getInfo(info); // call getInfo() function
// create a new object variable that implements the ContactInterface
var newInfo = {
    firstName: "Amber",
    lastName: "Williams",
    age: 25,
    favoriteColor: "pink",
    phoneNumber: "208-550-2732",
    email: "amberPonce00123@gmail.com",
    printContactDetails: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age, " years old and her favorite color is ").concat(this.favoriteColor, ".\n").concat(this.firstName, " can be reached at ").concat(this.phoneNumber, " or ").concat(this.email, ".");
    }
};
function getInfo2(print) {
    console.log("".concat(print.printContactDetails()));
}
getInfo2(newInfo); // call printContactDetails
