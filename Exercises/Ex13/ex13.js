function max(numbArr) {

    let maxNumber = -Infinity;

    numbArr.forEach(element => {

        if (element > maxNumber)
            maxNumber = element;
    });

    return maxNumber;
}

function min(numbArr) {

    let minNumber = Infinity;

    numbArr.forEach(element => {
       
        if (element < minNumber)
            minNumber = element;
    });

    return minNumber;
}

function smallestToZero(numArr) {

    let min = Infinity;

    numArr.forEach(num => {

        if (num < 0)
            return;
        else if (num < min)
        {
            min = num;
        }
    });

    return min;
}

function pickApples(fruits)
{
    let count = 0;

    fruits.forEach(fruit => {
        if (count < 2)
        {
            let indx = fruits.indexOf('apple');
            fruits.splice(indx,1);
            count = count + 1;
        }                
    });
}

function pickFruits(fruits)
{
    // Remove 2 Apples and 1 orange
    pickApples(fruits);
    // remove orange
    let indx = fruits.indexOf('orange');
    fruits.splice(indx,1);
}

function pickLastApples(fruits)
{
    // reverse the array
    fruits.reverse();
    pickApples(fruits);
}