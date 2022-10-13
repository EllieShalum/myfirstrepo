function calculator(num1, num2, callback) {
    return callback(num1, num2);
}

let add = function (num1, num2) {
    return num1 + num2;
}


const sub = function (num1, num2) {
    return num1 - num2;
}

console.log(calculator(2, 6, (num1, num2) => num1 - num2));

function calculator (num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    if (operator == "-") {
        return num1 - num2;
    }
}

//console.log(calculator(2, 3, "+"));

module.exports = {calculator};


const {calculator} = require("../src/calculator");
const expect = require('chai').expect;

describe('Evaluate calculator', ()=> {
    it('calculator(2, 3, "+") should return 5', ()=> {
        expect(calculator(2, 3, "+")).to.equal(5);
    })

    it('calculator(2, 3, "-") should return -1', ()=> {
        expect(calculator(2, 3, "-")).to.equal(-1);
    })

})

console.log(JSON.stringify(a1) == JSON.stringify(b1))
