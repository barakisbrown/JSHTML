function cartTotal(cartArray) {
    let total = 0;

    cartArray.forEach(function(single) {
        total = total + (single.price * single.quantity);
    });

    console.log("Total number of objects in the cart is " + cartArray.length);
    console.log("The total price in the cart is " + total);

}