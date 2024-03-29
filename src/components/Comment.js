import React from 'react';
import './comments.css';

export default class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = event => this.setState({value: event.target.value})
    
    handleEnter = event => {
        if (event.charCode === 13 && event.ctrlKey) {
            this.addComment(this.state.value);
        } 
    }    

    addComment = comment => {
        if (comment.trim() && comment.length > 0) {
          this.props.addComment(comment);
          this.setState({value: ''});
        }   
    }
    
    render() {
        return (
            <div className='col-sm-6'>
                <div className='card'>
                    <div className='card-body'>
                            <h1 className='font-weight-light'>
                                Comments #{this.props.activeItem && this.props.activeItem.title}
                            </h1>
                            <ul className='list-group list-group-flush'>
                                { this.props.activeItem &&
                                    this.props.activeItem.comments.map((comment) =>                                                                           
                                        <li 
                                            className='list-group-item'
                                            key={comment.id}>
                                                <span className='orangeBox'/>
                                                {comment.text}
                                        </li>                                        
                                    )
                                } 
                            </ul>                           
                            <div className='form-group row mt-3'>                            
                                <div className='col-sm-2'>
                                    <span className='grayBox'/>
                                </div>
                                <div className="col-sm-10">
                                    <textarea 
                                        className='form-control'
                                        rows='4'
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleEnter}
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}