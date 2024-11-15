// Task 4
interface Product {
  productName: string;
  price: number;
}

let arr: Product[] = [
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

function total(arr: Product[]): number {
  let sum = 0;
  arr.forEach((product) => (sum += product.price));
  return sum;
}

console.log(total(arr));


// Task 5
function checkEmail(email: string): boolean {
  const redux = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
  return redux.test(email);
}

console.log(checkEmail("Mohammed@gmail.com"));
console.log(checkEmail("Mohammed-gmail.com"));


/* 
  To Convert from Typescript to JavaScript:

  at First i use "tsc -init" to edit roodDir and OutDir => dist file
  sourceMap for debugger,
  removeComments,
  noImplicitAny,
  noUnusedLocals,
  noUnusedParameters,
  allowUnreachableCode

  then ==> use code "tsc" to convert to JavaScript file into dist
  then use "node .\dist\product.js" Run the JavaScript code
*/
