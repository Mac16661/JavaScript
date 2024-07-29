function sayHello(name) {
    console.log("This is Subhodip" , name );
    //There is a modern way of writing  this::
    console.log(`Hello there, ${name}. Tell me something about this `);
}

sayHello("Sub");

function namstay () {
    return "hello namastay here";
}

var greet = namstay();

console.log(greet);
console.log(namstay());//printing by avoiding  