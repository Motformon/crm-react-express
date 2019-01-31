import React, {Component} from 'react';
import NavStart from '../../components/Navigation/NavStart/NavStart';
class Login extends Component {

  state = {
   
  }


  render() { 
    return (
      <React.Fragment>
				<NavStart/>
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