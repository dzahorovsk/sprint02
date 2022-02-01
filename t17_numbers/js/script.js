const varRegex1 = /^[1-9][0-9]?$|^100$/;
const varRegex2 = /\./;
let beginNum;
let endNum;
beginNum = beginVal();
endNum = endVal();
checkDivision(beginNum, endNum);

function beginVal() { 
    let resOut;
    do {
        resOut = +prompt('Enter number for the beginning of a range from 1 to 100 only');
    } 
    while (varRegex1.test(resOut) == false);
    return resOut;
}

function endVal() { 
    let resOut;
    do {
        resOut = +prompt('Enter number for the end of a range from 1 to 100 only');
    } 
    while (varRegex1.test(resOut) == false || beginNum > resOut );
    return resOut;
}

function checkDivision(beginRange, endRange) {
    let arrResult = '';
    for (let i = beginRange; i <= endRange; i++) {
        let compareDiv2 = i / 2;
        let compareDiv3 = i / 3;
        let compareDiv10 = i / 10;
        let resultDiv = '';
        if (varRegex2.test(compareDiv2) && varRegex2.test(compareDiv3)) {
            resultDiv = `${i}  -`; 
            arrResult += `${resultDiv}\n`;
        }
        if (!varRegex2.test(compareDiv2) && varRegex2.test(compareDiv3) && varRegex2.test(compareDiv10)) {
            resultDiv = `${i}  is even`; 
            arrResult += `${resultDiv}\n`;
        }
        if (!varRegex2.test(compareDiv2) && !varRegex2.test(compareDiv3) && varRegex2.test(compareDiv10)) {
            resultDiv = `${i}  is even, a multiple of 3`; 
            arrResult += `${resultDiv}\n`;
        }
        if (varRegex2.test(compareDiv2) && !varRegex2.test(compareDiv3)) {
            resultDiv = `${i}  is a multiple of 3`; 
            arrResult += `${resultDiv}\n`;
        }
        if (!varRegex2.test(compareDiv3) && !varRegex2.test(compareDiv10)) {
            resultDiv = `${i}  is even, a multiple of 3, a multiple of 10`; 
            arrResult += `${resultDiv}\n`;
        }
        if (varRegex2.test(compareDiv3) && !varRegex2.test(compareDiv10)) {
            resultDiv = `${i}  is even, a multiple of 10`; 
            arrResult += `${resultDiv}\n`;
        }
    }
    console.log(arrResult);
}
