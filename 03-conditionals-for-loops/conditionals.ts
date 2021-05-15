let cats : string[] = ["Tiger", "Lion", "Leopard"];

for(let cat of cats){
    console.log(cat);
    if(cat == "Lion"){
        cats.push("Mouse");
    }
}

console.log(cats);