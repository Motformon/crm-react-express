import React, {Component} from 'react'

class Login extends Component {

  state = {
   
  }


  render() {
    return (
      <React.Fragment>
				<nav>
						<div className="nav-wrapper grey darken-1">
								<a href="#" className="brand-logo">Newborn</a>
								<ul id="nav-mobile" className="right hide-on-med-and-down">
										<li><a>Вход</a></li>
										<li><a>Регистрация</a></li>
								</ul>
						</div>
				</nav>

				<div className="auth-block">
						<div className="card">
								<div className="card-content">
										<span className="card-title">Войти в систему</span>
										<div className="input-field">
												<input id="email" type="email" required/>
												<label for="email">Email:</label>
										</div>
										<div className="input-field">
												<input id="password" type="password" required/>
												<label for="password">Пароль:</label>
										</div>
								</div>
								<div className="card-action">
										<button className="modal-action btn waves-effect">Войти</button>
								</div>
						</div>
				</div>
      </React.Fragment>
    )
  }
}



export default Login;