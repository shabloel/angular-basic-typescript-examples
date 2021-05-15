console.log("Basic for loop");
console.log(" ")

for(let i = 0; i < 5; i++ ){
    console.log(i)
}

console.log("array for loop")
console.log(" ")

let listNumbers : number[] = [1, 2, 4, 5, 9]

for(let i = 0; i < listNumbers.length; i++){
    console.log(listNumbers[i]);
}

console.log("calculate average")
console.log(" ")

let total : number = 0;

for(let i of listNumbers){
    total+=i;
    console.log("Total: " + total);
}

let average : number;

average = total/listNumbers.length;

console.log("average: " + average)


let cars : string[] = ["Ferrari", "Porsche", "Austin Martin"]

for(let car of cars){
    console.log(car);
}