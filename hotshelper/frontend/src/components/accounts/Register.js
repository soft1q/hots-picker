import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <div id="wrapper" />
                <div className="user-icon" />
                <div className="pass-icon" />
	
                <form name="login-form" className="login-form" onSubmit={this.onSubmit}>

                    <div className="header">
                        <h1>Регистрация</h1>
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
                            name="email" 
                            type="email" 
                            className="input email" 
                            value={email} 
                            onChange={this.onChange}
                            placeholder="Ведите email"
                        />
                        <input 
                            name="password" 
                            type="password" 
                            className="input password"
                            onChange={this.onChange}
                            value={password}
                            placeholder="Ведите пароль"
                        />
                        <input 
                            name="password2" 
                            type="password" 
                            className="input password"
                            onChange={this.onChange}
                            value={password2}
                            placeholder="Повторите пароль"
                        />
                    </div>

                    <div className="footer">
                        <input type="submit" name="submit" value="Зарегистрироваться" className="button" />
                        <Link to='/login' className="register">Войти</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
