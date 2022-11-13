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
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <th>{ expense.description }</th>
                <th>{ expense.tag }</th>
                <th>{ expense.method }</th>
                <th>{ expense.value }</th>
                <th>
                  {
                    expense.exchangeRates[expense.currency].name
                  }
                </th>
                <th>
                  {
                    expense.exchangeRates[expense.currency].ask
                  }
                </th>
                <th>
                  {
                    (expense.value * expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)
                  }
                </th>
                <th>Real</th>
                <th>Editar/Excluir</th>
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
