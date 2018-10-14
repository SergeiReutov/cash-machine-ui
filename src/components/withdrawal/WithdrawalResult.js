import React from 'react';
import NumberFormat from 'react-number-format';

import { CashType } from 'types/withdrawal';
import './WithdrawalResult.css';

export default function WithdrawalResult(props) {
  const { cash } = props;

  if (!cash.length) {
    return null;
  }

  return (
    <div className="withdrawal-result">
      Cash:
      {cash.map((value, index) => (
        <NumberFormat key={index} value={value} displayType='text' decimalScale={2} fixedDecimalScale />
      ))}
    </div>
  );
}

WithdrawalResult.propTypes = {
  cash: CashType,
};

WithdrawalResult.defaultProps = {
  cash: [],
};
