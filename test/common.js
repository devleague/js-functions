/**
 * Global configurations for all the Mocha tests.
 * This file should be loaded before all tests run.
 *
 * This should only run when running mocha.
 *
 * Although it pollutes the global scope with chai, assert, and expect,
 * it makes it simpler than to require each module across every test file.
 */

process.env.NODE_ENV = 'test';

global.chai = require('chai');
global.sinon = require('sinon');
global.assert = chai.assert;
global.expect = chai.expect;
chai.should();

/**
 * The following line will display the mocha stack trace if uncommented.
 */
// chai.config.includeStack = true;