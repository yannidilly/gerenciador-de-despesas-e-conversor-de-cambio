import React, { Component } from 'react';
import '../style/Table.css';

class Table extends Component {
  render() {
    return (
      <table className="expenses-table">
        <tbody>
          <tr>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Método de Pagamento</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Editar/Excluir</th>
          </tr>

        </tbody>
      </table>
    );
  }
}

export default Table;
