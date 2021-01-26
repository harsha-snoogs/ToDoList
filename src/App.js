import "./App.css";

import React, { Component } from 'react'
import ListItem from "./ListItem"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      list:[],
      currentItem:{
        text:"",
        date:""
      }
    }
  }
  handleChange=(e)=>{
    // console.log(e.target.value);
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  deleteItem=(key)=>{
    let items = this.state.list
    let updatedList = items.filter(it=> it.key!==key) 
    // console.log(updatedList);
    this.setState({
      list:updatedList
    })
  }
  addItem=(e)=>{
    e.preventDefault();
    // console.log(this.state.currentItem);
    let data= this.state.currentItem
    if(data!=="")
    {
      let item =[...this.state.list, data]
      console.log(item);
      this.setState({
        list: item,
        currentItem:{
          text:"",
          key:""
        }
      }
      // ,()=>{
      //   console.log(this.state);
      // }
      )
    }
  }
  updateItem=(text,key)=>{
    let items = this.state.list
    let updatedList = items.map(it=> {
      if(it.key===key){
        it.text = text
      }
      return it;
    })
    this.setState({
      list:updatedList
    })
  }
  render() {
    return (
      <div className="App">
        <h2>To-Do-List</h2>
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" onChange={this.handleChange} value={this.state.currentItem.text} placeholder="Enter the task" />
            <button type="submit" >ADD</button>
            </form>
          </header>
          <ListItem item={this.state.list} delete1={this.deleteItem} updateItem={this.updateItem}/>
      </div>
    )
  }
}

export default App;
