var window = window || undefined;

if ( !window ) {
  GLOBAL = window;
  var fs = require( 'fs' );
  var vm = require( 'vm' );
  var sinon = require('sinon');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/functions.js');
  // file runs and it's contents has access to GLOBAL
  vm.runInThisContext(functionsFile);
}


var expect = chai.expect;
var should = chai.should();

describe("Main", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(console, "log");
    sandbox.stub(console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("#numberToString", function() {
    it("should be a function", function() {
      (typeof GLOBAL.numberToString).should.equal("function");
    });

    it("should convert the given number to a string", function() {
      var stringNum = GLOBAL.numberToString(5);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("5");

      stringNum = GLOBAL.numberToString(-260/500);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("-0.52");

      stringNum = GLOBAL.numberToString(3.14159265359);
      expect(stringNum).to.be.a("string");
      expect(stringNum).to.equal("3.14159265359");
    });
  });

  describe("#increase", function() {
    it("should be a function", function() {
      (typeof GLOBAL.increase).should.equal("function");
    });

    it("should add 1 to the given number", function() {
      expect(GLOBAL.increase(7)).to.equal(8);
      expect(GLOBAL.increase(-1)).to.equal(0);
      expect(GLOBAL.increase(-100)).to.equal(-99);
    });
  });

  describe("#decrease", function() {
    it("should be a function", function() {
      (typeof GLOBAL.decrease).should.equal("function");
    });

    it("should subtract 1 from the given number", function() {
      expect(GLOBAL.decrease(7)).to.equal(6);
      expect(GLOBAL.decrease(-1)).to.equal(-2);
      expect(GLOBAL.decrease(-100)).to.equal(-101);
    });
  });

  describe("#add", function() {
    it("should be a function", function() {
      (typeof GLOBAL.add).should.equal("function");
    });

    it("should add two numbers", function() {
      expect(GLOBAL.add(9, 3)).to.equal(12);
      expect(GLOBAL.add(0, -272.15)).to.equal(-272.15);
      expect(GLOBAL.add(-1, -100)).to.equal(-101);
    });
  });

  describe("#subtract", function() {
    it("should be a function", function() {
      (typeof GLOBAL.subtract).should.equal("function");
    });

    it("should subtract the second number from the first", function() {
      expect(GLOBAL.subtract(9, 3)).to.equal(6);
      expect(GLOBAL.subtract(3, 9)).to.equal(-6);
      expect(GLOBAL.subtract(-1, -100)).to.equal(99);
    });
  });

  describe("#multiply", function() {
    it("should be a function", function() {
      (typeof GLOBAL.multiply).should.equal("function");
    });

    it("should multiply two numbers", function() {
      expect(GLOBAL.multiply(9, 3)).to.equal(27);
      expect(GLOBAL.multiply(0, -8)).to.equal(0);
      expect(GLOBAL.multiply(-4, 3)).to.equal(-12);
    });
  });

  describe("#divide", function() {
    it("should be a function", function() {
      (typeof GLOBAL.divide).should.equal("function");
    });

    it("should divide the first number by the second", function() {
      expect(GLOBAL.divide(0, 3)).to.equal(0);
      expect(GLOBAL.divide(3, -12)).to.equal(-0.25);
      expect(GLOBAL.divide(7, 0)).to.equal(Infinity);
    });
  });

  describe("#square", function() {
    it("should be a function", function() {
      (typeof GLOBAL.square).should.equal("function");
    });

    it("should return the square of the given number", function() {
      expect(GLOBAL.square(12)).to.equal(144);
      expect(GLOBAL.square(-3)).to.equal(9);
      expect(GLOBAL.square(1/4)).to.equal(0.0625);
    });
  });

  describe("#calculate", function() {
    it("should be a function", function() {
      (typeof GLOBAL.calculate).should.equal("function");
    });

    it("should print the equation to the console", function() {
      GLOBAL.calculate("add", 4, 7);
      sinon.assert.calledWithExactly(console.log, "4 + 7 = 11");

      GLOBAL.calculate("subtract", 4, 7);
      sinon.assert.calledWithExactly(console.log, "4 - 7 = -3");

      GLOBAL.calculate("multiply", 8, 4);
      sinon.assert.calledWithExactly(console.log, "8 * 4 = 32");

      GLOBAL.calculate("divide", 8, 4);
      sinon.assert.calledWithExactly(console.log, "8 / 4 = 2");
    });

    it("should return the result of the equation", function() {
      expect(GLOBAL.calculate("add", 4, 7)).to.equal(11);
      expect(GLOBAL.calculate("subtract", 4, 7)).to.equal(-3);
      expect(GLOBAL.calculate("multiply", 8, 4)).to.equal(32);
      expect(GLOBAL.calculate("divide", 8, 4)).to.equal(2);
    });
  });

  describe("#isGreaterThan", function() {
    it("should be a function", function() {
      (typeof GLOBAL.isGreaterThan).should.equal("function");
    });

    it("should return true if x is greater than y", function() {
      expect(GLOBAL.isGreaterThan(7, 4)).to.equal(true);
      expect(GLOBAL.isGreaterThan(-45, -31)).to.equal(false);
      expect(GLOBAL.isGreaterThan(-9, -9)).to.equal(false);
    });
  });

  describe("#isLessThan", function() {
    it("should be a function", function() {
      (typeof GLOBAL.isLessThan).should.equal("function");
    });

    it("should return true if x is less than y", function() {
      expect(GLOBAL.isLessThan(4, 7)).to.equal(true);
      expect(GLOBAL.isLessThan(19, -31)).to.equal(false);
      expect(GLOBAL.isLessThan(28, 28)).to.equal(false);
    });
  });

  describe("#areEqual", function() {
    it("should be a function", function() {
      (typeof GLOBAL.areEqual).should.equal("function");
    });

    it("should return true if a and b have equal values and data types", function() {
      expect(GLOBAL.areEqual(1, 1)).to.equal(true);
      expect(GLOBAL.areEqual(-1/4, -0.25)).to.equal(true);
    });

    it("should return false if values are equal but data types are different", function() {
      expect(GLOBAL.areEqual(21, "21")).to.equal(false);
    });
  });

  describe("#minimum", function() {
    it("should be a function", function() {
      (typeof GLOBAL.minimum).should.equal("function");
    });

    it("should return the smallest of two values", function() {
      expect(GLOBAL.minimum(71, 35)).to.equal(35);
      expect(GLOBAL.minimum(-40, -8)).to.equal(-40);
      expect(GLOBAL.minimum(-1, -1)).to.equal(-1);
    });
  });

  describe("#maximum", function() {
    it("should be a function", function() {
      (typeof GLOBAL.maximum).should.equal("function");
    });

    it("should return the largest of two values", function() {
      expect(GLOBAL.maximum(35, 71)).to.equal(71);
      expect(GLOBAL.maximum(-40, -8)).to.equal(-8);
      expect(GLOBAL.maximum(-1, -1)).to.equal(-1);
    });
  });

  describe("#isEven", function() {
    it("should be a function", function() {
      (typeof GLOBAL.isEven).should.equal("function");
    });

    it("should return true if the given number is even", function() {
      expect(2).to.satisfy(GLOBAL.isEven);
      expect(-8).to.satisfy(GLOBAL.isEven);
      expect(256).to.satisfy(GLOBAL.isEven);
    });
  });

  describe("#isOdd", function() {
    it("should be a function", function() {
      (typeof GLOBAL.isOdd).should.equal("function");
    });

    it("should return true if the given number is odd", function() {
      expect(1).to.satisfy(GLOBAL.isOdd);
      expect(-23).to.satisfy(GLOBAL.isOdd);
      expect(97).to.satisfy(GLOBAL.isOdd);
    });
  });

  describe("#letterGrade", function() {
    it("should be a function", function() {
      (typeof GLOBAL.letterGrade).should.equal("function");
    });

    it("should return a letter grade based on score/total percentage", function() {
      expect(GLOBAL.letterGrade(315, 350)).to.equal("A");
      expect(GLOBAL.letterGrade(287, 350)).to.equal("B");
      expect(GLOBAL.letterGrade(105, 150)).to.equal("C");
      expect(GLOBAL.letterGrade(559, 800)).to.equal("D");
      expect(GLOBAL.letterGrade(2, 4)).to.equal("F");
    });
  });

  describe("#incrementReviews", function() {
    it("should be a function", function() {
      (typeof GLOBAL.incrementReviews).should.equal("function");
    });

    it("should increment the reviews by 1, if property exists", function() {
      var awesomeEatery = GLOBAL.incrementReviews({reviews: 1776});
      expect(awesomeEatery.reviews).to.equal(1777);
    });

    it("should set the reviews to 1, if property does not exist", function() {
      var newEatery = GLOBAL.incrementReviews({});
      expect(newEatery).to.have.property("reviews");
      expect(newEatery.reviews).to.equal(1);
    });
  });

  describe("#combine", function() {
    it("should be a function", function() {
      (typeof GLOBAL.combine).should.equal("function");
    });

    it("should return a string of the words joined with a space", function() {
      var result = GLOBAL.combine("saving", "galaxies");
      expect(result).to.be.a("string");
      expect(result).to.equal("saving galaxies");

      result = GLOBAL.combine("with", "groot");
      expect(result).to.be.a("string");
      expect(result).to.equal("with groot");
    });
  });

  describe("#createCircle", function() {
    var radius, circle;

    it("should be a function", function(done) {
      setTimeout(function() {
        (typeof GLOBAL.createCircle).should.equal("function");
        radius = 4;
        circle = GLOBAL.createCircle(radius);
        done();
      }, 1000);
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
