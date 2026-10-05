"use strict";
// Week 11 - TypeScript
class Salon {
    service;
    constructor(service) {
        this.service = service;
    }
    displayDetails() {
        console.log("Service: " + this.service.name);
        console.log("Price: Rs." + this.service.price);
    }
}
function calculateTotal(price, quantity) {
    return price * quantity;
}
// Create service object
let service = {
    name: "Hair Cut",
    price: 200
};
// Create Salon object
let salon = new Salon(service);
salon.displayDetails();
// Calculate total
let total = calculateTotal(200, 2);
console.log("Total: Rs." + total);
