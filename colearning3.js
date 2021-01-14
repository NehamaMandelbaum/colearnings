/* Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:

let vetor = ["a", "b", "a", "a", "c", "b"]

Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, precisamos retornar este elemento. */
let vetor = ["a", "b", "a", "a", "c", "b"]
let vetor1 = ["a", "d", "d", "b", "c", "b", "c"]
function encontrarIsolado (vetor){
    //var vetorOrdenado = vetor.sort()
    var resultado = undefined 
    /* vetorOrdenado.forEach((elemento, index) => {
        if (vetor[index] == vetor[index +1]){
            index++
        } else {
            resultado = elemento
        } */
    for (var i = 0; i = vetor.length; i++) {
        if (resultado = undefined){
            resultado = vetor[0]
    } else if(resultado != vetor[i]) {
        resultado = vetor[i]
    }
    }
    return resultado
}
console.log(encontrarIsolado(vetor1))