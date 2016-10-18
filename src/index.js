import StateMachine from 'javascript-state-machine';
import map from 'lodash/map';
import assign from 'lodash/assign';
import zipObject from 'lodash/zipObject';
import fill from 'lodash/fill';

export const initial = 'INIT';
export const defaultState =
  {
    status: initial,
    error: null,
    [initial]: true,
    event: null
  };

/**
 * @param {Object} fsmConfig - Config as for javascript-state-machine
 */
const reducerBuilder = (fsmConfig) =>
{
  const fsm = StateMachine.create(assign({}, fsmConfig, { initial }));
  const { events } = fsmConfig;
  const eventNames = map(events, 'name');
  const eventsCount = eventNames.length;
  const existEvent = zipObject(eventNames, fill(Array(eventsCount),
    true, 0, eventsCount));

  // Create reducer function
  const reducer = (state = defaultState, action) =>
  {
    // Ignore events that is not handling
    if (typeof existEvent[action.type] === 'undefined')
    {
      return state;
    }

    // Immulation immutable state.
    // For example FMS have one step
    // and state parameter have other state.
    if (fsm.current !== state.status)
    {
      fsm.current = state.status;
    }
    // Alternative is create here FSM object,
    // but it may be so slowly.

    // Check transition posible
    if (fsm.cannot(action.type))
    {
      // Set error if transition imposible
      return {
        status: state.status,
        error: true,
        [state.status]: true,
        action
      };
    }

    // Fire event as function
    fsm[action.type](action);

    // Return next state after transition
    return {
      status: fsm.current,
      error: null,
      [fsm.current]: true,
      action
    };
  };

  // Open FSM
  reducer.fsm = fsm;

  return reducer;
};

export default reducerBuilder;