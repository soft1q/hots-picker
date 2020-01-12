import React, { Fragment } from 'react'
import BlueTeam from './BlueTeam'
import RedTeam from './RedTeam'
import Heroes from './Heroes'

export default function Picker() {
    return (
        <Fragment>
            <BlueTeam />
            <RedTeam />
            <Heroes />
        </Fragment>
    )
}
