// Import helpers library
import "babel-polyfill";
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
// import dirtyChai from 'dirty-chai';
// import checkChai from 'check-chai';

// Setup chai and applying chai modules
chai.config.includeStack = true;
chai.config.showDiff = true;
// chai.use(dirtyChai);
// chai.use(checkChai);
chai.use(sinonChai);

// Export helpers to GLOBAL
global.chai = chai;
global.sinon = sinon;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.expect = chai.expect;
global.assert = chai.assert;