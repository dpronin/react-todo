import React, { Component } from 'react'

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.item.name,
      onClick: props.onClick,
      style: props.style
    };
  }

  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === ' ') {
      this.state.onClick(this.state.name, this.state.id);
    }
  }

  render() {
    return (
        <li className={`list-item fadeIn ${this.state.style}`}
          tabIndex="0"
          aria-label={this.state.name}
          onClick={ (item) => {
            this.state.onClick(this.state.name, this.state.id);
          }}
          onKeyPress={ (item) => {
            this.handleKeyPress(item);
          }}>
          <div className="container">
            <div className="title" >{this.state.name}</div>
          </div>
        </li>
    )
  }
}



export default ListItem;
