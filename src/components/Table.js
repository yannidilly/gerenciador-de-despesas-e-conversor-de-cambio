import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../style/Table.css';

class Table extends Component {
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
