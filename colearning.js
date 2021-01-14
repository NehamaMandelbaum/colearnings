const items = [{
    name: 'sabonete',
    price: 20
}, {
    name: 'shampoo',
    price: 40
}, {
    name: 'creme',
    price: 80
}, {
    name: 'cotonete',
    price: 5
}]
let expensiveItem = null;
for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (i === 0) {
        expensiveItem = currentItem
    } else if (i !== 0 && currentItem.price > expensiveItem.price) {
        expensiveItem = currentItem
    }
}
    console.log(expensiveItem)



