var num1 = 7;
var num2 = 6;

console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);

//calculating discount:  D = (L-S)/L * 100  
//D =discount price;
//S =selling price;

var sellingPrice = 199
var listingPrice = 799

var discountPercent = (listingPrice - sellingPrice) / listingPrice * 100;
console.log( "discount:" + parseInt(discountPercent) + "% off");

// Type and Operator precedence ::: PRECEDENCE IS JUST LIKE VODMAS

var result = listingPrice > sellingPrice;

console.log(typeof result);//it iells us the type which type of dataType is it::