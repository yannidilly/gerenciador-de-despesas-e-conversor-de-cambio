import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { getCurrenciesAct } from '../redux/actions';
import '../style/Wallet.css';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getCurrenciesAct());
  }

  render() {
    return (
      <div>
        <Header />
        <form className="wallet-form">
          <div className="wallet-form-input-div">
            <p>Valor:</p>
            <input
              data-testid="value-input"
              className="expense-register-input"
            />
          </div>
          <div className="wallet-form-input-div">
            <p>Moeda:</p>
            <select
              data-testid="currency-input"
              className="expense-register-select"
            >
              <option>BRL</option>
              <option>USD</option>
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencies: globalState.user.currencies,
});

Wallet.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
