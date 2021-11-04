const isPrime = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;

};

const findPrime = (...numbers) =>
    numbers.forEach((number) => {
        if (isPrime(number)) {
            console.log(`${number} Sayı Asaldır`);
        }
    });


const randomNumbers = Array(20)
    .fill(0)
    .map(() => Math.floor(Math.random() * 1000));
findPrime(...randomNumbers);

const numbers = Array(1000)
    .fill(0)
    .map((_, i) => i + 1);

findPrime(...numbers);