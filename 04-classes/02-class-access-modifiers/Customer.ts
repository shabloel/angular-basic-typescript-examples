class Customer{

    private _firstName: string
    private _lastName: string

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
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