function isSameType(value1, value2) {
    return typeof value1 === typeof value2;
}

// Convert the input properly before comparison
let input1 = prompt("Enter Start of the Range.");
let input2 = prompt("Enter End Of the Range.");

// Helper function to parse input like number, NaN, boolean etc.
function parseInput(input) {
    if (input.toLowerCase() === "nan") return NaN;
    else if (input.toLowerCase() === "true") return true;
    else if (input.toLowerCase() === "false") return false;
    else if (!isNaN(Number(input))) return Number(input);
    else return input;
}

let value1 = parseInput(input1);
let value2 = parseInput(input2);

alert(isSameType(value1, value2));
