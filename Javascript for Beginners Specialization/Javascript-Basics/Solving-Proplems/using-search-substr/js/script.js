var myString = "i am really hungry for some";
console.log(myString);

//using uppercase
var myUpperString = myString.toUpperCase();
console.log(myUpperString);

//using search-substr
var reallyLocation = myString.search("really");
var specificWord = myString.substr(reallyLocation,6);
console.log(specificWord);
specificWord = specificWord.toLocaleUpperCase();

//using replace
var newString = myString.replace("really",specificWord);
console.log(newString)

var foods = ["pie" , "bread" , "milk"]
console.log(myString + " " + foods[0])
console.log( `${myString} ${foods[0]}`)

//using number
for(i=0 ; i < 3 ; i++){
    console.log(myString +   " " + foods[i] + "\n")
}

//using length
for(var i=0 ; i < foods.length ; i++){
    console.log(`${myString} ${foods[i]}  `)
}

//using for of 
for( eachMeal of foods){
    console.log(`${myString} ${eachMeal}  `)
}