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
    obj.set(food[i], rand(5, 25))
} 
console.log(obj);


console.log('--------2--------');
// Sukurti Map tipo objektą. Kaip raktus naudoti rand() 10 - 20 skaičius, o kaip reikšmes naudoti food masyvo elementus. 
// Elementai į Map objektą turi būti sudėti eilės tvarka kaip jie sudėti masyve ir visi. 
// Raktų reikšmių eiliškumas, tuo tarpu, turi būti atsitiktinis.

const obj1 = new Map();
const numbs = new Set();

for (let j = 0; j < 120; j++) {
    numbs.add(rand(10, 20))
} 
const array = Array.from(numbs)
console.log(array);

for (let i = 0; i < array.length - 2; i++) {
    obj1.set = (array[i], food[i])
}
console.log(obj1);


console.log('--------3--------');
// Sukurti Map tipo objektą, kaip antro uždavinio Map objekto kopiją (kloną). 
// Sukurtame objekte išrūšiuoti elementus pagal abėcėle priešinga tvarka (z - a).

const obj2 = new Map(obj1);
console.log(obj2);
let array1 = [...obj2];

function Comparator(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;        
    return 0;
}
array1 = array1.sort(Comparator);

const obj3 = new Map(array1);
console.log(obj3);


console.log('--------4--------');
// Sukurti Set tipo objektą. Į jį sudėti food masyvo reikšmes. 
// Iš gauto Set objekto pašalinti visas reikšmes, kuriose antroji raidė yra “a”.

const set = new Set();
for (let i = 0; i < array.length; i++) {
    set.add(food[i]);
    if (food[i], charAt(1) === 'a') {
        set.delete(food[i])
    }
}
console.log(set);


console.log('--------5--------');
// Sukurti Set tipo objektą, kuriame būtų 22 reikšmės rand() 5 - 35 skaičiai.
const set1 = new Set ();

for (let i = 0; i < 160; i++) {
    set1.add(rand(5, 35));
}
console.log(set1);

const newArray = Array.from(set1);
console.log(newArray);

let setNew = new Set();
for (let i = 0; i < newArray.length - 8; i++) {
    setNew.add(newArray[i]);    
}
console.log(setNew);