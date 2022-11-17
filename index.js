var birinchiSon = prompt("Iltimos faqat son kiriting")
var ikkinchiSon = prompt("Iltimos faqat son kiriting")

var functionExp = function (birinchiSon, ikkinchiSon){
    // console.log(functionExp());
    if (birinchiSon > ikkinchiSon){
        return birinchiSon - ikkinchiSon
    }
    else{
        return ikkinchiSon - birinchiSon 
    }
    return birinchiSon - ikkinchiSon
}

console.log(functionExp(birinchiSon, ikkinchiSon));