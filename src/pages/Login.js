import React from 'react';
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
    const { email, password } = this.state;
    // jogar o state do componente para o globalState
    console.log(email);
    console.log(password);
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

export default Login;
