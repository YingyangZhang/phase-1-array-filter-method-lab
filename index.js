function findMatching(array, name){   
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, letter){
    return array.filter(driver => driver.toLowerCase().substring(0, letter.length) === letter.toLowerCase());
}

function matchName(array, name){
    return array.filter(driver => driver.name === name);
}