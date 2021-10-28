const Madame = {
    name: "Lady Mademoiselle",
    height: "175",
    weight: "61"
}

function bmiCalc(Madame) {
    return Madame.weight / (Madame.height / 100) ** 2;
}

function range(Madame) {
    const BMI = bmiCalc(Madame);
    if (BMI < 18.5) {
        return "Underweight"
    }
    else if (BMI >= 18.5 && BMI < 25) {
        return "Healthy"
    }
    else {
        return "Overweight"
    }
}

console.log(Madame)
console.log(`BMI is ${bmiCalc(Madame)}`)
console.log(range(Madame))