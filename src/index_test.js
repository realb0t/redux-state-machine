import exportedReducer, { 
  defaultState as exportedDefaultState,
  initial as exportedInitial,
  validTransite as exportedValidTransite,
  invalidTransite as exportedInvalidTransite,
  onlyTransite as exportedOnlyTransite,
  buildState as exportedBuildState
} from './index.js'
import { validTransite, invalidTransite, onlyTransite } from './tools.js';
import reducer, { defaultState, initial, buildState } from './reducer.js'

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

  it('exportedBuildState should be equal buildState', () =>
  {
    expect(exportedBuildState).to.be.equal(buildState)
  });

  it('exportedValidTransite should be equal validTransite', () =>
  {
    expect(exportedValidTransite).to.be.equal(validTransite)
  });

  it('exportedInvalidTransite should be equal invalidTransite', () =>
  {
    expect(exportedInvalidTransite).to.be.equal(invalidTransite)
  });

  it('exportedOnlyTransite should be equal onlyTransite', () =>
  {
    expect(exportedOnlyTransite).to.be.equal(onlyTransite)
  });
});