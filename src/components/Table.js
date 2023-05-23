import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, updateTotalSpending } from '../redux/actions';
import '../style/Table.css';
import EditIcon from '../icons/edit-icon.png';
import DeletIcon from '../icons/delet-icon.png';

class Table extends Component {
  currencyConverter = (expenseObj) => {
    const { value, currency, exchangeRates } = expenseObj;
    const convertedValue = value * exchangeRates[currency].ask;
    return convertedValue;
  };

  calculateTotalSpending = () => {
    const { expenses } = this.props;
    const totalSpending = expenses
      .map((expense) => Number.parseFloat(this.currencyConverter(expense)))
      .reduce((acc, cur) => acc + cur, 0);
    return totalSpending;
  };

  addTotalExpensesInGlobalState = () => {
    const { dispatch } = this.props;
    const totalSpending = this.calculateTotalSpending();
    dispatch(updateTotalSpending(totalSpending));
  };

  onClickDeletButton = async (expenseId) => {
    const { expenses, dispatch } = this.props;
    const newExpensesArray = expenses.filter((expense) => expense.id !== expenseId);
    await dispatch(removeExpense(newExpensesArray));
    this.addTotalExpensesInGlobalState();
  };

  render() {
    const { expenses } = this.props;
    return (
      <table className="expenses-table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ (expense.value * 1).toFixed(2) }</td>
                <td>
                  {
                    expense.exchangeRates[expense.currency].name
                  }
                </td>
                <td>
                  {
                    (expense.exchangeRates[expense.currency].ask * 1).toFixed(2)
                  }
                </td>
                <td>
                  {
                    (expense.value * expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <div className="buttons-cell">
                    <button
                      type="button"
                    >
                      <img src={ EditIcon } alt="editar" />
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.onClickDeletButton(expense.id) }
                    >
                      <img src={ DeletIcon } alt="deletar" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
  totalSpending: globalState.wallet.totalSpending,
});

Table.propTypes = {
  currencies: PropTypes.array,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
