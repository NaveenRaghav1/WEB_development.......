console.log("hello users ");
console.log("naveen raghav this side 14/03/24");
console.log("lets start the new journey of javascript with akshay saini bhaiya ");
//DAY 1-14/03/2024
//this is a simple a function calling and using call stack method to understand first it go for the function a then b and finally run the global variable x which is outside the function ...
var x = 1;
a();
b();
console.log(x);
function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
}
