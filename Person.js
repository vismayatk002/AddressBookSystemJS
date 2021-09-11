module.exports = class Person{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNo,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }
    validateName(name) {
			
		if(name.charAt(0) == name.charAt(0).toUpperCase()) {
			
			if(name.length < 3) {
				
				throw 'should have minimum 3 letters';
			}
		}
		else {
			throw 'First letter must be caps';
		}
	}
    validateAddress(address) {
			
		if(address.charAt(0) == address.charAt(0).toUpperCase()) {
			
			if(address.length < 4) {
				
				throw 'should have minimum 4 letters';
			}
		}
		else {
			throw 'First letter must be caps';
		}
	}
    validateZip(zip) {
			
		let length = zip.toString().length;;
		if(length > 7) {
			throw 'Invalid Zip';
		}
	}
    validatePhoneNo(phoneNo) {
		
		let phoneNoRegex = RegExp('91[0-9]{10}');
		if(!phoneNoRegex.test(phoneNo)) {
			throw 'Invalid Mobile number';
		}
	}
    validateEmail(email) {
		
		let emailRegex = RegExp('^(.+)@gmail(.+)$');
		if(!emailRegex.test(email)) {
			throw 'Invalid Mobile number';
		}
	}
}

