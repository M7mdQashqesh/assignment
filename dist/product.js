"use strict";
let arr = [
    {
        productName: "mouse",
        price: 120,
    },
    {
        productName: "keyboard",
        price: 200,
    },
    {
        productName: "Headphone",
        price: 280,
    },
];
function total(arr) {
    let sum = 0;
    arr.forEach((product) => (sum += product.price));
    return sum;
}
console.log(total(arr));
function checkEmail(email) {
    const redux = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
    return redux.test(email);
}
console.log(checkEmail("Mohammed@gmail.com"));
console.log(checkEmail("Mohammed-gmail.com"));
//# sourceMappingURL=product.js.map