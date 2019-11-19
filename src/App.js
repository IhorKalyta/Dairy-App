import React from 'react';
import './App.css';
import List from './components/List';
import Comments from './components/Comment';
import SideBar from './components/SideBar';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      text:'',
      activeItem:{},
      isHidden: true, 
    };
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount(){
    const items = JSON.parse(window.localStorage.getItem('savedList'))||[];
    this.setState({items});

    $('.list-group').on('click','li', function(){
      $(this).addClass('actived').siblings().removeClass('actived');
   });
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  addItem = (e) =>{
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

  removeItem = index =>{
    let items = this.state.items.slice();
    items.splice(index, 1);
    this.setState({
      items,
      isHidden:true,
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
        <div className='container mt-3 mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
            <div className='card item'>
            <div className='card-body'>
              <h1 className='font-weight-light'>Items</h1>
              <form className='app' onSubmit={this.addItem}>
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
                      removeItem={this.removeItem} 
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
