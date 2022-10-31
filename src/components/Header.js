import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="wallet-header">
        <h1>Gerenciador de Despesas</h1>
        <section className="info-section">
          <p
            className="email-info"
          >
            email
          </p>
          <p
            className="cost-info"
          >
            custo total
          </p>
        </section>
      </header>
    );
  }
}

export default Header;
