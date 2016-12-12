import { buildState } from './reducer';

/**
 * Return true if transition posible. If no - raise exception.
 *
 * @param  {Reducer} - Reducer object
 * @param  {String} - From state object
 * @param  {String} - Event object
 * @param  {String} - To state object
 * @return {Boolean}
 */
export function validTransite(reducer, fromStatus, event, toStatus)
{
  const nextState = reducer(buildState(fromStatus), { type: event });

  if (typeof reducer.existEvent[event] === 'undefined')
  {
    throw new Error(`Invalid transition: Not exits ${event} event`);
  }

  if (nextState.error)
  {
    throw new Error(`Invalid transition: Can not transite
      from state ${fromStatus} by event ${event}`);
  }

  if (typeof toStatus !== 'undefined' && nextState.status !== toStatus)
  {
    throw new Error(`Invalid transition: Final state is not
      ${toStatus} after event ${event} from ${fromStatus}`);
  }

  return true;
}

/**
 * Return true if transition imposible. If no - raise exception.
 * @param  {Reducer} - Reducer object
 * @param  {Object} - From state object
 * @param  {Object} - Event object (Redux action)
 * @param  {Object} - To state object
 * @return {Boolean}
 */
export function invalidTransite(reducer, fromState, event, toState)
{
  try
  {
    return !validTransite(reducer, fromState, event, toState);
  }
  catch (e)
  {
    return true;
  }
}

/**
 * Return true if transition imposible only with this `event` to this `toState`.
 * If no - raise exception.
 * @param  {Reducer} - Reducer object
 * @param  {Object} - From state object
 * @param  {Object} - Event object (Redux action)
 * @param  {Object} - To state object
 * @return {Boolean}
 */
export function onlyTransite(reducer, fromState, event, toState)
{
  return true;
}
