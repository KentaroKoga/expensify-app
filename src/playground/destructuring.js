//
// object destructuring
//

// const person = {
// 	name: 'Kentaro',
// 	age: 26,
// 	location: {
// 		city: 'Fukuoka',
// 		temp: 25
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
// console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
// 	title: 'Ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//
// Array destructuring
//

// const address = ['601-3 Iimori Nishiku', 'Fukuoka', 'Japan', '8190037'];
// const [, city, country = 'Somewhere'] = address;
// console.log(`You are in ${city} ${country}.`);

const item = ['Coffee (hot)', '$2.00', ' $2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);