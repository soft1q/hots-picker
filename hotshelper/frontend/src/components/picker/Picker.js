import React, { Fragment } from 'react'
import BlueTeam from './BlueTeam'
import RedTeam from './RedTeam'
import Heroes from './Heroes'
import { Link } from 'react-router-dom'

export default function Picker() {
    return (
        <Fragment>
            <Link to="/profile" className = "button_back">
		        <div className = "button">
		            <div className = "batton_text">Профиль</div>
		        </div>
		    </Link>
            <BlueTeam />
            <RedTeam />
            <Heroes />
        </Fragment>
    )
}
