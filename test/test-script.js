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

  describe('person', function() {
    it('should have a name variable', function() {
      expect(window.name).to.exist;
      (typeof window.name).should.equal('string');
    });
    it('should have a person object with the same name', function() {
      expect(window.person).to.exist;
      (typeof window.person).should.equal('object');
      (window.person).should.have.property('name');
      (window.person.name).should.equal(name);
    });
  });

  describe('canDrive', function() {
    it ('should be true if `person` is atleast 16 years old', function() {
      expect(window.canDrive).to.exist;
      (typeof window.canDrive).should.equal('boolean');
      window.canDrive.should.equal(window.person.age >= 16);
    });
  });

  describe("#greet", function() {

    it('should be a function', function() {
      (typeof window.greet).should.equal('function');
    });

    it("should print a greeting", function() {
      var name = "Dev League";
      greet(name);

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Hello, my name is " + name);
    });
  });

  describe('dataTypes', function() {
    it('should be an array', function() {
      expect(window.dataTypes).to.exist;
      (window.dataTypes.constructor.name).should.equal('Array');
      var types = [];
      for (var i = 0; i < window.dataTypes.length; i++) {
        if (window.dataTypes[i] === null) {
          types.push(null);
        }
        else {
          types.push(typeof window.dataTypes[i]);
        }
      }
      types.should.include('string');
      types.should.include('number');
      types.should.include('undefined');
      types.should.include('object');
      types.should.include('boolean');
      types.should.include(null);
    });
  });

  describe('#Dog', function() {
    var spot = new Dog('Spot');
    it('should be a function', function() {
      (typeof window.Dog).should.equal('function');
      expect(window.Dog).to.exist;
    });
    it('should create a dog object', function() {
      (typeof spot).should.equal('object');
    });
    it ('should have a name', function() {
      (typeof spot.name).should.equal('string');
      spot.name.should.equal('Spot');
    });
    it('should be able to bark', function() {
      (typeof spot.bark).should.equal('function');
      spot.bark();
      sinon.assert.calledOnce(console.log);
    });
  });
});
