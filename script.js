function isSameType(value1, value2) {
    if (Number.isNaN(value1) && typeof value2 === "number") {
        return false;
    }
    if (typeof value1 === typeof value2) return true;
    else return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert inputs to numbers if they are numeric

if (!isNaN(value1)) value1 = Number(value1);
if (!isNaN(value2)) value2 = Number(value2);

alert(isSameType(value1, value2));
