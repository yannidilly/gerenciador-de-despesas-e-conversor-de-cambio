import React from 'react';
import Header from '../components/Header';
import '../style/Wallet.css';

class Wallet extends React.Component {
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

export default Wallet;
