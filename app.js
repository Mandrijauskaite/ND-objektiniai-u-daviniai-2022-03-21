const food = ['bandelė', 'bulkutė', 'duona', 'batonas', 'pyragas', 'baronka', 'riestainis', 'javainis', 'paplotėlis'];

console.log('--------1--------');
// Sukurti Map tipo objektą. Į jį sudėti rand() 5 - 25 skaičius. Kaip raktus naudoti masyvo food reikšmes.

const obj = new Map();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < food.length; i++) {
    obj.set(food[i], rand(5, 25)); 
} 
console.log(obj);

console.log('--------2--------');

// Sukurti Map tipo objektą. Kaip raktus naudoti rand() 10 - 20 skaičius, o kaip reikšmes naudoti food masyvo elementus. 
// Elementai į Map objektą turi būti sudėti eilės tvarka kaip jie sudėti masyve ir visi. 
// Raktų reikšmių eiliškumas, tuo tarpu, turi būti atsitiktinis.

