let Counter = 0;

function change() {
    let textBox = document.getElementById('todo-button');
    textBox.innerText = "Done";
}

function CountUp()
{
    let div = document.getElementById('counter');
    Counter = Counter + 1;
    div.innerText = Counter;

}

function CountDown()
{
    let div = document.getElementById('counter');
    let count = 0;
    Counter = Counter - 1;
    div.innerText = Counter;
}

function AddTextToBody()
{
    let value = document.getElementById('textBox');
    let element = document.createElement('div');
    element.innerText = value.value;
    document.body.appendChild(element);

}