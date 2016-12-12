import reducerBuilder, { defaultState, buildState, initial as INIT } from './reducer.js';

let reducer = null;

const UNDEFINED = 'UNDEFINED';
const LOAD = 'LOAD';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOADING = 'LOADING';
const LOADING_SUCCESS = 'LOADING_SUCCESS';
const LOADING_FAILURE = 'LOADING_FAILURE';

describe('#reducerBuilder(fsmConfig)', () =>
{
  beforeEach(() =>
  {
    reducer = reducerBuilder({
      events: [
        { name: LOAD, from: INIT, to: LOADING },
        { name: SUCCESS, from: LOADING, to: LOADING_SUCCESS },
        { name: FAILURE, from: LOADING, to: LOADING_FAILURE }
      ]
    });
  });

  it('Transition should be ignore for undefined action', () =>
  {
    const action = { type: UNDEFINED };
    const nextState = reducer(defaultState, action);
    expect(nextState).to.be.equal(defaultState);
  });

  it('Transition should be success for valid action', () =>
  {
    const action = { type: LOAD };
    const nextState = reducer(defaultState, action);
    expect(nextState).to.be.eql(buildState(LOADING, { action }));
  });

  it('Transition should be failure for invalid action', () =>
  {
    const action = { type: FAILURE };
    const nextState = reducer(defaultState, action);
    expect(nextState).to.be.eql(buildState(INIT, { error: true, action }));
  });

  it('Should be transit if current fsm state is not equal state status (unmutable emulation)', () =>
  {
    const action = { type: SUCCESS };
    const newState = buildState(LOADING, { error: true, action });

    expect(reducer.fsm.current).to.be.equal(INIT);
    expect(reducer.fsm.current).to.not.equal(newState.status);

    const nextState = reducer(newState, action);
    expect(nextState).to.be.eql(buildState(LOADING_SUCCESS, { action }));
  });
});
