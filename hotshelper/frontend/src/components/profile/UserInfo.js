import React from 'react'

export default function UserInfo() {
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
                    <div className = "button_text">Никнейм</div>
                </div>
            </div>
            <a className = "back_button_back" href = "2.html">
                <div className = "button">
                    <div className = "button_text">Назад</div>
                </div>
            </a>
        </div>
    )
}
