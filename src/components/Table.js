import React, { Component } from 'react';
import '../style/Table.css';

class Table extends Component {
  render() {
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
        </tbody>
      </table>
    );
  }
}

export default Table;
