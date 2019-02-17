import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fishes: {},
            order: {}
        }
    }

    componentDidMount() {
        const { params } = this.props.match
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            //reference to the piece of data in the firebase; sync the base with the name of the store; / allows you to go deeper to the object
            context: this,
            state: 'fishes'
        })
    }

    componentDidUpdate() {
        console.log('did it get updated?')
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }


    componentWillUnmount() {
        base.removeBinding(this.ref);
        // console.log('unmounting!!!!')
    }

    addFish = (fish) => {
        console.log('We are adding the Fish here')
        const fishInfo = { ...this.state.fishes }
        fishInfo[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishInfo,
        })
    }

    loadSampleFishes = () => {
        console.log('load fishes')
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    updateFish = (key, updateFish) => {
        const fishes = { ...this.state.fishes};
        fishes[key] = updateFish;
        this.setState({
            fishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => {
                            return (
                                <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
                        })}

                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish} />
            </div>
        )
    }

}
export default App;