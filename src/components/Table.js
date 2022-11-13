import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../style/Table.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="expenses-table">
        <tbody>
          <thead>Descrição</thead>
          <thead>Tag</thead>
          <thead>Método de pagamento</thead>
          <thead>Valor</thead>
          <thead>Moeda</thead>
          <thead>Câmbio utilizado</thead>
          <thead>Valor convertido</thead>
          <thead>Moeda de conversão</thead>
          <thead>Editar/Excluir</thead>
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
                <td>Editar/Excluir</td>
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
