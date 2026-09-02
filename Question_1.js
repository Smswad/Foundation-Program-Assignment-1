// Question 1: Value Detective

function describeValue(value) {
    let valueType = typeof value;
    let BooleanType = Boolean(value);
    if (BooleanType) {
        return `${valueType} | truthy`
    }
    else {
        return `${valueType} | falsy`
    }
}
// console.log(describeValue());