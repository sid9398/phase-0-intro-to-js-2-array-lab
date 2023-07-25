const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveLastCat(){
    cats.pop()
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveFirstCat(){
    cats.shift()
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function appendCat(Broom){
    const newCats = [...cats, Broom]
    return newCats
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function prependCat(Arnold){
    const newList = [Arnold, ...cats]
    return newList
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function removeLastCat(){
    const LastOne = [...cats.slice(0, cats.length - 1)]
    return LastOne
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function removeFirstCat(){
    const Finally = cats.slice(1)
    return Finally
}