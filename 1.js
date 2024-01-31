// Домашнее задание
// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo = function () {
        console.log(`Name: ${this.name}`);
    }
}
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo = function () {
        console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
    }
}


// // Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// // Вывод:
// // Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    constructor(orderNumber, totalPrice = 0) {
        this.orderNumber = orderNumber;
        this.totalPrice = totalPrice;
        this.products = [];
    };
    addProduct = function (product) {
        this.products.push(product);
        this.totalPrice += product.price;
    };
    getTotalPrice = function () {
        console.log(`Общая сумма заказа: ${this.totalPrice}`);
    }
}

// // Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

// const product3 = new Product("Button", 150);
// order.addProduct(product3);

console.log(order.getTotalPrice()); // Вывод: 600