
import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getErrorAuthorizationStatus} from "../../redux/user/selectors.js";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderErrorMessage() {
    const {isErrorAuth} = this.props;

    if (isErrorAuth) {
      return (
        <div className="sign-in__message">
          <p>Please enter correct email and password.</p>
        </div>
      );
    }

    return ``;
  }

  _handleSubmit(evt) {
    const {onFormSubmit} = this.props;

    evt.preventDefault();

    onFormSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            {this._renderErrorMessage()}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  required
                  ref={this.loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  required
                  ref={this.passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isErrorAuth: getErrorAuthorizationStatus(state)
});

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  isErrorAuth: PropTypes.bool.isRequired
};

export {SignIn};
export default connect(mapStateToProps)(SignIn);

