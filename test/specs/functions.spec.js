var expect = chai.expect;
var should = chai.should();

describe("Main", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("#numberToString", function() {
    it("should be a function", function() {
      (typeof numberToString).should.equal("function");
    });

    it("should convert the given number to a string", function() {
      var stringNum = numberToString(5);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("5");

      stringNum = numberToString(-260/500);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("-0.52");

      stringNum = numberToString(3.14159265359);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("3.14159265359");
    });
  });

  describe("#increase", function() {
    it("should be a function", function() {
      (typeof increase).should.equal("function");
    });

    it("should add 1 to the given number", function() {
      expect(increase(7)).to.equal(8);
      expect(increase(-1)).to.equal(0);
      expect(increase(-100)).to.equal(-99);
    });
  });

  describe("#decrease", function() {
    it("should be a function", function() {
      (typeof decrease).should.equal("function");
    });

    it("should subtract 1 from the given number", function() {
      expect(decrease(7)).to.equal(6);
      expect(decrease(-1)).to.equal(-2);
      expect(decrease(-100)).to.equal(-101);
    });
  });

  describe("#add", function() {
    it("should be a function", function() {
      (typeof add).should.equal("function");
    });

    it("should add two numbers", function() {
      expect(add(9, 3)).to.equal(12);
      expect(add(0, -272.15)).to.equal(-272.15);
      expect(add(-1, -100)).to.equal(-101);
    });
  });

  describe("#subtract", function() {
    it("should be a function", function() {
      (typeof subtract).should.equal("function");
    });

    it("should subtract the second number from the first", function() {
      expect(subtract(9, 3)).to.equal(6);
      expect(subtract(3, 9)).to.equal(-6);
      expect(subtract(-1, -100)).to.equal(99);
    });
  });

  describe("#multiply", function() {
    it("should be a function", function() {
      (typeof multiply).should.equal("function");
    });

    it("should multiply two numbers", function() {
      expect(multiply(9, 3)).to.equal(27);
      expect(multiply(0, -8)).to.equal(0);
      expect(multiply(-4, 3)).to.equal(-12);
    });
  });

  describe("#divide", function() {
    it("should be a function", function() {
      (typeof divide).should.equal("function");
    });

    it("should divide the first number by the second", function() {
      expect(divide(0, 3)).to.equal(0);
      expect(divide(3, -12)).to.equal(-0.25);
      expect(divide(7, 0)).to.equal(Infinity);
    });
  });

  describe("#square", function() {
    it("should be a function", function() {
      (typeof square).should.equal("function");
    });

    it("should return the square of the given number", function() {
      expect(square(12)).to.equal(144);
      expect(square(-3)).to.equal(9);
      expect(square(1/4)).to.equal(0.0625);
    });
  });

  describe("#calculate", function() {
    it("should be a function", function() {
      (typeof calculate).should.equal("function");
    });

    it("should print the equation to the console", function() {
      calculate("add", 4, 7);
      sinon.assert.calledWithExactly(console.log, "4 + 7 = 11");

      calculate("subtract", 4, 7);
      sinon.assert.calledWithExactly(console.log, "4 - 7 = -3");

      calculate("multiply", 8, 4);
      sinon.assert.calledWithExactly(console.log, "8 * 4 = 32");

      calculate("divide", 8, 4);
      sinon.assert.calledWithExactly(console.log, "8 / 4 = 2");
    });

    it("should return the result of the equation", function() {
      expect(calculate("add", 4, 7)).to.equal(11);
      expect(calculate("subtract", 4, 7)).to.equal(-3);
      expect(calculate("multiply", 8, 4)).to.equal(32);
      expect(calculate("divide", 8, 4)).to.equal(2);
    });
  });

  describe("#isGreaterThan", function() {
    it("should be a function", function() {
      (typeof isGreaterThan).should.equal("function");
    });

    it("should return true if x is greater than y", function() {
      expect(isGreaterThan(7, 4)).to.equal(true);
      expect(isGreaterThan(-45, -31)).to.equal(false);
      expect(isGreaterThan(-9, -9)).to.equal(false);
    });
  });

  describe("#isLessThan", function() {
    it("should be a function", function() {
      (typeof isLessThan).should.equal("function");
    });

    it("should return true if x is less than y", function() {
      expect(isLessThan(4, 7)).to.equal(true);
      expect(isLessThan(19, -31)).to.equal(false);
      expect(isLessThan(28, 28)).to.equal(false);
    });
  });

  describe("#areEqual", function() {
    it("should be a function", function() {
      (typeof areEqual).should.equal("function");
    });

    it("should return true if a and b have equal values and data types", function() {
      expect(areEqual(1, 1)).to.equal(true);
      expect(areEqual(-1/4, -0.25)).to.equal(true);
    });

    it("should return false if values are equal but data types are different", function() {
      expect(areEqual(21, "21")).to.equal(false);
    });
  });

  describe("#minimum", function() {
    it("should be a function", function() {
      (typeof minimum).should.equal("function");
    });

    it("should return the smallest of two values", function() {
      expect(minimum(71, 35)).to.equal(35);
      expect(minimum(-40, -8)).to.equal(-40);
      expect(minimum(-1, -1)).to.equal(-1);
    });
  });

  describe("#maximum", function() {
    it("should be a function", function() {
      (typeof maximum).should.equal("function");
    });

    it("should return the largest of two values", function() {
      expect(maximum(35, 71)).to.equal(71);
      expect(maximum(-40, -8)).to.equal(-8);
      expect(maximum(-1, -1)).to.equal(-1);
    });
  });

  describe("#isEven", function() {
    it("should be a function", function() {
      (typeof isEven).should.equal("function");
    });

    it("should return true if the given number is even", function() {
      expect(2).to.satisfy(isEven);
      expect(-8).to.satisfy(isEven);
      expect(256).to.satisfy(isEven);
    });
  });

  describe("#isOdd", function() {
    it("should be a function", function() {
      (typeof isOdd).should.equal("function");
    });

    it("should return true if the given number is odd", function() {
      expect(1).to.satisfy(isOdd);
      expect(-23).to.satisfy(isOdd);
      expect(97).to.satisfy(isOdd);
    });
  });

  describe("#letterGrade", function() {
    it("should be a function", function() {
      (typeof letterGrade).should.equal("function");
    });

    it("should return a letter grade based on score/total percentage", function() {
      expect(letterGrade(315, 350)).to.equal("A");
      expect(letterGrade(287, 350)).to.equal("B");
      expect(letterGrade(105, 150)).to.equal("C");
      expect(letterGrade(559, 800)).to.equal("D");
      expect(letterGrade(2, 4)).to.equal("F");
    });
  });

  describe("#incrementReviews", function() {
    it("should be a function", function() {
      (typeof incrementReviews).should.equal("function");
    });

    it("should increment the reviews by 1, if property exists", function() {
      var awesomeEatery = incrementReviews({reviews: 1776});
      expect(awesomeEatery.reviews).to.equal(1777);
    });

    it("should set the reviews to 1, if property does not exist", function() {
      var newEatery = incrementReviews({});
      expect(newEatery).to.have.property("reviews");
      expect(newEatery.reviews).to.equal(1);
    });
  });

  describe("#combine", function() {
    it("should be a function", function() {
      (typeof combine).should.equal("function");
    });

    it("should return a string of the words joined with a space", function() {
      var result = combine("saving", "galaxies");
      expect(result).to.be.a("string");
      expect(result).to.equal("saving galaxies");

      result = combine("with", "groot");
      expect(result).to.be.a("string");
      expect(result).to.equal("with groot");
    });
  });

  describe("#createCircle", function() {
    var radius, circle;

    it("should be a function", function() {
      (typeof createCircle).should.equal("function");
      radius = 4;
      circle = createCircle(radius);
    });

    it("should return a circle object with the properties circumference and area", function() {
      (typeof circle).should.equal("object");
      circle.should.have.property("circumference");
      circle.should.have.property("area");
    });

    it("should have the correct values for circumference and area", function() {
      expect(circle.circumference).to.equal(2 * Math.PI * radius);
      expect(circle.area).to.equal(Math.PI * radius * radius);
    });
  });
});
