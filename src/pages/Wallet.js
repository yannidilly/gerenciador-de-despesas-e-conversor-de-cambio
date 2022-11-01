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
              className="expense-register-input"
            />
          </div>
          <div className="wallet-form-input-div">
            <p>Moeda:</p>
            <select
              className="expense-register-select"
            >
              <option>BRL</option>
              <option>USD</option>
            </select>
          </div>
          <div className="wallet-form-input-div">
            <p>Método de pagamento:</p>
            <select
              className="expense-register-select"
            >
              <option>Cartão de crédito</option>
              <option>Dinheiro</option>
            </select>
          </div>
          <div className="wallet-form-input-div">
            <p>Categoria:</p>
            <select
              className="expense-register-select"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
            </select>
          </div>
          <div className="wallet-form-input-div">
            <p>Descrição:</p>
            <input
              className="expense-register-input"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Wallet;
