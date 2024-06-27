// let num=[10,20,30,40,50]
// ///[FOR IN] - interar diretamente os as posições dentro da coleção 
// for(n in num){
//     console.log(num[n])
// }
// ///[FOR OF] - interar diretamente os elementos dentro da coleção
// for(n of num){
//     console.log(n)
// }
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }
const objs=document.getElementsByTagName("div")

for(o of objs){
    console.log(o.innerHTML="curso")
}
for(o in objs){
    console.log(objs[o].innerHTML)
}
