import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './WithdrawalForm.css';

class WithdrawalForm extends PureComponent {
  constructor(props) {
    super(props);
    this.withdrawInput = React.createRef();
  }

  handleWithdrawCash = () => {
    const { onWithdraw } = this.props;
    onWithdraw(this.withdrawInput.current.inputRef.value);
  }

  render() {
    return (
      <div className="withdrawal-form">
        <Input className="withdrawal-form__input" placeholder='100' type="number" ref={this.withdrawInput}/>
        <Button className="withdrawal-form__button" onClick={this.handleWithdrawCash}>
          Withdraw
        </Button>
      </div>
    );
  }
}

WithdrawalForm.propTypes = {
  onWithdraw: PropTypes.func.isRequired,
};

export default WithdrawalForm;
