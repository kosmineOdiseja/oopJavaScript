
class Person {
	// inside the constructor we can put diferrent varaibles
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// inside the class we can put diferrent methods
	// this method only function to get the name
	getName = () => {

		return this.name;
	}
	// this method only function to get the age
	getAge = () => {

		return this.age 
	}
}
// let say we want to create a new person or template of a persons 
// Name Age 
// "John" "25"
// "Jane" "26"
// "Bob" "27"
// we are creating name and age varbiales and passing them to the constructor 
// the name and age are not accessible outside the constructor
// the way we can access the name and age is by using the getters and setters and in javaScript we use "this" keyword

let Person1 = new Person("John", 25);
let Person2 = new Person("Alius", 44);

// console.log(Person1.getName());

class House{
	constructor(address, price, residents) {
		this.address = address;
		this.price = price;
		this.residents = residents;
	}
	getAddress = () => {
		return this.address;
	}
	getPrice = () => {
		return this.price;
	}
	// what if we want to add more properties to the house class
	// we can add them by using the function below
	getResidents= () => {
		return this.residents;
	}
	addResident = (resident) => {
		this.residents.push(resident)
	}
}
let Pedro = new Person ( "Pedro", 27);
let David = new Person ( "David`", 23);
let Juan = new Person ( "Juan", 20);

let house = new House("Begalybes", "2000000", [Pedro, David]);
house.addResident(Juan);
console.log(house.getResidents());


