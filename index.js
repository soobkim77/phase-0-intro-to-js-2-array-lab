// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name) ;
}

function destructivelyRemoveLastCat() {
    cats.pop(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift(); 
}

function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}

function prependCat(name) {
    const evenMoreCats = [name, ...cats];
    return evenMoreCats;
}

function removeLastCat() {
    const lessCats = [...cats.slice(0,2)];
    return lessCats
}

function removeFirstCat(){
    const otherCats = [...cats.slice(-2)]
    return otherCats
}