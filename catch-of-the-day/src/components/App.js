import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish = () => {
        console.log('We are adding the Fish here')
    }


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                    <Order/>
                    <Inventory addFish={this.addFish}/>
            </div>
        )
    }

}
export default App;