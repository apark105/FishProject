import React, { Component } from 'react'
import { getFunName } from '../helpers';

class StorePicker extends Component {
    constructor(props){
        super(props);

        this.state = {
            storeName: '',
        }
    }

    myInput = React.createRef();

    goToStore=(event)=>{
        event.preventDefault();
        const storeName = this.myInput.current.value
        console.log(storeName)
        this.props.history.push(`/store/${storeName}`)
    }

    handleInput = (event) => {
        this.setState({
            storeName: event.target.value
        })
    }

    render() {

        // console.log('store name?', this.state.storeName)
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" 
                    required placeholder="Store Name" 
                    onChange={this.handleInput} 
                    ref={this.myInput}
                    value={this.state.value} 
                    defaultValue={getFunName()} />
                <button>Visit Store</button>
            </form>
        )
    }
}

export default StorePicker; 