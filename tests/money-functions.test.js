const {formatCurrency, getCoins} = require("../src/js/money-functions");

describe("formatCurrency", () => {
  const testCases = [ 
    [0,"$0.00"],
    [1,"$1.00"],
    [1.5,"$1.50"],
    [0.01,"$0.01"],
    [527.6789,"$527.68"],
    [-1,"-$1.00"],
    [-527.6789,"-$527.68"],
    [12.968,"$12.97"],
  ]; 
  test.each(testCases)('given %p as input, return %p', (input, expected) => {
    const result = formatCurrency(input); 
    expect(result).toBe(expected);
  })
});

describe("getCoins", () => {
  test("32 cents produces q:1, d:0, n:1, p:2", () => {
    let result = getCoins(32); 
    expect(result).toMatchObject({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });

  test("10 cents produces q:0, d:1, n:0, p:0", () => {
    let result = getCoins(10); 
    expect(result).toMatchObject({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  })

  test("27 cents produces q:1, d:0, n:0, p:2", () => {
    let result = getCoins(27); 
    expect(result).toMatchObject({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  })

  test("68 cents produces q:2, d:1, n:1, p:3", () => {
    let result = getCoins(68); 
    expect(result).toMatchObject({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  })
});

