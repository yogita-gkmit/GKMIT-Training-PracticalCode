class ShoppingCart {
    calculateTotal(items) {
        let total = 0;
        items.forEach(item => {
            if (item.type === 'book') {
                total += item.price * 0.9; // 10% discount on books
            } else if (item.type === 'electronics') {
                total += item.price;
            }
        });
        return total;
    }
}

// Usage
const cart = new ShoppingCart();
const items = [{ type: 'book', price: 100 }, { type: 'electronics', price: 200 }];
console.log(cart.calculateTotal(items)); // Output: 290

// it is violating open-closed principle 
class Discount{
    applyDiscount(){
        console.log("Discount : 0");
    }
}
class Electronics extends Discount{
    applyDiscount(item){
        return item.price;
    }
}
class Books extends Discount{
    applyDiscount(item){
        return item.price*0.9;
    }
}
class DiscountFactory{
    static getDiscount(itemType){
        if(itemType==="book"){
            return new Books();
        }else if(itemType==="electronics"){
            return new Electronics();
        }else{
            throw new Error("Item type doesn't exists");
        }
    }
}
class ShoppingCart {
    calculateTotal(items) {
        let total = 0;
        items.forEach(item => {
            const product = DiscountFactory.getDiscount(item.type);
        });
        return total;
    }
}

// Usage
const cart = new ShoppingCart();
const items = [{ type: 'book', price: 100 }, { type: 'electronics', price: 200 }];
console.log(cart.calculateTotal(items)); // Output: 290

