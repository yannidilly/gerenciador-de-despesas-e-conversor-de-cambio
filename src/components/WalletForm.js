import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesAct } from '../redux/actions';
import '../style/WalletForm.css';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getCurrenciesAct(dispatch));
  }

  onClickExpenseButton = () => {

  };

  render() {
    const { currencies } = this.props;
    return (
      <form className="wallet-form">
        <div className="wallet-form-input-div">
          <p>Valor:</p>
          <input
            data-testid="value-input"
            className="expense-value-register-input"
          />
        </div>
        <div className="wallet-form-input-div">
          <p>Moeda:</p>
          <select
            data-testid="currency-input"
            className="expense-register-select"
          >
            {
              currencies.map((currencie, index) => (
                <option key={ index }>{currencie}</option>
              ))
            }
          </select>
        </div>
        <div className="wallet-form-input-div">
          <p>Método de pagamento:</p>
          <select
            data-testid="method-input"
            className="expense-register-select"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </div>
        <div className="wallet-form-input-div">
          <p>Categoria:</p>
          <select
            data-testid="tag-input"
            className="expense-register-select"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </div>
        <div className="wallet-form-input-div">
          <p>Descrição:</p>
          <input
            data-testid="description-input"
            className="expense-register-input"
          />
        </div>
        <button
          type="button"
          onClick={ this.onClickExpenseButton }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
