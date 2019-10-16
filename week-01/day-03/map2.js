/* eslint-disable semi */
/* eslint-disable space-before-blocks */
/* eslint-disable no-multiple-empty-lines */
'user strict'

// create a map where the keys are strings and the value are strings with initials values
var m = new Map([['978-1-60309-452-8', 'A letter to do'], ['978-1-60309-459-7', 'Lupus'], ['978-1-60309-444-3', 'Red Panda and Moon Bear'], ['978-1-60309-461-0', 'The Lab']])

// print all the key-value pairs in the following format

for (const k of m.keys()) {
  console.log(`${m.get(k)} (ISBN:${k})`)
};

// remove the key value with key 978-1-60309-444-3
m.delete('978-1-60309-444-3')
console.log(m)

// remove the key value pairs with The Lab
for (const k of m.keys()){
  if (m.get(k) === 'The Lab') {
    m.delete(k)
  }
};

console.log(m);

// add the following key-value pairs to the map
m.set('978-1-60309-450-4', 'They Called Us Enemy');
m.set('978-1-60309-450-5', 'Why Did We Trust Him?');

// print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(m.has('478-0-61159-424-8'));

// print the value associated with key 978-1-60309-453-5
console.log(m.get('978-1-60309-453-5'));


