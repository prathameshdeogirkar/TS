//union types

function inputType(input: string | number | boolean) {             //by using union types we can assign multiple data types to one variable

    if (typeof input === "string") {
        return `It is a string: "${input}"`;
    }
    else if (typeof input === "string") {
        return `It is a number: ${input}`;
    }
    else if (typeof input === "boolean") {
        return `It is a boolean: ${input}`;
    }

}


console.log(inputType("Learning, Typescript"));
console.log(inputType(10));
console.log(inputType(false));