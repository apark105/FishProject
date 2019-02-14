import React, { Component } from 'react'
import AddFishForm from './AddFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventor">
                <h1>Inventoryj!!!</h1>
                <AddFishForm addFish={this.props.addFish}/>
            </div>
        )
    }
}

export default Inventory; 