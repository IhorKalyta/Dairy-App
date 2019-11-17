import React from 'react';
import './App.css';
import List from './List';
import Comments from './Comment';
import SideBar from './SideBar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      text:'',
      activeItem:{},
      isHidden: true, 
    };
    this.remove = this.remove.bind(this);
  }

  componentDidMount(){
    const items = JSON.parse(window.localStorage.getItem('savedList'))||[];
    this.setState({items});
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault();
    let text = this.state.text.trim();
    if (!text.length) {
      return;
    }
    let itemsCopy = this.state.items.slice();
    itemsCopy.push({id: (new Date()).getTime(), title: text, commentsCount: 0, comments: [], displayComment: false});

    this.setState({
      text:'',
      items:itemsCopy,
    },
    this.saveToLocalStorage
    );
  }

  remove = (index) =>{
    let items = this.state.items.slice();
    items.splice(index, 1);
    this.setState({
      items,
    },
    this.saveToLocalStorage
    );
  }

  addComment = (inputComment) => {
     const commentCopy = this.state.items.map(item => {
       if (item.id === this.state.activeItem.id) {
         return {
           ...item, 
           commentsCount: item.comments.length + 1,
           comments: item.comments.concat({id: item.comments.length + 1, text: inputComment})
          } 
       }
         return item
      });
      this.setState({
       items: commentCopy
      },
       this.saveToLocalStorage
      )
   }

  getActiveItem = () => this.state.items.find(item => item.id === this.state.activeItem.id);

  saveToLocalStorage = () => {
    window.localStorage.setItem('savedList', JSON.stringify(this.state.items));
  }
  
  render() {
    return (
      <div className='App'>
        <SideBar/>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-sm-6'>
            <div className='card'>
            <div className='card-body'>
              <h1 className='font-weight-light'>Items</h1>
              <form className='app' onSubmit={this.onSubmit}>
                <div className='row'>
                  <div className='col-sm-9'>
                    <input 
                      type='text'
                      className='form-control mb-2'
                      placeholder='Type name here...'
                      value={this.state.text}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='col-sm-3'>
                    <button className='btn btn-info'>Add new</button>
                  </div>
                </div>
                <ul className='list-group list-group-flush' id='list-tab' role='tablist'>
                {
                  this.state.items.map((item, index) => 
                  (<List
                      item={item} 
                      key={item.id} 
                      id={index} 
                      removeItem={this.remove} 
                      setActiveComment={() => this.setState({ activeItem: item })} 
                      toggleHidden={() => this.setState({ isHidden: false })}
                    />
                  ))
                }
              </ul>
              </form>
              </div>
              </div>
            </div>          
              {!this.state.isHidden && <Comments
                addComment={this.addComment} 
                activeItem={this.getActiveItem()}
              />}              
          </div>
        </div>
      </div>
    );
  } 
}
export default App;
