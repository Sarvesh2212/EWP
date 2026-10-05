// Week 11 - TypeScript

interface Service {
    name: string;
    price: number;
}

class Salon {

    constructor(public service: Service) {
    }

    displayDetails(): void {
        console.log("Service: " + this.service.name);
        console.log("Price: Rs." + this.service.price);
    }
}

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}


// Create service object
let service: Service = {
    name: "Hair Cut",
    price: 200
};


// Create Salon object
let salon = new Salon(service);

salon.displayDetails();


// Calculate total
let total = calculateTotal(200, 2);

console.log("Total: Rs." + total);
