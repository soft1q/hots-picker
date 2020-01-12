import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class BlueTeam extends Component {
    render() {
		const picked = this.props.blue_picks
		const heroes = this.props.heroes
		let table = []
		let icon = {}
		for(let i = 0; i < 5; i++) {
			if (i < picked.length) {
				icon = (<td>
					<div className="box polygon">
						<img src={heroes[picked[i]].icon}/>
					</div>
				</td>)
			} else {
				icon = (<td>
					<img src="../../static/img/ромбики.png" alt="ромбики" width="90%" />
				</td>)
			}
			if (i % 2 == 0) {
				table.push(<tr key={i}>
					{icon}
					<td />
				</tr>)
			} else {
				table.push(<tr key={i}>
					<td />
					{icon}
				</tr>)
			}
		}
        return (
			<div>
				<table border="0" align="left" width="25%" height="70%" cellSpacing="0" cellPadding="0" id="romb1">
					<tbody>
						{table}
					</tbody>
				</table>
			</div>
        )
    }
}

const mapStateToProps = state => ({
    heroes: state.heroes.heroes,
    blue_picks: state.pick.blue_picks
});

export default connect(mapStateToProps)(BlueTeam);
