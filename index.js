// Declaring a variable using Var
var customerName = 'bob' ;

//Function to uppercase the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
//Declaring a global variable from inside a function
function setBestCustomer() {
    bestCustomer = 'not bob';
}
//Overwrite the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
//Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';
//Attempt to change a constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Steve';
}