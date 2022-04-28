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
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

//Total cart price
let totalCartPrice = 0;

// Variable which stores the price of oil with its discount
let oilDiscountPrice = 10;

// ** Nivell II **

// Exercise 7
//Empty the cart
function cleanCart() {
  cart = [];
}

// Apply promotions to the item if necessary and calculates subtotal of any product
function promotion(item) {
  //Id 1 Promotion
  if (item.id === 1 && item.quantity >= 3) {
    item.subtotalWithDiscount = oilDiscountPrice * item.quantity;
    item.subtotal = item.subtotalWithDiscount;
    //Id 3 promotion
  } else if (item.id === 3 && item.quantity >= 10) {
    item.subtotalWithDiscount = parseFloat(((item.price * item.quantity * 2) / 3).toFixed(2));
    item.subtotal = item.subtotalWithDiscount, 2;
  } else {
    item.subtotal = item.quantity * item.price;
  }
}
//Calculate total price
function totalPrice() {
  totalCartPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCartPrice += parseFloat(((cart[i].subtotal * 100) / 100).toFixed(2));
  }
}

function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let addItem = products.find((item) => item.id == id);

  products.map((item) => {
    if (addItem.id == item.id && item.quantity >= 1) {
      item.quantity++;
      promotion(item);
    } else if (addItem.id == item.id && !item.quantity) {
      addItem.quantity = 1;
      addItem.subtotal = addItem.price;
      cart.push(item);
    }
  });
  totalPrice();
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].quantity > 1) {
      cart[i].quantity--;
      promotion(cart[i]);
    } else if (cart[i].id == id && cart[i].quantity == 1) {
      cart.splice(i, 1);
    }
  }
  totalPrice();
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
