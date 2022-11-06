import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, getCurrenciesAct } from '../redux/actions';
import '../style/WalletForm.css';
import { getCurrencies } from '../services/getCurrencies';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getCurrenciesAct(dispatch));
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getActualExpenseId = () => {
    const { expenses } = this.props;
    if (expenses !== undefined) {
      const lastExpenseId = expenses[expenses.length - 1].id;
      return lastExpenseId + 1;
    }
    return 0;
  };

  actualExpenseFormat = async () => {
    const { value, description, currency, method, tag } = this.state;
    const actualExpenseId = this.getActualExpenseId();
    const exchangeRates = await getCurrencies();
    const expenseFormated = {
      id: actualExpenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    return expenseFormated;
  };

  addExpenseInGlobalState = async () => {
    const { dispatch, expenses } = this.props;
    const actualExpense = await this.actualExpenseFormat();
    if (expenses !== undefined) {
      expenses.push(actualExpense);
      dispatch(addExpense(expenses));
    } else {
      dispatch(addExpense([actualExpense]));
    }
  };

  onClickExpenseButton = () => {
    this.addExpenseInGlobalState();
    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form className="wallet-form">
        <div className="wallet-form-input-div">
          <p>Valor:</p>
          <input
            data-testid="value-input"
            className="expense-value-register-input"
            name="value"
            type="text"
            value={ value }
            onChange={ this.onInputChange }
          />
        </div>
        <div className="wallet-form-input-div">
          <p>Moeda:</p>
          <select
            data-testid="currency-input"
            className="expense-register-select"
            name="currency"
            value={ currency }
            onChange={ this.onInputChange }
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
            name="method"
            value={ method }
            onChange={ this.onInputChange }
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
            name="tag"
            value={ tag }
            onChange={ this.onInputChange }
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
            name="description"
            type="text"
            value={ description }
            onChange={ this.onInputChange }
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
  expenses: globalState.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
