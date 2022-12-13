var fName = "John";
var lName = "Bradshaw";
var birthDate = "07/07/1994";
var phoneNumber = "(818)675-6932";
var email = "cristian50ramirez@yahoo.com";
var passWord = "CSUN2022fall";
let length = passWord.length;
const hiddenP = '*'.repeat(length);

document.getElementById("fullName").innerHTML = fName + " " + lName;
document.getElementById("birthDate").innerHTML = birthDate;
document.getElementById("phoneNumber").innerHTML = phoneNumber;
document.getElementById("email").innerHTML = email;
document.getElementById("passWord").innerHTML = hiddenP;

var billingAddress = "21921 Lanark Street, Apt. 218";
var city = "Canoga Park";
var state = "CA";
var zipCode = "91304";
var cardNumber = "1234-5678-8901-2345";
var cardExp = "12/23";
var cVV = "001";
var last4 = cardNumber.slice(-4);
let length1 = cVV.length;
const hiddenP1 = '*'.repeat(length1);

document.getElementById("billingAddress").innerHTML = billingAddress;
document.getElementById("city").innerHTML = city;
document.getElementById("state").innerHTML = state;
document.getElementById("zipCode").innerHTML = zipCode;
document.getElementById("cardNumber").innerHTML = "Card ending in ****-" + last4;
document.getElementById("cardExp").innerHTML = cardExp;
document.getElementById("cVV").innerHTML = hiddenP1;