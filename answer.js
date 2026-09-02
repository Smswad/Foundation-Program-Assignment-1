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

// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let After2kmCharge = distance - 2;
    let waitingMinutesCharge = (waitingMinutes * 2);
    let isNightCharge = (20 / 100);
    let CostifDay = 0;

    if (distance == 1 || distance == 2) {
        CostifDay = 50 + waitingMinutesCharge;
        if (isNight) {
            return (CostifDay + (CostifDay * isNightCharge));
        } else {
            return CostifDay;
        }
    }
    else if (distance >= 3) {
        CostifDay = (50 + (After2kmCharge * 15)) + waitingMinutesCharge;
        if (isNight) {
            return (CostifDay + (CostifDay * isNightCharge));
        } else {
            return CostifDay;
        }
    }
}

// Question 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won"
    } else if (ballsLeft <= 0) {
        return "Lost"
    } else {
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        let verdict = "";

        if (requiredRate <= 6) {
            verdict = "Comfortable";
        } else if (requiredRate > 6 && requiredRate <= 12) {
            verdict = "Tough";
        } else if (requiredRate > 12) {
            verdict = "Almost Impossible";
        }
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
    }
}