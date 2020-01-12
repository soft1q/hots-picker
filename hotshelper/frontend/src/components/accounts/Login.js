import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <div id="wrapper" />
                <div className="user-icon" />
                <div className="pass-icon" />
	
                <form name="login-form" className="login-form" onSubmit={this.onSubmit}>

                    <div className="header">
                        <h1>Вход</h1>
                    </div>

                    <div className="content">
                        <input 
                            name="username" 
                            type="text" 
                            className="input username" 
                            value={username} 
                            onChange={this.onChange} 
                            placeholder="Ведите логин"
                        />
                        <input 
                            name="password" 
                            type="password" 
                            className="input password"
                            onChange={this.onChange}
                            value={password}
                            placeholder="Ведите пароль"
                        />
                    </div>

                    <div className="footer">
                        <input type="submit" name="submit" value="ВОЙТИ" className="button" />
                        <Link to='/register' className="register">Регистрация</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
