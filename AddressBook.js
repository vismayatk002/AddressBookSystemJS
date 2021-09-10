
module.exports = class AddressBook{
    
    addrName;
    contactArr = new Array();

    constructor(addrName){
        this.addrName = addrName;
    }
    addPerson(contact){
        this.contactArr.push(contact);
    }
}


