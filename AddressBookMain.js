let AddressBook = require('./AddressBook.js');
let Person = require('./Person.js');
let addrArr = new Array();

function addInAddrBook(contact,addrName){
    
    let flag = 1;
    for(const book of addrArr){
        if(book.addrName == addrName){
            book.addPerson(contact);
            flag = 0;
        }
    }
    if(flag == 1){
        let newBook = new AddressBook(addrName);
        newBook.addPerson(contact);
        addrArr.push(newBook);
    }
}

function showAddressBook(){

    for(const book of addrArr){
        console.log('Address Book : ' + book.addrName);
        console.log(book.contactArr);
    }
}

function readContact(){
    let continueFlag;
    do {
        try{
            let contact = new Person();
        
            const prompt = require('prompt-sync')();
            let addrName = prompt('\nIn which Address Book you want to add your contact?');
        
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
        
            addInAddrBook(contact,addrName);
            
        }catch(err) {
            console.log(err);
        }
        const prompt = require('prompt-sync')();
        continueFlag = prompt('\nDo you want to continue? Press 1 :');

    }while(continueFlag == 1);
}
readContact();
showAddressBook();


    
    
