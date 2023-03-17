function toUpper(params) {
    let newArr = [];

    for(i=0;i<params.length;i++) {
        newArr.push(params[i].toUpperCase());
    }

    console.log(newArr);
}

function arrayDouble(params) {
    let newArr = [];

    params.forEach(function(param) {

        newArr.push(param);
        newArr.push(param);
    });

    console.log(newArr);
}

function arraySum(numbs) {
    let total = 0;

    numbs.forEach(function(numb) {
        total += numb;
    });

    console.log(numbs);
    console.log("The total of the array is " + total);
}