var cats = ["Tiger", "Lion", "Leopard"];
for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
    var cat = cats_1[_i];
    console.log(cat);
    if (cat == "Lion") {
        cats.push("Mouse");
    }
}
console.log(cats);
