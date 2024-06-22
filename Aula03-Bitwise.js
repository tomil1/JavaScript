let n1=10
let n2=11

let res = n1 & n2
/// somente quando ouver equivalencia de bit 1 nos dois valores retorna 1
/// Binarios
/// 10 = 00001010
/// 11 = 00001011
///    = 00001010 = 10
console.log("Operadro '&': ", res)

let res1 = n1 | n2
/// onde ouver o bit 1 retorna 1 independente da equivalencia
/// Binarios 
/// 10 = 00001010
/// 11 = 00001011
///    = 00001011 = 11 
console.log("Operadro '|': ", res1)

let res2 = n1 ^ n2
/// onde ouver equivalencia retorna bit 0
/// Binarios 
/// 10 = 00001010
/// 11 = 00001011
///    = 00000001 = 1
console.log("Operadro '^': ", res2)

///DESLOCAMENTO DE BIT - PODEMOS DELOCAR QUANTOS BITS QUIRSEMOS
let res3 = n1 << 1
///desloncamento para esquerda
/// 10 = 00001010
///    = 00010100 = 20 
console.log("Operadro '<<': ", res3)
let res4 = n1 >> 1
///desloncamento para direita
/// 10 = 00001010
///    = 00000101 = 5 
console.log("Operadro '>>': ", res4)