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

  render() {
    return (
        <li className={`list-item fade-in ${this.state.style}`}
          onClick={ (item) => {
            this.state.style = 'removing';
            this.state.onClick(this.state.name, this.state.id);
          }}>
          <div className="container">
            <div className="title" >{this.state.name}</div>
          </div>
        </li>
    )
  }
}



export default ListItem;
