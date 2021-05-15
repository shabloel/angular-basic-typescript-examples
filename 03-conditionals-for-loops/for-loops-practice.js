console.log("Basic for loop");
console.log(" ");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("array for loop");
console.log(" ");
var listNumbers = [1, 2, 4, 5, 9];
for (var i = 0; i < listNumbers.length; i++) {
    console.log(listNumbers[i]);
}
console.log("calculate average");
console.log(" ");
var total = 0;
for (var _i = 0, listNumbers_1 = listNumbers; _i < listNumbers_1.length; _i++) {
    var i = listNumbers_1[_i];
    total += i;
    console.log("Total: " + total);
}
var average;
average = total / listNumbers.length;
console.log("average: " + average);
var cars = ["Ferrari", "Porsche", "Austin Martin"];
for (var _a = 0, cars_1 = cars; _a < cars_1.length; _a++) {
    var car = cars_1[_a];
    console.log(car);
}
