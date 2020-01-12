import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeHero } from '../../actions/pick'

export class RedTeam extends Component {
    render() {
        const picked = this.props.red_picks
		const heroes = this.props.heroes
		let table = []
		let icon
		for(let i = 0; i < 5; i++) {
			if (i < picked.length) {
				icon = (<td>
					<div className="box polygon" onClick={this.props.removeHero.bind(this, picked[i], 'red')}>
						<img src={heroes[picked[i]].icon}/>
					</div>
				</td>)
			} else {
				icon = (<td>
					<img src="../../static/img/ромбики.png" alt="ромбики" width="90%" />
				</td>)
			}
			if (i % 2 == 1) {
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
				<table border="0" align="right" width="25%" height="70%" cellSpacing="0" cellPadding="0" id="romb">
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
    red_picks: state.pick.red_picks
});

export default connect(mapStateToProps, { removeHero })(RedTeam);