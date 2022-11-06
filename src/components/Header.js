import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../style/Header.css';

class Header extends Component {
  render() {
    const { email, totalSpending } = this.props;
    return (
      <header>
        <h1>Gerenciador de Despesas</h1>
        <section className="info-section">
          <div
            className="email-info"
            data-testid="email-field"
          >
            { email }
          </div>
          <div
            className="expense-info"
            data-testid="total-field"
          >
            <p className="expense-text">Despesas totais:</p>
            <p
              className="expense-quantity"
              data-testid="total-field"
            >
              { totalSpending.toFixed(2) }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  totalSpending: globalState.wallet.totalSpending,
});

Header.propTypes = {
  email: PropTypes.string,
  totalSpending: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
