// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
let RndArr;
function giveMeRandom(n) {
  const arr = [];
  while (arr.length < n) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
console.log("1, Sum = ", checkArray(giveMeRandom(20)));
function checkArray(Arr) {
  console.log(`1, Arr = ${Arr}`);
  let result = 0;
  for (n of Arr) {
    console.log(`1, ${n} ${n > 5 ? `is bigger than 5` : `is smaller than 5`}`);
    if (n > 5) {
      result += n;
    }
  }
  return result;
}

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
const shoppingCart = [
  {
    Name: "Item 1",
    Price: 30,
    ID: 0,
    Quantity: 1,
  },
  {
    Name: "Item 2",
    Price: 5,
    ID: 1,
    Quantity: 3,
  },
  {
    Name: "Item 3",
    Price: 55,
    ID: 2,
    Quantity: 1,
  },
  {
    Name: "Item 4",
    Price: 2,
    ID: 3,
    Quantity: 20,
  },
  {
    Name: "Item 5",
    Price: 13,
    ID: 4,
    Quantity: 13,
  },
];

function shoppingCartTotal(cart) {
  return eval(shoppingCart.map((i) => i.Price * i.Quantity).join("+"));
  //or
  //     let result = 0;
  // for (item of cart){
  // result += (item.Price * item.Quantity)
  // }
  // return result
}
console.log("2,", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
function addToShoppingCart(item) {
  shoppingCart.push(item);
  return shoppingCart.length;
}
console.log(
  "3,",
  addToShoppingCart({ Name: "Item 6", Price: 22, ID: 5, Quantity: 1 })
);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(cart) {
  const max = Math.max(...cart.map((i) => i.Price));

  return cart.find((i) => (i.price = max));
}
console.log("4,", maxShoppingCart(shoppingCart));

/* EXTRA 5

 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
function latestShoppingCart(cart) {
  return cart[cart.length - 1];
}

console.log("5,", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(n) {
  let count = 0;
  let tries = 0;
  while (count < 3) {
    let num = Math.floor(Math.random() * 9);
    console.log("6,", num);
    if (num > n) {
      count += 1;
    } else {
      count = 0;
    }
    tries+=1
  }
  return tries
}
console.log("6,", loopUntil(4));

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/
let numarr = [12,20,'99',12,22,5]
function average(arr) {
return  eval(arr.join('+')) / arr.length ;
}
console.log("7,", average(numarr));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

function longest(strs) {
return strs.find(s => s.length == Math.max(...strs.map(s => s.length)));

return maxlength;
}
console.log('8,',longest(['Strive','School','Is','Great','Like','Seriously']))

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/
function isnotspam(emailContent) {
    return !emailContent.toUpperCase().includes('SPAM') && !emailContent.toUpperCase().includes('SCAM')
}
console.log('9,',isnotspam('This is a test email with spam'),isnotspam('Is ok for email fiter'))


/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

let sdate = new Date('11/09/2020')

function datediff(date) {
    return  Math.floor((new Date() -date) / (1000 * 60 * 60 * 24));
}
console.log('10,',datediff(sdate) + ' Days ')

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
