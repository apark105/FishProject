import React, { Component } from 'react'

class AddFishForm extends Component {

    createFish = (event) => {
        event.preventDefault();
        console.log('My Fish')
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" placeholder="Name" type="text"/>
                <input name="price" placeholder="Price" type="text"/>
                <select name="status" placeholder="Status" type="text">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" type="text"></textarea>
                <input name="image" placeholder="Image" type="text"/>
                <button>+ Add Fish</button>
               
            </form>
        )
    }
}

export default AddFishForm; 