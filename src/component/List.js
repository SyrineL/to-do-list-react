import React from "react"


class List extends React.Component {
    

    render () {

        const { tasks } = this.props

    return (
      <div className="container" onSubmit={this.handleSubmit}>
        <h1>List</h1>
        <div className="row">
            {tasks.map( (task, index) => (
            <>
                <div className="col-6">
                <label>Description</label>
                <p>{task.description}</p>
                </div>
                <div className="col-3">
                <label>Status</label>
                <p>{task.status}</p>
                </div>
                <div className="col-3">
                <button onClick={() => this.props.deleteTask(index)} className="btn btn-danger">Delete</button>
                </div>
            </>
            ))} 
        </div>
      </div>
    );
  }
  }
  
  export default List;
  
  