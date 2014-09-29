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

  describe('#add', function() {
    it('should be a function', function() {
      (typeof window.add).should.equal('function');
    });

    it('should add two numbers', function() {
      expect(add(9, 3)).to.equal(12);
      expect(add(0, -272.15)).to.equal(-272.15);
      expect(add(-1, -100)).to.equal(-101);
    });
  });

  describe('#subtract', function() {
    it('should be a function', function() {
      (typeof window.subtract).should.equal('function');
    });

    it('should subtract the second number from the first', function() {
      expect(subtract(9, 3)).to.equal(6);
      expect(subtract(3, 9)).to.equal(-6);
      expect(subtract(-1, -100)).to.equal(99);
    });
  });

  describe('#multiply', function() {
    it('should be a function', function() {
      (typeof window.multiply).should.equal('function');
    });

    it('should multiply two numbers', function() {
      expect(multiply(9, 3)).to.equal(27);
      expect(multiply(0, -8)).to.equal(0);
      expect(multiply(-4, 3)).to.equal(-12);
    });
  });

  describe('#divide', function() {
    it('should be a function', function() {
      (typeof window.divide).should.equal('function');
    });

    it('should divide the first number by the second', function() {
      expect(divide(0, 3)).to.equal(0);
      expect(divide(3, -12)).to.equal(-0.25);
      expect(divide(7, 0)).to.equal(Infinity);
    });
  });

  describe('#numberToString', function() {
    it('should be a function', function() {
      (typeof window.numberToString).should.equal('function');
    });

    it('should convert the given number to a string', function() {
      expect(numberToString(5)).to.be.a('string');
      expect(numberToString(-17/571)).to.be.a('string');
      expect(numberToString(3.14159265359)).to.be.a('string');
    });
  });

  describe('#calculate', function() {
    it('should be a function', function() {
      (typeof window.calculate).should.equal('function');
    });

    it('should print the equation to the console', function() {
      calculate("add", 4, 7);
      sinon.assert.calledOnce(console.log);
    });

    it('should return the result of the equation', function() {
      expect(calculate("add", 4, 7)).to.equal(11);
      expect(calculate("subtract", 4, 7)).to.equal(-3);
      expect(calculate("multiply", 8, 4)).to.equal(32);
      expect(calculate("divide", 8, 4)).to.equal(2);
    });
  });

  describe('#minimum', function() {
    it('should be a function', function() {
      (typeof window.minimum).should.equal('function');
    });

    it('should return the smallest of two values', function() {
      expect(minimum(71, 35)).to.equal(35);
      expect(minimum(-40, -8)).to.equal(-40);
      expect(minimum(-1, -1)).to.equal(-1);
    });
  });

  describe('#maximum', function() {
    it('should be a function', function() {
      (typeof window.maximum).should.equal('function');
    });

    it('should return the largest of two values', function() {
      expect(maximum(35, 71)).to.equal(71);
      expect(maximum(-40, -8)).to.equal(-8);
      expect(maximum(-1, -1)).to.equal(-1);
    });
  });

  describe('#isEven', function() {
    it('should be a function', function() {
      (typeof window.isEven).should.equal('function');
    });

    it('should return true if the given number is even', function() {
      expect(2).to.satisfy(isEven);
      expect(-8).to.satisfy(isEven);
      expect(256).to.satisfy(isEven);
    });
  });

  describe('#isOdd', function() {
    it('should be a function', function() {
      (typeof window.isOdd).should.equal('function');
    });

    it('should return true if the given number is odd', function() {
      expect(1).to.satisfy(isOdd);
      expect(-23).to.satisfy(isOdd);
      expect(97).to.satisfy(isOdd);
    });
  });

  describe('#letterGrade', function() {
    it('should be a function', function() {
      (typeof window.letterGrade).should.equal('function');
    });

    it('should return a letter grade based on score/total percentage', function() {
      expect(letterGrade(315, 350)).to.equal('A');
      expect(letterGrade(287, 350)).to.equal('B');
      expect(letterGrade(105, 150)).to.equal('C');
      expect(letterGrade(559, 800)).to.equal('D');
      expect(letterGrade(2, 4)).to.equal('F');
    });
  });

  describe('#incrementReviews', function() {
    it('should be a function', function() {
      (typeof window.incrementReviews).should.equal('function');
    });

    it('should check if the restaurant object has a reviews property', function() {

    });

    it('should increment the reviews by 1, if reviews property exists', function() {

    });

    it('should set the reviews to 1, if reviews property does not exist', function() {

    });
  });

  describe('#square', function() {
    it('should be a function', function() {
      (typeof window.square).should.equal('function');
    });

    it('should return the square of the given number', function() {
      expect(square(12)).to.equal(144);
      expect(square(-3)).to.equal(9);
      expect(square(1/4)).to.equal(0.0625);
    });
  });

  describe('#combine', function() {
    it('should be a function', function() {
      (typeof window.combine).should.equal('function');
    });

    it('should return a string of the words joined with a space', function() {
      var result = combine("saving", "galaxies");
      expect(result).to.be.a('string');
      expect(result).to.equal('saving galaxies');

      result = combine("with", "groot");
      expect(result).to.be.a('string');
      expect(result).to.equal('with groot');
    });
  });
});
