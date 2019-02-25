import React, {Component} from 'react';
import axios from 'axios';
import NavStart from '../../components/Navigation/NavStart/NavStart';
class Registration extends Component {

  state = {
		email: '',
		password: ''
	}

	 registerHandler = async (event) => {
		event.preventDefault();
		try {
			const data = {
				email: this.state.email.toLowerCase(),
				password: this.state.password
			}			

			const response = await axios.post('/api/auth/register/',data);
			alert('Аккаунт создан');
	
			console.log(response.data);

		} catch (e) {
			console.log(e)
			if(e.message === 'Request failed with status code 409') {
				alert('Такой email уже существует');
			}
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
							onSubmit = {this.registerHandler}
						>
								<div className="card-content">
										<span className="card-title">Создать аккаунт</span>
										<div className="input-field">
												<input id="email" value={this.state.email} onChange={this.emailValue} type="email" required/>
												<label htmlFor="email">Email:</label>
										</div>
										<div className="input-field">
												<input id="password" value={this.state.password} onChange={this.passwordValue} type="password" required/>
												<label htmlFor="password">Пароль:</label>
										</div>
								</div>
								<div className="card-action">
										<button className="modal-action btn waves-effect">Создать</button>
								</div>
						</form>
				</div>
      </React.Fragment>
    )
  }
}



export default Registration;