var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
function firstElements(arr, n) {
    if (n < 0) {
        const newHeroes = [];
        return newHeroes;
    }
    else {
        const newHeroes = arr.slice(0, n);
        return newHeroes;
    }
}
console.log(firstElements(heroes, 3));