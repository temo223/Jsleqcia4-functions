//1//
function checkEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEven(4));
console.log(checkEven(7)); 


//2//

function calculateRectangleArea(width, height) {
    const area = width * height;
    return area;
}

const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
console.log(" area of the rectangle is:", area);

//3//

function calculateSquareArea(sideLength) {
    return calculateRectangleArea(sideLength, sideLength);
}

function calculateRectangleArea(width, height) {
    return width * height; 
}

const squareSideLength = 5;
const squareArea = calculateSquareArea(squareSideLength);
console.log(" area of the square is:", squareArea);


//4//

function getRandomNumber() {
    const randomDecimal = Math.random();
    
    const randomNumber = randomDecimal * 100;
    
    const roundedNumber = Math.floor(randomNumber);
    
    return roundedNumber; 
}


const randomNum = getRandomNumber();
console.log("Random number between 0 and 100:", randomNum);


//5//

function getcharacteswithnoalternatenames(charactersarray) {
    const characterswithnoalternatenames = charactersarray.filter(character => character.alternate_names.length === 0);
    
    return characterswithnoalternatenames;
}

const characterswithnoalternatenames = getcharacteswithnoalternatenames(characters);
console.log("characters with no alternate names:", characterswithnoalternatenames);
