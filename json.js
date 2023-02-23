const user = {id: 1, name: 'Gorib Aamir', job: 'developer'};
// Javascript Object Notation (JSON)
console.log(user);

const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 456002,
    isOpen: true,
    isNew: false
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);