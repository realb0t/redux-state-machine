import exportedReducer, { defaultState as exportedDefaultState, initial as exportedInitial } from './index.js'
import reducer, { defaultState, initial } from './reducer.js'

describe('Exporting', () =>
{
  it('export default should be equal reducer', () =>
  {
    expect(exportedReducer).to.be.equal(reducer)
  });

  it('exportedDefaultState should be equal defaultState', () =>
  {
    expect(exportedDefaultState).to.be.equal(defaultState)
  });

  it('exportedInitial should be equal initial', () =>
  {
    expect(exportedInitial).to.be.equal(initial)
  });
});