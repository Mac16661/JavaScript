var user = {
    firsrtName : "Subhodip",
    lastName : "Ghosh",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
};

var iPhone = {
    modelName : "iPhone 11" ,
    availableColor : ["red","green","black","white"],
    availableSize : "6 inch",
    portType : "USB-c",
    screen : "OLED",
    noOfCameras : 2,
    cameraSpec : ["WideAngle(12 mp) f 2.0", "primaryCamera(12mp) f 1.8"],
}

console.log(user);

console.log(user.firsrtName);
console.log(user["lastName"]); // it is another way to bring the objects but we need to pass it like as string formate inside an array.

console.log(user.loginCount);
user.loginCount = 4;
console.log(user.loginCount);

console.table(user);


console.log(iPhone);
console.table(iPhone);