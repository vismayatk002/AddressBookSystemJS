let AddressBook = require('./AddressBook.js');
let Person = require('./Person.js');
let addrArr = new Array();

function addContact(){
    

    try{
        let contact = new Person();
    
        const prompt = require('prompt-sync')();
        let addrName = prompt('\nIn which Address Book you want to add your contact?');
    
        let firstName = prompt('Enter First Name : ');
        contact.validateName(firstName);
        if(isPersonExist(firstName)){

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
            console.log("Your Contact added ..");
        }
        else{
            console.log("Contact already exist !");
        }
        
    }catch(err) {
        console.log(err);
    }
}

function isPersonExist(firstName){

    let flag = 1;
    for(const book of addrArr){
        
        if(book.contactArr.some(contact => contact.firstName === firstName)){
            flag = 0;
        }
    }
    if(flag == 1){
        return true;
    }
    else{
        return false;
    }
}

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

function editContact(){

    const prompt = require('prompt-sync')();
    let addrName = prompt('Enter name of Address Book :');
    
    for(const book of addrArr){
        if(book.addrName == null){
            console.log("Couldn't find the Address Book..");
        }
        else{
            let flag = 1;
            let editName = prompt('Enter the first name of person :');
            for(const contact of book.contactArr){
                if(contact.firstName == editName){
                    let newAddress = prompt('Enter the new Address :');
                    contact.address = newAddress;
                    flag = 0;;
                    
                }
            }
            if(flag == 1){
                console.log("Couldn't find the Person..");
            }
            else{
                console.log("Contact Updated ...");
            }
        }
    }
}

function deleteContact(){

    const prompt = require('prompt-sync')();
    let addrName = prompt('Enter name of Address Book :');
    
    for(const book of addrArr){
        if(book.addrName == null){
            console.log("Couldn't find the Address Book..");
        }
        else{
            let flag = 1;
            let deleteName = prompt('Enter the first name of person :');
            for( let i = 0; i < book.contactArr.length; i++){ 
                                   
                if (book.contactArr[i].firstName === deleteName) { 
                    book.contactArr.splice(i, 1); 
                    i--; 
                    flag = 0;
                }
            }
            
            if(flag == 1){
                console.log("Couldn't find the Person..");
            }
            else{
                console.log("Contact Deleted ...");
            }
        } 
    }    
}

function contactsCount(){

    const prompt = require('prompt-sync')();
    let addrName = prompt('Enter name of Address Book :');
    let count = 0;
    for(const book of addrArr){
        if(book.addrName == null){
            console.log("Couldn't find the Address Book..");
        }
        else{
            count = book.contactArr.length;
            console.log('Count of Contacts in the Address Book : ' + count);
        }
    }
}

function searchPerson(){

    const prompt = require('prompt-sync')();
    let addrName = prompt('Enter name of Address Book :');
    for(const book of addrArr){
        if(book.addrName == null){
            console.log("Couldn't find the Address Book..");
        }
        else{
            let person = book.contactArr.filter(function (contact) {
                return contact.city === 'Calicut';
              }).map(function (contact) {
                return contact;
              });
              console.log(person);
        }
    }
}

function showMenu(){

    let continueFlag;
    do{
        const prompt = require('prompt-sync')();
        console.log("\n---------------------------");
        console.log("\n### Address Book Menu ###");
        console.log("\n---------------------------");
        console.log("\n1.Add Contact \n2.Display Address Book \n3.Edit Contact \n4.Delete Contact \n5.Count of Contacts \n6.Search person by City");
        
        let option = prompt("\nChoose your option : ");
	    
        switch(option){
            case "1" :
                addContact();
                break;
            case "2" :
                showAddressBook();
                break;
            case "3" :
                editContact();
                break; 
            case "4" :
                deleteContact();
                break; 
            case "5" :
                contactsCount();
                break;
            case "6" :
                searchPerson();
                break;   
            default :
                console.log("\nInvalid option");
        }
        
        continueFlag = prompt('Do you want to continue? Press 1 :');

    }while(continueFlag == 1);

    console.log("\nThank you for using Address Book System !!");
}
showMenu();