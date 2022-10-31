import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../redux/actions';
import '../style/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
  }

  enableButton = () => {
    const { email, password } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const passwordMinLength = 6;
    if (password.length >= passwordMinLength && regex.test(email)) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  };

  onClickButton = () => {
    const { email } = this.state;
    const { dispatch, history: { push } } = this.props;
    // jogar o state do componente para o globalState
    dispatch(login(email));
    push('/carteira');
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(({
      [name]: value,
    }), () => this.enableButton());
  };

  render() {
    const { disableButton } = this.state;
    return (
      <section
        className="login-page"
      >
        <form
          className="login-form"
        >
          <p>E-mail:</p>
          <input
            data-testid="email-input"
            name="email"
            onChange={ this.onInputChange }
          />
          <p>Senha</p>
          <input
            data-testid="password-input"
            name="password"
            onChange={ this.onInputChange }
          />
          <div>
            <button
              type="button"
              disabled={ disableButton }
              onClick={ this.onClickButton }
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

Login.propTypes = {
  dispatch: PropTypes.func,
  push: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Login);
