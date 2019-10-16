// # Shopping list 2

// - Represent the following products with their prices

//   | Product         | Amount |
//   | :-------------- | :----- |
//   | Milk            | 1.07   |
//   | Rice            | 1.59   |
//   | Eggs            | 3.14   |
//   | Cheese          | 12.60  |
//   | Chicken Breasts | 9.40   |
//   | Apples          | 2.31   |
//   | Tomato          | 2.58   |
//   | Potato          | 1.75   |
//   | Onion           | 1.10   |
var product_database = new Map([
    ['Milk',1.07],
    ['Rice',1.59],
    ['Eggs',3.14],
    ['Cheese',9.40],
    ['Chicken Breasts',50],
    ['Apples',2.31],
    ['Tomato',2.58],
    ['Potato',1.75],
    ['Onion ',1.10],
])
// - Represent Bob's shopping list

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Milk            | 3      |
//   | Rice            | 2      |
//   | Eggs            | 2      |
//   | Cheese          | 1      |
//   | Chicken Breasts | 4      |
//   | Apples          | 1      |
//   | Tomato          | 2      |
//   | Potato          | 1      |
var bob_list = new Map([
    ['Milk',3],
    ['Rice',2],
    ['Eggs',2],
    ['Cheese',1],
    ['Chicken Breasts',4],
    ['Apples',1],
    ['Tomato',2],
    ['Potato',1],
])


// - Represent Alice's shopping list

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Rice            | 1      |
//   | Eggs            | 5      |
//   | Chicken Breasts | 2      |
//   | Apples          | 1      |
//   | Tomato          | 10     |

var alice_list = new Map([
    ['Rice',1],
    ['Eggs',5],
    ['Chicken Breasts',2],
    ['Apples',1],
    ['Tomato',10],
])

// - Create an application which solves the following problems.
//   - How much does Bob pay?
var bob_payment= 0;
bob_list.forEach((name,amount) => {
    bob_payment += product_database.get(amount) * bob_list.get(amount);

});
console.log(bob_payment);

//   - How much does Alice pay?
var alice_payment = 0;
alice_list.forEach((name,amount) => {
    alice_payment += product_database.get(amount) * alice_list.get(amount);

});
console.log(alice_payment);

//   - Who buys more Rice?

if (alice_list.get('Rice')>bob_list.get('Rice')) {
    console.log("alice");
} else if (alice_list.get('Rice')<bob_list.get('Rice')){
    console.log("bob");
}else{
    console.log("same");
}
//   - Who buys more Potato?
var whoBuyMorePotato = key => (bob_list[key] > alice_list[key] ? 'bob' : 'alice');
console.log(whoBuyMorePotato('Potato'));

//   - Who buys more different products?
var total_b = 0;
for (const k of bob_list.keys()) {
    total_b +=1;
}

var total_a = 0;
for (const k of alice_list.keys()) {
    total_a +=1;
}

console.log( total_b > total_a ? 'bob': 'alice');

//   - Who buys more products? (piece)

var total_b2 = 0;
for (const k of bob_list.keys()) {
    total_b2 += bob_list.get(k);
}

var total_a2 = 0;
for (const k of alice_list.keys()) {
    total_a2 += alice_list.get(k);
}

console.log( total_b2 > total_a2 ? 'bob': 'alice');