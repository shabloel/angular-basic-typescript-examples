class Customer{

    constructor(private _firstName: string, private _lastName: string){
       
    }


    get firstName(): string{
        return this._firstName
    }

    get lastName(): string{
        return this._lastName
    }

    set firstName(firstName: string){
        this._firstName = firstName;
    }

    set lastName(lastName: string){
        this._lastName = lastName;
    }
}

let myCustomer = new Customer("Michale", "Jordan");

console.log("First name: " + myCustomer.firstName)
console.log("Last name: " + myCustomer.lastName)