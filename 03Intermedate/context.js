//sayHello()

// function sayHello() {
    //console.log("hi");
//}

// The above statement is a valid statement but what we see in c and c++ we need to define the function first and then we can call it but in js we dont need to do it in this way.

//IN JAVASCRIPT THERE IS SOMETHING KNOWN AS CONTEXT IT KEEP TRACK OF ALL THE FUNCTION SO YOU CAN CALL IT ANYWHERE   

var myName = "Mac";

//if(myName === window.myName){//window is a global variable in js of browser so if you are running this code in chrome or something than it will run but if u try to run this in  the node it will through an error because node dosent have the gobal variable window
    //console.log("this code can be run in browser window")
//}

//there areee global context and execution context : :

//Execution context : variable object , Scope chain , this

//Function declaration are scanned and made  availabe
//Variable declaration are scanned and made undefined


tripper("60");

function tripper(a) {
    var bill = parseInt(a);
    console.log(bill + 4);
}


//bigTripper("250"); if you  put this things here than the code HOISTING things comes up andgive an error because the above function is treated as the variablel which is decleared undefined by the context.SO WE NEED TO CALL IT LATER ON.Like line 40


var bigTripper= function(a) {
    var bill = parseInt(a);
    console.log(bill + 30);
}

bigTripper("250");

console.log(name);//it will give undefine 
var name ="mac";

function sayName() {
    var name= "yo";
    console.log(name);//it is executing this name line 47
}
sayName();

console.log(name);//this is executing the line 43
