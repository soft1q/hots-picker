import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

export class UserInfo extends Component {
    render() {
        return (
            <div className="profile">
            <span>
                <div className = "button_back_1" >
                    <div className = "button_1">
                        <div className = "button_text">Моя история</div>
                    </div>
                </div>
            </span>
            <div className = "button_back_1" >
                <div className = "button_1">
                    <div className = "button_text">{ this.props.user.username }</div>
                </div>
            </div>
            <Link className = "back_button_back" to="/">
                <div className = "button">
                    <div className = "button_text">Назад</div>
                </div>
            </Link>
            <a className = "back_button_back_1" onClick={this.props.logout}>
                <div className = "button">
                    <div className = "button_text">Выйти</div>
                </div>
            </a>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, { logout })(UserInfo)
