import * as R from 'ramda';
import { WITHDRAWAL } from 'actions/ActionTypes';

const initialState = {
  cash: [],
  isLoading: false,
  error: '',
};

const formatBanknotesArray = banknotesArray => R.chain(
  banknote => R.repeat(banknote.value, banknote.quantity),
  banknotesArray
);

export default function withdrawal(state = initialState, action) {
  switch (action.type) {
    case WITHDRAWAL.WITHDRAW_CASH.REQUEST:
      return {
        ...state,
        cash: initialState.cash,
        isLoading: true,
      };
    case WITHDRAWAL.WITHDRAW_CASH.SUCCESS:
      return {
        ...state,
        cash: formatBanknotesArray(action.banknotesArray),
        isLoading: false,
        error: initialState.error,
      };
    case WITHDRAWAL.WITHDRAW_CASH.FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
