function addFruit(name)
{
    const div = document.getElementById('cart');
    const element = document.createElement('div');

    element.innerText = name;
    div.appendChild(element);
}

function clearFruit()
{
    const div = document.getElementById('cart');
    div.innerHTML = '';
}