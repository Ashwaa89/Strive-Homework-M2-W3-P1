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
  addToShoppingCart({ Name: "Item 6", Price: 22, ID: 5, Quantity: 1})
);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(cart) {
    const max = Math.max(...cart.map(i => i.Price));

    return cart.find(i => i.price = max);
}
console.log("4,", maxShoppingCart(shoppingCart));

/* EXTRA 5

 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

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
