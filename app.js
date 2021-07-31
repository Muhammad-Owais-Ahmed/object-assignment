//Q#1:-

var totalAmount = 0
var itemArray = [
{name: "juice", price: "50", quantity: "3"},
{name: "cookie", price: "30", quantity: "9"},
{name: "shirt", price: "880", quantity: "1"},
{name: "pen", price: "100", quantity: "2"},
];
for(var i = 0; i < itemArray.length; i++) {
    var itemPrice  = itemArray[i].price * itemArray[i].quantity;
    totalAmount += itemPrice
    console.log(itemArray[i].name, " = ",  itemPrice);
};
console.log("totalAmount", totalAmount)

//Q#2:-

var object = {
  name: "Owais Ahmed",
  email: "owaisahmed8513@gmail.com",
  password: "owais8513",
  age: 22,
  gender: "Male",
  city: "Karachi",
  country: "Pakistan",
};

if ("age" in object) {
  console.log("age is present in object");
} else {
  console.log("age is not present in object");
}
if ("country" in object) {
  console.log("country is present in object");
} else {
  console.log("country is not present in object");
}
if ("firstName" in object) {
  console.log("firstName is present in object");
} else {
  console.log("firstName is not present in object");
}
if ("lastName" in object) {
  console.log("lastName is present in object");
} else {
  console.log("lastName is not present in object");
}

//Q#3:-

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("Nisar", "Ahmed", 55, "brown");
const myMother = new Person("Samina", "Rukhsana", 45, "blue");


console.log(myFather)
console.log(myMother)