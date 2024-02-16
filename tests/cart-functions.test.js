const {calculateChange, isSufficientPayment, addItem, removeItem, calculateTotal} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  
  test("Given total 5 and payment 6, it returns 1", () => {
    //Arrange Act 
    let change = calculateChange(5,6); 
    //Assert 
    expect(change).toBeCloseTo(1); 
  });

  test("Given total 12.30 and payment 12.03, returns 0.73", () => {
    //Arrange Act 
    let change = calculateChange(12.30, 13.03); 
    //Assert 
    expect(change).toBeCloseTo(0.73);
  })

  test("Given total 6 and payment 3, returns -3",() => {
    //Arrange Act 
    let change = calculateChange(6,3);
    //Assert
    expect(change).toBeCloseTo(-3); 
  })
  
});

describe("isSufficientPayment", () => {

  test("Given total 5 and payment 6, returns true", () => {
    let response = isSufficientPayment(5,6); 
    expect(response).toBeTruthy(); 
  }); 

  test("Given total 10 and payment 7, return false", () => {
    let response = isSufficientPayment(10,7); 
    expect(response).toBeFalsy();
  }); 

  test("Given total 3 and payment 3, returns true", () => {
    let response = isSufficientPayment(3,3); 
    expect(response).toBeTruthy();
  })

  test("Given total 11 and payment 7, return false", () => {
    let response = isSufficientPayment(10,7); 
    expect(response).toBeFalsy();
  })
});

describe("calculateTotal", () => {
  test("One item with price 4.99 returns 4.99", () => {
    let response = calculateTotal([{name: "Jelly", price: 4.99}]); 
    expect(response).toBeCloseTo(4.99); 
  })

  test("Array of three itms with prices 3.50, 12.99 and 0.03 returns 16.52", () => {
    let response = calculateTotal([{name: "water", price: 3.50}, {name:"movies", price: 12.99}, {name:"sale", price:0.03}]); 
    expect(response).toBeCloseTo(16.52)
  })

  test("empty array returns 0", () => {
    let response = calculateTotal([]); 
    expect(response).toBeCloseTo(0)
  })

  test("array of two items with prices 5.99 and 7.99 returns ", () => {
    let response = calculateTotal([{name:"starbucks", price:5.99}, {name:"Chipotle", price: 7.99}]); 
    expect(response).toBeCloseTo(13.98)
  })
});

describe("addItem", () => {
  test("Check array has item with name:Beans, price:3",() => {
    let arrayTest = [];
    addItem(arrayTest, "Beans", 3)
    expect(arrayTest).toContainEqual({name: "Beans", price:3});
  })

  test("Check array has item with name:Beans, price:3 and name:Sugar, price: 2",() => {
    let arrayTest = [{name:"Sugar",price:2}];
    addItem(arrayTest, "Beans", 3)
    expect(arrayTest).toMatchObject([{name:"Sugar",price:2}, {name: "Beans", price:3}]);
  })

  test("Check array has item with name:Beans, price:3 and name:Sugar, price: 2 and name:Cookie, price: 1",() => {
    let arrayTest = [{name:"Sugar",price:2}, {name: "Beans", price:3}];
    addItem(arrayTest, "Cookie", 1)
    expect(arrayTest).toMatchObject([{name:"Sugar",price:2}, {name: "Beans", price:3}, {name:"Cookie", price: 1}]);
  })
});

describe("removeItem", () => {
  test("Remove first element from array of three items", () => {
    let arrayTest = [{name:"Sugar",price:2}, {name: "Beans", price:3}, {name:"Cookie", price: 1}];
    removeItem(arrayTest, 0); 
    expect(arrayTest).toMatchObject([{name: "Beans", price:3}, {name:"Cookie", price: 1}]); 
  });
  test("Remove last element from array of three items", () => {
    let arrayTest = [{name:"Sugar",price:2}, {name: "Beans", price:3}, {name:"Cookie", price: 1}];
    removeItem(arrayTest, 2); 
    expect(arrayTest).toMatchObject([{name:"Sugar",price:2}, {name: "Beans", price:3}]); 
  });
  test("Remove middle element from array of three items", () => {
    let arrayTest = [{name:"Sugar",price:2}, {name: "Beans", price:3}, {name:"Cookie", price: 1}];
    removeItem(arrayTest, 1); 
    expect(arrayTest).toMatchObject([{name:"Sugar",price:2}, {name:"Cookie", price: 1}]); 
  });
  test("Remove the only element in an array of one item", () => {
    let arrayTest = [{name:"Sugar",price:2}];
    removeItem(arrayTest, 0); 
    expect(arrayTest).toHaveLength(0); 
  });
});