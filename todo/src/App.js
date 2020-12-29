import { Component } from 'react';
import TodoItems from './components/TodoItems';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: "",
      selectedAll: false,
      viewMode: "All",
      todoItems: [
        {title: "Learn React", is_Complete: false},
        {title: "Learn Django", is_Complete: true},
        {title: "Project 3 CS50: Mail", is_Complete:false },
      ]
    };
    // this.selectAll = this.selectAll.bind(this);
    // this.swapMode = this.swapMode.bind(this);
  }
  componentDidMount(){
    console.log('App render');
  }
            // THESE BELOW METHODS ARE PASSED INTO INNER COMPONENTS

// On every item click, toggle between selected and non-selected 
  onItemClicked(item){
    return() => {
      // console.log(this);
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {...item, is_Complete: !todoItems[index].is_Complete},
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
// Remove an item
  removeItem(item){
    return () => {
      this.setState({
        todoItems: this.state.todoItems.filter( element => element !== item)
      })
    }
  }
//Swap Mode (All-Active-Complete)
  swapMode(){
    return (viewMode) => {
      this.setState({
        viewMode: viewMode
      })
    }
  }            // THESE BELOW METHODS ARE USED FOR THIS COMPONENT ITSELF
// On key up event handler of Input field
  onKeyUp(){
    // console.log(this);
    return (ev)=>{
      if (ev.keyCode === 13){
        let text = ev.target.value;
        if (!text || !text.trim()){
          return;
        }
        this.setState({
          inputValue: "",
          todoItems: [
            {title: text.trim(), is_Complete: false},
            ...this.state.todoItems
          ]
        })
      }
      // console.log(this);
      // console.log(ev.target);
    } 
  }
// Onchange of input field
  onChange(){
    return (ev)=>{
      this.setState({
        inputValue: ev.target.value
      })
    }
  }
// Select All Items
  selectAll(){
    function a (){
      let selectStatus = this.state.selectedAll;
      this.setState({
        selectedAll: !selectStatus,
        todoItems: this.state.todoItems.map( (item) => {
          return {
            ...item,
            is_Complete: !selectStatus
          };
        })
      })
    }
    let b = a.bind(this);
    return b;
  }
// Clear Completed Items (Green tick)
  clearComplete(){
    return () => {
      this.setState({
        todoItems: this.state.todoItems.filter(element => !element.is_Complete)
      })
    }
  }

  render() {
    const { todoItems, viewMode } = this.state;
    let itemsToShow;
      if (todoItems.length){
        if (viewMode === "All"){
          itemsToShow = todoItems.filter( (item) => item);
        } else if (viewMode === "Active"){
          itemsToShow = todoItems.filter( (item) => item.is_Complete === false);
        } else {
          itemsToShow = todoItems.filter( (item) => item.is_Complete === true);
        }
        return (
          <div className={'App'}>
          <TodoHeader
            selectAll={this.selectAll()}
            onChange={this.onChange()}
            onKeyUp={this.onKeyUp()}
            inputValue={this.state.inputValue}
          />
          {
            itemsToShow.map( (item, index) => 
              <TodoItems
              viewMode={viewMode}
              key={index}
              item={item}
              onClick = {this.onItemClicked(item)}
              removeItem = {this.removeItem(item)}
              />
            )
          }
          <TodoFooter
          swapMode={this.swapMode()}
          todoItems={todoItems}
          clearComplete={this.clearComplete()}
          />
        </div>
        )
      } else {
        return (
          <div className={'App'}>
            <TodoHeader 
            onChange={this.onChange()}
            onKeyUp={this.onKeyUp()}
            inputValue={this.state.inputValue}
            />
            Nothing to do
          </div>
        )
      }
  }
}

export default App;
