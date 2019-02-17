import React, { Component } from 'react';

class EditFishForm extends Component {

  handleChange=(event)=>{
    const updateFish = { 
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
     }
     console.log(updateFish)
     this.props.updateFish(this.props.index, updateFish)
  }

  render() {
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" />
        <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" />
        <select name="status" onChange={this.handleChange} value={this.props.fish.status} type="text">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} type="text"></textarea>
        <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" />
      </div>
    )
  }
}

export default EditFishForm;
