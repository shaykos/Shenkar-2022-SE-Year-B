const MaxNum = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

const PrintXTimes = (str, n) => {
    for (let i = 0; i < n; i++)
        console.log(str);
}

const DigitsAfterDot = (num) =>{
    //int.Parse() == parseInt()
    //1.2345
    // 1.2345 - 1 = 0.2345
    // 12.345 - 12 = 0.345
    // 123.45 - 123 = 0.45
    // 1234.5 - 1234 = 0.5
    // 12345.0 - 12345 = 0
    let counter = 0;
    while(num - parseInt(num) > 0){
        counter++;
        num *= 10;
    }
    return counter;
}

const DigitsAfterDotString = (num) =>{
    let str = num.toString();
    console.log(`str.split('.') =>`, str.split('.'));
    console.log(`str.split('.')[1] =>`, str.split('.')[1])
    return str.split('.')[1].length;
}

module.exports = {MaxNum, PrintXTimes, DigitsAfterDot, DigitsAfterDotString}