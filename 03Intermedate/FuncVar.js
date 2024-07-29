function  getUserRole(name , role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;// break is not necessary here because of the return statement "code will not execute more then return"
        case "subadmin":
            return `${name} is admin with all access to create and delete content`
            break;
        case "testprep":
            return `${name} is access to create and delete text`
            break;
        case "user":
            return `${name} can view the courses ,like and comment`
            break;    
        default:
            return `you dont have a valid id `
            break;
    }
}

console.log(getUserRole("subhodip" ,"user"));
