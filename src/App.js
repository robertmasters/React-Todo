import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todolistData = 
  [
    {
      name: 'Organize Garage',
      id: 111,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 222,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todolistData
    };
  }

  
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todolistData: [...this.state.todolistData, newItem]
    });
  };

  toggleItem = (itemId) => {
    console.log(itemId);
    this.setState({
      todolistData: this.state.todolistData.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    // if item is completed (item.completed is true) then filter out
    this.setState({
      todolistData: this.state.todolistData.filter((item) => !item.completed)
    });
  };

  render() {
    return (
<div className="container">
        <h2>Todo List</h2>

        <TodoList
        todolistData={this.state.todolistData}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
      />

        <TodoForm addItem={this.addItem}  />


      </div>
    );
  }
}

export default App;
