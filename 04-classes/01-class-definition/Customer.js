var Customer = /** @class */ (function () {
    function Customer(customerFirstName, customerLastName) {
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Henk", "Last");
console.log("First Name: " + myCustomer.customerFirstName);
console.log("Last Name: " + myCustomer.customerLastName);
