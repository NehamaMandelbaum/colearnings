
let getProducts = (price1 = undefined, price2 = undefined, isEnable = undefined, Favorite = undefined) => {
    const products = [{
        name: 'smartphone',
        price: 2294,
        enable: true,
        favorite: true 
    }, {
        name: 'geladeira 01',
        price: 3514,
        enable: false,
        favorite: true
    }, {
        name: 'geladeira 02',
        price: 1519,
        enable: true 
    }, {
        name: 'radio',
        price: 1200,
        enable: false,
        favorite: true
    }]
    var resultado = products 
    if (price1 !== undefined && price2 !== undefined){
         resultado = resultado.filter(product => {
            return product.price > price1 && product.price < price2
        })
    }
    if (isEnable != undefined){
        resultado = resultado.filter(product => {
            return product.enable === isEnable
        
        })   
    }
    if (Favorite != undefined){
        resultado = resultado.filter(product => {
            return product.favorite === Favorite
        })   
    }
   return resultado
} 

console.log(getProducts(1000, 2000))

console.log(getProducts (undefined, undefined, true, true))

// To do: fazer um if que valide se os dois parâmetros são verdadeiros. (retornar favoritos que estão disponíveis) - Já consegui - consegue conferir? 

// Retornar favoritos que NÃO estão disponíveis. - preciso de ajuda

// Fazer um filtro de preço - preciso de ajuda



