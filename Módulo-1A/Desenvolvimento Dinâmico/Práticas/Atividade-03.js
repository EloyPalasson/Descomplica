var array = [1,"a",2,"b",3,"c",4,"d",5,"e",6,"f"];

var novoArrayMap = array.map((element) => {
    if (typeof element === 'number') {
        return element * 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else return element
})
console.log("Esse é o array que vamos aplicar as modificações:",array);
console.log("Esse é o array após as modificações:",novoArrayMap,"\n");

var novoArrayFilter = array.filter((element) => typeof element === 'number');
console.log("Esse é o array filtrado somente com os números: \n",novoArrayFilter,"\n");

var axTotal = 0;
var novoArrayReduce = array.reduce((axTotal, element) =>{
    if (typeof element === 'number') {
        return axTotal += element;
    } else {
        return axTotal;
    }
}, 0)
console.log("Utilizando o reduce e somando todos os núemros do array: \n",novoArrayReduce);
