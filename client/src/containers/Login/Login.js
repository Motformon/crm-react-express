import React, {Component} from 'react';
import axios from 'axios';
import NavStart from '../../components/Navigation/NavStart/NavStart';
class Login extends Component {
	
  state = {
	 email: '',
	 password: ''
  }

	loginHandler = async (event) => {
		event.preventDefault();
		try {
			const data = {
				email: this.state.email.toLowerCase(),
				password: this.state.password
			}			
			const response = await axios.post('/api/auth/login/',data);
	
			console.log(response.data);

		} catch (e) {
			console.log(e)
		}

	}

	emailValue = (event) => {
		this.setState({email: event.target.value});
	}

	passwordValue = (event) => {
		this.setState({password: event.target.value});
	}

  render() { 
    return (
      <React.Fragment>
			<NavStart/>
			<div className="auth-block">
				<form
					className="card"
					onSubmit = {this.loginHandler}
				>
					<div className="card-content">
						<span className="card-title">Войти в систему</span>
						<div className="input-field">
							<input id="email" type="email" value={this.state.email} onChange={this.emailValue} required/>
							<label htmlFor="email">Email:</label>
						</div>
						<div className="input-field">
							<input id="password" type="password" value={this.state.password} onChange={this.passwordValue} required/>
							<label htmlFor="password">Пароль:</label>
						</div>
					</div>
					<div className="card-action">
						<button type="submit" className="modal-action btn waves-effect">Войти</button>
					</div>
				</form>
			</div>
      </React.Fragment>
    )
  }
}



export default Login;