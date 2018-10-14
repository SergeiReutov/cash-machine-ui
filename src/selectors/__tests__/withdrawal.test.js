import {
  getWithdrawal,
  getCash,
  getIsLoading,
  getError,
} from '../withdrawal';

const initialState = {
  withdrawal: {
    cash: [],
    isLoading: false,
    error: '',
  },
};

describe('Test the withdrawal selectors', () => {
  it('should get the correct withdrawal', () => {
    expect(getWithdrawal(initialState)).toEqual(initialState.withdrawal);
  });

  it('should get the correct cash', () => {
    expect(getCash(initialState)).toBe(initialState.withdrawal.cash);
  });

  it('should get the correct isLoading', () => {
    expect(getIsLoading(initialState)).toBe(initialState.withdrawal.isLoading);
  });

  it('should get the correct error', () => {
    expect(getError(initialState)).toBe(initialState.withdrawal.error);
  });
});
