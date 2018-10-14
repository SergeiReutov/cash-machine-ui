import { WITHDRAWAL } from 'actions/ActionTypes';
import withdrawal from '../withdrawal';

const initialState = {
  cash: [],
  isLoading: false,
  error: '',
};

describe('Test the withdrawal reducer', () => {
  it('should set isLoading on REQUEST', () => {
    const action = {
      type: WITHDRAWAL.WITHDRAW_CASH.REQUEST,
    };
    const expectedState = {
      ...initialState,
      isLoading: true,
    };
    expect(withdrawal(initialState, action)).toEqual(expectedState);
  });

  it('should set isLoading on REQUEST', () => {
    const action = {
      type: WITHDRAWAL.WITHDRAW_CASH.REQUEST,
    };
    const expectedState = {
      ...initialState,
      isLoading: true,
    };
    expect(withdrawal(initialState, action)).toEqual(expectedState);
  });

  it('should set cash on SUCCESS', () => {
    const action = {
      type: WITHDRAWAL.WITHDRAW_CASH.SUCCESS,
      banknotesArray: [
        { value: 100, quantity: 1 },
        { value: 50, quantity: 1 },
        { value: 20, quantity: 1 },
        { value: 10, quantity: 0 },
      ],
    };
    const expectedState = {
      ...initialState,
      cash: [100, 50, 20],
    };
    expect(withdrawal(initialState, action)).toEqual(expectedState);
  });

  it('should set error on FAILURE', () => {
    const action = {
      type: WITHDRAWAL.WITHDRAW_CASH.FAILURE,
      error: 'Error message',
    };
    const expectedState = {
      ...initialState,
      error: 'Error message',
    };
    expect(withdrawal(initialState, action)).toEqual(expectedState);
  });
});
