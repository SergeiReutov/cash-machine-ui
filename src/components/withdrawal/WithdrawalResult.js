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
      <div className="withdrawal-result__label">
        Cash:
      </div>
      <div className="withdrawal-result__cash-array">
        [
          {cash.map((value, index) => (
            <NumberFormat
              key={index}
              value={value}
              displayType='text'
              decimalScale={2}
              fixedDecimalScale
              suffix={index < cash.length - 1 ? ', ' : ''}
            />
          ))}
        ]
      </div>
    </div>
  );
}

WithdrawalResult.propTypes = {
  cash: CashType,
};

WithdrawalResult.defaultProps = {
  cash: [],
};
