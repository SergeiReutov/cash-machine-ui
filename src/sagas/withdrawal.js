import { takeEvery, call, put } from 'redux-saga/effects';
import { WITHDRAWAL } from 'actions/ActionTypes';
import { PUT } from 'utils/api';

function* withdrawCash({ amount }) {
  try {
    const response = yield call(PUT, '/api/withdraw', { amount });
    yield put({ type: WITHDRAWAL.WITHDRAW_CASH.SUCCESS, banknotesArray: response });
  } catch (e) {
    yield put({ type: WITHDRAWAL.WITHDRAW_CASH.FAILURE, error: e.message });
  }
}

export function* withdrawCashSaga() {
  yield takeEvery(WITHDRAWAL.WITHDRAW_CASH.REQUEST, withdrawCash);
}
