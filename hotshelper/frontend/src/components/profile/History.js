import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHistory, deleteRecord } from '../../actions/history'
import { getHeroes } from '../../actions/heroes'

export class History extends Component {

    componentDidMount() {
        this.props.getHistory()
        this.props.getHeroes()
    }

    render() {
        let table = []
        const records = this.props.history
        records.forEach(record => {
            table.push(
                <tr key={record.id}>
                    <td className = "blue">
                        <div className="box polygon"> 
                            <img src={
                                this.props.heroes.filter(hero => 
                                    hero.id == record.hero_1
                                )[0].icon
                            } />             
                        </div>
                    </td>
                    <td className="blue">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_2
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="blue">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_3
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="blue">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_4
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="blue_w">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_5
                                )[0].icon
                            } />
                        </div>
                    </td>

                    <td className="red">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_6
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="red">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_7
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="red">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_8
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="red">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_9
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td className="red">
                        <div className="box polygon">
                            <img src={
                                this.props.heroes.filter(hero =>
                                    hero.id == record.hero_10
                                )[0].icon
                            } />
                        </div>
                    </td>
                    <td>
                        <button className="button_back" type="reset" onClick={this.props.deleteRecord.bind(this, record.id)}>
                            <div className="button">
                                <div className="button_text">Удалить</div>
                            </div>
                        </button>
                    </td>
                </tr>            
            )
        });
        return (
            <div className="profile">
                <table align="center">
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    history: state.history.records,
    heroes: state.heroes.heroes
})

export default connect(mapStateToProps, { getHistory, getHeroes, deleteRecord })(History)
