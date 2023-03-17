function displayReceipt(cartArray)
{   
    let total = 0;
    // RESET DIV TO BE EMPTY
    const div = document.getElementById('receipt');
    div.innerHTML = '';

   

    cartArray.forEach(function(single) {
         // Show the receipt and then show total
        const element = document.createElement('div');
        total = total + (single.price * single.quantity);
        element.innerText = 
            single.name + " " + "$" + single.price + ".00" +
            "  *  " + single.quantity
        div.appendChild(element);
    });

    newDiv = document.createElement('div');
    newDiv.innerText = 'Cart total = $' + total;
    div.appendChild(newDiv);
}