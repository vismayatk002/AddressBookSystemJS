let AddressBook = require('./AddressBook.js');
let Person = require('./Person.js');


try{
    let book = new AddressBook();
    let contact = new Person();

    const prompt = require('prompt-sync')();
    let firstName = prompt('Enter First Name : ');
    contact.validateName(firstName);
    contact.firstName = firstName;

    let lastName = prompt('Enter Last Name : ');
    contact.validateName(lastName);
    contact.lastName = lastName;

    let address = prompt('Enter Address : ');
    contact.validateAddress(address);
    contact.address = address;

    let city = prompt('Enter City : ');
    contact.validateAddress(city);
    contact.city = city;

    let state = prompt('Enter State : ');
    contact.validateAddress(state);
    contact.state = state;

    let zip = prompt('Enter Zip : ');
    contact.validateZip(zip)
    contact.zip = zip;

    let phoneNo = prompt('Enter Phone Nmuber : ');
    contact.validatePhoneNo(phoneNo);
    contact.phoneNo = phoneNo;

    let email = prompt('Enter E-Mail : ');
    contact.validateEmail(email)
    contact.email = email;

    book.addPerson(contact);
    console.log(book.contactArr);

}catch(err) {
    console.log(err);
}
