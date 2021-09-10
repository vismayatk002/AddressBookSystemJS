let AddressBook = require('./AddressBook.js');
let Person = require('./Person.js');

let book = new AddressBook();
let contact = new Person();

const prompt = require('prompt-sync')();
let firstName = prompt('Enter First Name : ');
contact.firstName = firstName;

let lastName = prompt('Enter Last Name : ');
contact.lastName = lastName;

let address = prompt('Enter Address : ');
contact.address = address;

let city = prompt('Enter City : ');
contact.city = city;

let state = prompt('Enter State : ');
contact.state = state;

let zip = prompt('Enter Zip : ');
contact.zip = zip;

let phoneNo = prompt('Enter Phone Nmuber : ');
contact.phoneNo = phoneNo;

let email = prompt('Enter E-Mail : ');
contact.email = email;

book.addPerson(contact);
console.log(book.contactArr);
