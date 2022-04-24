// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Variable which stores the price of oil with its discount
let oilDiscountPrice = 10;

// Exercise 1

// function buy(id) {
//   // 1. Loop for to the array products to get the item to add to cart
//   // 2. Add found product to the cartList array
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id == id) {
//       cartList.push(products[i]);
//     }
//   }
// }

// Exercise 2
function cleanCart() {
  // while (products.length != 0) {
  //   cartList.pop();
  //   i--;
  // }
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
}

// Exercise 4

// function generateCart() {

// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

//Restart the cart array everytime generateCart() is called

// cart = cartList.map((item) => ({
//   ...item,
//   quantity: 1,
//   subtotal: item.price,
// }));

//When an item is repeated, 1 is added to quantity and it´s deleted.

// for (i = 0; i < cart.length; i++) {
//   for (j = 0; j < cart.length; j++) {
//     if (i != j && cart[i].id === cart[j].id) {
//       cart[i].quantity++;
//       cart[i].subtotal += cart[j].price;
//       cart.splice(j, 1);
//       j--;
//     }
//   }
// }
// }

// Exercise 5

// function applyPromotionsCart() {

// Apply promotions to each item in the array "cart"

//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].id === 1 && cart[i].quantity >= 3) {
//       cart[i].subtotalWithDiscount = oilDiscountPrice * cart[i].quantity;
//     } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
//       cart[i].subtotalWithDiscount = (cart[i].price * cart[i].quantity * 2) / 3;
//     }
//   }
// }

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let addItem = products.find((item) => item.id == id);

  products.map((item) => {
    if (addItem.id == item.id && item.quantity >= 1) {
      item.quantity++;
      item.subtotal += item.price;
      
  // Apply promotions to the item if necessary
      if (addItem.id === 1 && addItem.quantity >= 3) {
        addItem.subtotalWithDiscount = oilDiscountPrice * addItem.quantity;
        addItem.subtotal = addItem.subtotalWithDiscount;
      } else if (addItem.id === 3 && addItem.quantity >= 10) {
        addItem.subtotalWithDiscount =
          (addItem.price * addItem.quantity * 2) / 3;
          addItem.subtotal = addItem.subtotalWithDiscount;
      }
    } else if (addItem.id == item.id && !item.quantity) {
      addItem.quantity = 1;
      addItem.subtotal = addItem.price;
      cart.push(addItem);
    }
  });

  //Calculate total price
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += Math.round(cart[i].subtotal * 100) / 100;
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
