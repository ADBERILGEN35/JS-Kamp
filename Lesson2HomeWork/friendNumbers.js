const sumOfDivisors = (number) => {
    let sum = 1;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
};

const areFriendlyNumbers = (number1, number2) => {
    if (sumOfDivisors(number1) == number2 && sumOfDivisors(number2) == number1) {
        console.log(`${number1} ve ${number2} arkadaş sayılardır.`);
    } else {
        console.log(`${number1} ve ${number2} arkadaş sayılar değildir.`);
    }
};


areFriendlyNumbers(1256, 1189);