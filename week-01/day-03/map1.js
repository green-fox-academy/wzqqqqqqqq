'user strict'

// create an empty map
var map = new Map()

// Print out whether the map is empty or not
console.log(`Is the map empty:${map.size === 0}`)

// Add the following key-value pairs to the map
map.set(97, 'a')
map.set(98, 'b')
map.set(99, 'c')
map.set(65, 'A')
map.set(66, 'B')
map.set(67, 'C')
console.log(map)
// Print all the keys
for (const k of map.keys()) {
  console.log(k)
}

// print all the values
for (const v of map.values()) {
  console.log(v)
}

// add value D with the key 68
map.set(68, 'D')

console.log(map)

// print the value that is associated with key 99
console.log(map.get(99))

// remove the key-value pair where with key 97
console.log(map.delete(97))
console.log(map)

// print whether there is an associate value with key 100 or not
console.log(`Is there is an associate value with key 100 or not: ${map.has(100)}`)

// remove all the key-value pairs
map.clear()
console.log(map)
