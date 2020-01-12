import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeroes } from '../../actions/heroes';
import { pickHero } from '../../actions/pick';

export class Heroes extends Component {
    static propTypes = {
        heroes: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getHeroes();
    };

    render() {
        const hero_num = this.props.heroes.length;
        const heroes = this.props.heroes;
        let table = [];
        let op = 1;
        for (let i = 0; i < Math.floor(hero_num / 4); i++) {
            let row = [];
            for (let j = 4 * i; j < 4 * i + 4; j++) {
                if (this.props.blue_picks.includes(j) || this.props.red_picks.includes(j)) {
                    op = 0.5
                } else {
                    op = 1;
                }
                row.push(<td key={heroes[j].id} className="hero">
                    <img src={heroes[j].icon} alt={heroes[j].name} width="90%" style={{opacity: op}}/>
                    <div className="buttons">
                        <button onClick={this.props.pickHero.bind(this, j, 'blue')} 
                            type="button">
                                &lt;----
                        </button>
                        <button onClick={this.props.pickHero.bind(this, j, 'red')} 
                            type="button">
                                ---->
                        </button>
                    </div>
                </td>);
            }
            table.push(<tr key={i}>{row}</tr>);
        };
        let row = [];
        for (let j = 4 * Math.floor(hero_num / 4); j < hero_num; j++) {
            if (this.props.blue_picks.includes(j) || this.props.red_picks.includes(j)) {
                op = 0.5
            } else {
                op = 1
            }
            row.push(<td key={heroes[j].id}>
                <img src={heroes[j].icon} alt={heroes[j].name} width="90%" style={{opacity: op}}/>
                <div className="buttons">
                    <button onClick={this.props.pickHero.bind(this, j, 'blue')} 
                        type="button">
                            &lt;----
                    </button>
                    <button onClick={this.props.pickHero.bind(this, j, 'red')} 
                        type="button">
                            ---->
                    </button>
                </div>
            </td>);
        }
        table.push(<tr key={Math.floor(hero_num / 4)}>{row}</tr>);
        return (
            <table border="0" align="center" width="50%" cellSpacing="0" cellPadding="0">
                <tbody>
                    {table}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    heroes: state.heroes.heroes,
    blue_picks: state.pick.blue_picks,
    red_picks: state.pick.red_picks
});

export default connect(mapStateToProps, { getHeroes, pickHero })(Heroes);
