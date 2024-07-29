//TODO: ########### STRING MANIPULATION ##############
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

console.log(text.slice(3, -6));

console.log(text.substring(7, 13));

console.log(text.replace("XYZ", "ABC"));

//TODO: to replace case insensitive str we need to use regular expresssion
// console.log(text.replace("def", "ABC"));

//TODO: Regex or regular expression
let text1 = "Please Visit Microsoft";
console.log(text1.replace(/MICROSOFT/i, "W3School")); //i for flag inscensitive

let text2 = "Please visit Microsoft and Microsoft!";
console.log(text2.replace(/Microsoft/g, "W3Schools")); // g flag:(global match)

let text3 = "     Hello, World";
console.log(text3.toUpperCase());

console.log(text1.concat(" ", text3));

//TODO: to removes to whitespace from a string (from start,end)
console.log(text3.trimStart());
console.log(text3.trimEnd());

console.log(text2.charAt(0));
console.log(text2.charCodeAt(0)); //JS uses UTF-16 no integer between  0 and 65535

console.log(text2[0]);

// text[0] ="A" //will not give any erroe but will not work as well

console.log(text3.split(" ")); //splits on the basis of space
console.log(text3.split(",")); //on the basis of comma
console.log(text3.split("")); // it will return arr of single charecter out of while string

//TODO: ############ STRING SEARCH #################
