class Customer{

    customerFirstName: string
    customerLastName: string

    constructor(customerFirstName : string, customerLastName : string){
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
    }
}

let myCustomer = new Customer("Henk", "Last");

console.log("First Name: " + myCustomer.customerFirstName )
console.log("Last Name: " + myCustomer.customerLastName )