import './App.css';
import React from 'react';
import Form from './component/Form';
import List from './component/List';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    task = { description: task , status: "To do" }
    this.setState({ tasks: [task, ...this.state.tasks] }) 
  }
  deleteTask = (index) => {
    this.state.tasks.splice(index,1)
    this.setState({ tasks: this.state.tasks }) 
    console.log(index)
  }

  render () {
  return (
    <>
      <Form addTask={this.addTask} />
      <List tasks={this.state.tasks} deleteTask={this.deleteTask}/>
    </>
  );
}
}

export default App;

