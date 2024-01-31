// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const grandGrandMother = {
    name: "grandgrandmother",
}
const grandMother = {
    name: "grandMother",
    __proto__: grandGrandMother,
}
const mother = {
    name: "mother",
    __proto__: grandMother,
}

const daughter = {
    name: "daughter",
    __proto__: mother,
}
// const mom = Object.getPrototypeOf(daughter);
// console.log(mom);
// const grmom = Object.getPrototypeOf(mom);
// console.log(grmom);
// const ancsestors = Object.getPrototypeOf(grmom);
// console.log(ancsestors);
// const grandAncs = Object.getPrototypeOf(ancsestors);
// console.log(grandAncs);
// if( grandAncs == null){
//     console.log("ehf");
// }


// function getPrototypeChain(obj) {
//     const protoChain = [];
//     getPrototype(obj);

//     function getPrototype(objc) {
//         const a = Object.getPrototypeOf(objc);
//         if (a == null) {
//             return protoChain;
//         } else {
//             protoChain.push(a);
//             getPrototype(a);
//         }
//     }
//     return protoChain;
// }

//teacher's version
// function getPrototypeChain(obj) {
//     const protoChain = [];
//     let protoName = Object.getPrototypeOf(obj);
//     while (protoName != null){
//         protoChain.push(protoName);
//         protoName = Object.getPrototypeOf(protoName);
//     }
//     return protoChain;
// }
// const prototypeChain = getPrototypeChain(daughter);
// console.log(prototypeChain);


// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     };
//     introduce = function(){
//         console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
//     };
// }
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

// class Animal {
//     name = "";
//     sound = "";
//     speak = function(){
//         console.log(`${this.sound}`);
//     }
//     constructor(name){
//         this.name = name;
// }
// }

// class Dog extends Animal {
//     sound = "Gav gav";
//     breed = "";
//     fetch = function(){
//         console.log(`The dog ${this.name} has brought you a ball`);
//     };
//     constructor(name, breed = "not defined"){
//             super(name);
//             this.breed = breed;
            
//     }
// }

// const dog1 = new Dog("Rex");
// dog1.speak();
// dog1.fetch();

// class Product{
//     constructor(name, price){
//     this.name = name;
//     this.price = price;
//     }
// }

// class ShoppingCart{
//
//     constructor(customerName, initialTotalCost = 0){
//         this.customerName = customerName;
//         this.initialTotalCost = initialTotalCost;
//         cart = [];
//     };
//     addItem = function(product, quantity = 1){
//         product.quantity = quantity;
//         this.cart.push(product);
//     };
//     getTotalCost = function(){
//         this.cart.forEach(prod => {
//             console.log(prod.price);
//             this.initialTotalCost += prod.price * prod.quantity;
//         });
//         return this.initialTotalCost;
//     }
//     checkout = function(){
//         console.log(`Заказ оформлен на ${this.customerName}. Общая стоимость заказа ${this.initialTotalCost}. Спасибо за покупку! `);
//     }

// }

// const meat = new Product("meat", 100);
// const cheese = new Product("cheese", 40);

// const myShoppingCart = new ShoppingCart("Vera", 0);
// myShoppingCart.addItem(meat);
// myShoppingCart.addItem(cheese, 2);
// console.log(meat.price);
// console.log(myShoppingCart.cart);
// console.log(myShoppingCart.getTotalCost());
// myShoppingCart.checkout();
