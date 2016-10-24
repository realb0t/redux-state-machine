/**
 * Return true if transition posible. If no - raise exception.
 * 
 * @param  {Reducer} - Reducer object
 * @param  {Object} - From state object 
 * @param  {Object} - Event object (Redux action)
 * @param  {Object} - To state object
 * @return {Boolean}
 */
export function validTransite(reducer, fromState, event, toState)
{
  return true;
};

/**
 * Return true if transition imposible. If no - raise exception.
 * 
 * @param  {Reducer} - Reducer object
 * @param  {Object} - From state object 
 * @param  {Object} - Event object (Redux action)
 * @param  {Object} - To state object
 * @return {Boolean}
 */
export function invalidTransite(reducer, fromState, event, toState)
{
  return true;
};

/**
 * Return true if transition imposible only with this `event` to this `toState`.
 * If no - raise exception.
 * 
 * @param  {Reducer} - Reducer object
 * @param  {Object} - From state object 
 * @param  {Object} - Event object (Redux action)
 * @param  {Object} - To state object
 * @return {Boolean}
 */
export function onlyTransite(reducer, fromState, event, toState)
{
  return true;
};