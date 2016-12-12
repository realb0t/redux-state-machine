import reducerBuilder, { initial as INIT } from './reducer';
import { validTransite, invalidTransite } from './tools.js';

let reducer = null;

const EVENT = 'EVENT';
const OCCASION = 'OCCASION';
const OTHER = 'OTHER';
const MIRACLE = 'MIRACLE';
const IMPOSIBLE = 'IMPOSIBLE';

describe('Tools', () =>
{
  beforeEach(() =>
  {
    reducer = reducerBuilder({
      events: [
        { name: EVENT, from: INIT, to: OTHER },
        { name: OCCASION, from: OTHER, to: OTHER }
      ]
    });
  });

  describe('#validTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState param', () =>
    {
      it('Should be true for valid transition', () =>
      {
        expect(validTransite(reducer, INIT, EVENT, OTHER)).to.be.equal(true);
      });

      it('Should be raise error for invalid transition if event not exist', () =>
      {
        expect(() => validTransite(reducer, INIT, MIRACLE, IMPOSIBLE)).to.throw(/Not exits/);
      });

      it('Should be raise error for invalid transition if final state is not equals', () =>
      {
        expect(() => validTransite(reducer, INIT, EVENT, IMPOSIBLE)).to.throw(/Final state is not/);
      });

      it('Should be raise error for invalid transition if event is not avalible for from state', () =>
      {
        expect(() => validTransite(reducer, INIT, OCCASION, OTHER)).to.throw(/Can not transite/);
      });
    });

    describe('without toState param', () =>
    {
      it('Should be true for valid transition', () =>
      {
        expect(validTransite(reducer, INIT, EVENT)).to.be.equal(true);
      });

      it('Should be raise error for invalid transition if event not exist', () =>
      {
        expect(() => validTransite(reducer, INIT, MIRACLE)).to.throw(/Not exits/);
      });

      it('Should be raise error for invalid transition if event is not avalible for from state', () =>
      {
        expect(() => validTransite(reducer, INIT, OCCASION)).to.throw(/Can not transite/);
      });
    });
  });

  describe('#invalidTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState param', () =>
    {
      it('Should be false for valid transition', () =>
      {
        expect(invalidTransite(reducer, INIT, EVENT, OTHER)).to.be.equal(false);
      });

      it('Should be true for invalid transition if event not exist', () =>
      {
        expect(invalidTransite(reducer, INIT, MIRACLE, IMPOSIBLE)).to.be.equal(true);
      });

      it('Should be true for invalid transition if final state is not equals', () =>
      {
        expect(invalidTransite(reducer, INIT, EVENT, IMPOSIBLE)).to.be.equal(true);
      });

      it('Should be true for invalid transition if event is not avalible for from state', () =>
      {
        expect(invalidTransite(reducer, INIT, OCCASION, OTHER)).to.be.equal(true);
      });
    });

    describe('without toState param', () =>
    {
      it('Should be true for valid transition', () =>
      {
        expect(invalidTransite(reducer, INIT, EVENT)).to.be.equal(false);
      });

      it('Should be raise error for invalid transition if event not exist', () =>
      {
        expect(invalidTransite(reducer, INIT, MIRACLE)).to.be.equal(true);
      });

      it('Should be raise error for invalid transition if event is not avalible for from state', () =>
      {
        expect(invalidTransite(reducer, INIT, OCCASION)).to.be.equal(true);
      });
    });
  });

  describe('#onlyTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState param', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });

    describe('without toState param', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });
  });
});
