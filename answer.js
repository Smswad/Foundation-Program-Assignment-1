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

// Question 2: Bangladesh Weekend Machine

function getDayType(day) {

    switch (day.toLowerCase()) {
        case "friday":
            return "Weekend"
        case "saturday":
            return "Weekend"
        case "sunday":
            return "Working Day"
        case "monday":
            return "Working Day"
        case "tuesday":
            return "Working Day"
        case "wednesday":
            return "Working Day"
        case "thursday":
            return "Working Day"
        default:
            return "Invalid Day"
    }
}

// Question 3: Username Gatekeeper

function validateUsername(call) {
    const CharacterCheck = call.length;
    const CheckSpace = call.includes(" ");
    const ReservedWord = call.toLowerCase().includes("admin");
    if (CharacterCheck < 4) {
        return "Too Short";
    }
    else if (CheckSpace) {
        return "No Space Allowed"
    }
    else if (ReservedWord) {
        return "Reserved Word"
    }
    else {
        return "Available"
    }
}