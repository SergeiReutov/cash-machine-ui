import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

import { CashType } from 'types/withdrawal';
import './Withdrawal.css';

export default function Withdrawal(props) {
  const { cash, onWithdraw } = props;

  const handleWithdrawCash = () => onWithdraw(10);

  return (
    <div className="withdrawal-component">
      Cash:
      {cash.map((value, index) => (
        <NumberFormat key={index} value={value} displayType='text' decimalScale={2} fixedDecimalScale />
      ))}
      <Button onClick={handleWithdrawCash}>
        Push me
      </Button>
    </div>
  );
}

Withdrawal.propTypes = {
  cash: CashType,
  onWithdraw: PropTypes.func.isRequired,
};

Withdrawal.defaultProps = {
  cash: [],
};
