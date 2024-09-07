function getSimplicityOfNumber (number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return  "Значение равно нулю.";
    if (number === 1) return "Значение равно единице.";

    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}

console.log(getSimplicityOfNumber(10));