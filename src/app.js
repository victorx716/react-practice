import square from './utils'
import add from './utils'

import {isAdult, canDrink} from './person'

console.log('app.js is running successfully')

console.log(square(3))
console.log(add(2, 1))

//person.js

console.log(isAdult(8))
console.log(isAdult(30))

console.log(canDrink(22))
console.log(canDrink(8))