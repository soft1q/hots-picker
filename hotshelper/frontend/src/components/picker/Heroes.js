import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHeroes } from '../../actions/heroes';
import { pickHero } from '../../actions/pick';
import { addRecord } from '../../actions/history'

export class Heroes extends Component {

    componentDidMount() {
        this.props.getHeroes();
    };

    onClick = (e) => {
        if (this.props.blue_picks.length + this.props.red_picks.length == 10) {
            const pick = {
                hero_1: this.props.heroes[this.props.blue_picks[0]].id,
                hero_2: this.props.heroes[this.props.blue_picks[1]].id,
                hero_3: this.props.heroes[this.props.blue_picks[2]].id,
                hero_4: this.props.heroes[this.props.blue_picks[3]].id,
                hero_5: this.props.heroes[this.props.blue_picks[4]].id,
                hero_6: this.props.heroes[this.props.red_picks[0]].id,
                hero_7: this.props.heroes[this.props.red_picks[1]].id,
                hero_8: this.props.heroes[this.props.red_picks[2]].id,
                hero_9: this.props.heroes[this.props.red_picks[3]].id,
                hero_10: this.props.heroes[this.props.red_picks[4]].id,
            }
            const record = JSON.stringify(pick)
            console.log(record)
            this.props.addRecord(record)
        }
    }

    render() {
        const hero_num = this.props.heroes.length;
        const heroes = this.props.heroes;
        let table = [];
        let op = 1;
        let vis = this.props.isAuthenticated ? 'visible' : 'hidden';
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
                                &lt;==
                        </button>
                        <button onClick={this.props.pickHero.bind(this, j, 'red')} 
                            type="button">
                                ==>
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
                    op = 1;
                }
                row.push(<td key={heroes[j].id} className="hero">
                    <img src={heroes[j].icon} alt={heroes[j].name} width="90%" style={{opacity: op}}/>
                    <div className="buttons">
                        <button onClick={this.props.pickHero.bind(this, j, 'blue')} 
                            type="button">
                                &lt;==
                        </button>
                        <button onClick={this.props.pickHero.bind(this, j, 'red')} 
                            type="button">
                                ==>
                        </button>
                    </div>
                </td>);
            }
        table.push(<tr key={Math.floor(hero_num / 4)}>{row}</tr>);
        return (
            <div>
                <table border="0" align="center" width="50%" cellSpacing="0" cellPadding="0">
                    <tbody>
                        {table}
                    </tbody>
                </table>
                <div align="center" style={{visibility: vis}}>
                    <a className = "button_back2" onClick={this.onClick}>
                        <div className = "button2">
                            <div className = "batton_text2">Добавить матч</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    heroes: state.heroes.heroes,
    blue_picks: state.pick.blue_picks,
    red_picks: state.pick.red_picks,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getHeroes, pickHero, addRecord })(Heroes);
