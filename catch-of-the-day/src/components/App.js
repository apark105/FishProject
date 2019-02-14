import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish = (fish) => {
        console.log('We are adding the Fish here')
        const fishInfo = {...this.state.fishes}
        fishInfo[`fish${Date.now()}`] = fish; 
        this.setState({
            fishes: fishInfo, 
        })
    }

    loadSampleFishes=()=>{
        console.log('load fishes')
        this.setState({
            fishes: sampleFishes
        })
    }


    render() {

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map( key => {
                           return (
                               <Fish key={key} details={this.state.fishes[key]}/>)})}

                    </ul>
                </div>
                    <Order/>
                    <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }

}
export default App;