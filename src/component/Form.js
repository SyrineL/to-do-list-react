import React from "react"


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ""
        }
      }
      handleTaskDescriptionChange = (e) => {
        this.setState({ task: e.target.value })
      }
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.task)
        // this.setState({ task: ""})
      }

    render () {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h1>To do list</h1>
        <div className="mb-3">
          <input type="text" className="form-control" onChange={this.handleTaskDescriptionChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        
      </form>
    );
  }
  }
  
  export default Form;
  
  