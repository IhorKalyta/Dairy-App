import React from 'react';

export default class List extends React.Component {

  removeItem = (id) =>{
    this.props.removeItem(id);
  }

  render(){
    return(
      <li 
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        onClick={() => {this.props.setActiveComment(); this.props.toggleHidden()}}>
          <h3>{this.props.item.title}</h3>
          <span className='badge badge-info badge-pill'> {this.props.item.commentsCount}</span>
          <div className='button-container'>
              <button className='btn btn-outline-danger' onClick={() => this.props.removeItem(this.props.id)}>Delete</button>
          </div>
      </li>
    );
  }
}  
 