import React, { Component } from 'react'
import AddFishForm from './AddFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h1>Inventory!!!</h1>
                <AddFishForm/>
            </div>
        )
    }
}

export default Inventory; 