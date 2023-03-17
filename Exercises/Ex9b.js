function convertInch() {
    const value = document.getElementById('value');
    const number = Number(value.value);

    const inch = number / 2.54;
    const element = document.getElementById('result');

    element.innerText = inch + " in";
}

function convertCM() 
{
    const value = document.getElementById('value');
    const number = Number(value.value);

    const cm = number * 2.54;

    const element = document.getElementById('result');

    element.innerText = cm + " cm";
}