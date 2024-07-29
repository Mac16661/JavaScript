var user = "testprep" ; 
 
switch (user){
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("you  access create/delete");
        break;
    case "testprep":
        console.log("you get access to test stuffs");
        break;   
    case "user":
        console.log("they can consume");
        break;

    default:
        console.log("trial account");
        break;

}