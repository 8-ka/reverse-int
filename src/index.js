module.exports = function reverse (num) {
    let result = '';
    let numAbs = Math.abs(num);
    let strNum = String(numAbs);
    
    for (let i = 1; i <= strNum.length; i++) {
        result += strNum[strNum.length - i];
    };
    
    return Number(result)
}
