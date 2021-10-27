const Madame = {
    name: "Lady Mademoiselle",
    height: "175 cm",
    weight: "61 kg"
}

console.log(Madame)

function bmicalc(Madame) {
    return Madame.weight / (Madame.height / 100) ** 2
}
console.log(bmicalc(Madame))