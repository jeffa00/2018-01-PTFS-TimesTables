// Prints out the times tables
var firstTable = 1;
var lastTable = 12;

for(var i = firstTable; i <= lastTable; i++){
    console.log("The " + i + "'s table");
    for(var j = 0; j <= 12; j++){
        console.log(i + " x " + j + " = " + i * j);
    }
    if(i < 12){
        console.log("_______________________");
    }
}