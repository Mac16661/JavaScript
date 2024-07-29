//TODO: the falsy values and apart from this everything is truthy:
//undefine
//null
//''
//NaN (not a number)

var user = NaN;//it will never execute if there is any falsy values:

if(user){
    console.log("it will print if the condition is true")
}

//COERSION::
//TODO: it means the value and the property( or u can say typeof )

var use = "2"
if(2 == use){
    console.log("it will execute");//as it is just checking the property.
}

if(2  === use){
    console.log("if value and property are match")
}//now it is checking value with property ===