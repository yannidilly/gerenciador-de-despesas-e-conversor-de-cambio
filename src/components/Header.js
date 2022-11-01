import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../style/Header.css';

class Header extends Component {
  render() {
    const { email } = this.props;
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
            <p className="expense-quantity" data-testid="total-field">0</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
