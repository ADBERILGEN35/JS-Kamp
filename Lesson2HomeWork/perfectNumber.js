const sumOfDivisors = (number) => {
    let sum = 1;
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
};

const isPerfectNumber = (...number) => {
    numbers.forEach((number) => {
        sumOfDivisors(number) == number * 2
            ? console.log(`${number} mükemmel sayıdır.`)
            : console.log(`${number} mükemmel sayı değildir.`);
    });
};

const numbers = Array(1000)
    .fill(0)
    .map((_, i) => i + 1);

isPerfectNumber(...numbers);