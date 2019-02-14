import React, { Component } from 'react'



class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish)
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} placeholder="Name" type="text" />
                <input name="price" ref={this.priceRef} placeholder="Price" type="text" />
                <select name="status" ref={this.statusRef} placeholder="Status" type="text">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" type="text"></textarea>
                <input name="image" ref={this.imageRef} placeholder="Image" type="text" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm; 