import { validTransite, invalidTransite, onlyTransite } from './tools.js';

describe("Tools", () =>
{
  describe('#validTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });

    describe('without toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });
  });

  describe('#invalidTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });

    describe('without toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });
  });

  describe('#onlyTransite(reducer, fromState, event, toState)', () =>
  {
    describe('with toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });

    describe('without toState', () =>
    {
      it('Should be true for valid transition');

      it('Should be raise error for invalid transition');
    });
  });
});