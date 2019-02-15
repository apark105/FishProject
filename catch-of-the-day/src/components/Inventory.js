import React, { Component } from 'react'
import AddFishForm from './AddFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h1>Inventoryj!!!</h1>
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory; 