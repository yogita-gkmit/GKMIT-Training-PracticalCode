class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class StripePayment {
    pay(amount) {
        console.log(`Paid ${amount} using Stripe.`);
    }
}

class PaymentProcessor {
    constructor() {
        this.paymentMethod = new PayPalPayment(); 
    }

    processPayment(amount) {
        this.paymentMethod.pay(amount);
    }
}

// Usage
const processor = new PaymentProcessor();
processor.processPayment(100);

// open-closed princile is voilated here

class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class StripePayment{
    pay(amount) {
        console.log(`Paid ${amount} using Stripe.`);
    }
}

class PaymentProcessor {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod; 
    }

    processPayment(amount) {
        this.paymentMethod.pay(amount);
    }
}

// Usage
const processor = new PaymentProcessor(new PayPalPayment());
processor.processPayment(100);
const pro = new PaymentProcessor(new StripePayment());
pro.processPayment(100);