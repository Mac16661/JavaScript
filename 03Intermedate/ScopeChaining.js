//Scope chaining falls under Execution context : Variable Obj ,Scope Chain ,this
var name ="Mac";
console.log("Line number 3", name);

function sayName() {
    var name = "Hitesh"//if u comment this line than below console.log will look for above line for name.
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo() {
        var name ="york"//if you comment this line than it will look for name above.
        console.log("Line number 11", name);//if name variable in line 6 is not available than it will ask for line number 2;
    }
}

sayName();