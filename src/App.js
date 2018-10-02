import React, { Component } from 'react'
import SingleTask from './component/SingleTask'
import './App.css'

class App extends Component {
  state = {
    tasks : [
      {title: 'create a Readme'},
      {title: 'add something else'},
      {title: 'read the specs'}
    ]
  }
  render () {
    let taskList = this.state.tasks.map((task, index) => {
      return <SingleTask id={index} title={task.title} />
    })
    return (
      <div className='App'>
        <div>
          <h1>Todo List</h1>
          <form>
            <label>
          Name:
              <input type='text' name='name' />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <p>sort by</p>
          <button>Name</button>
          <button>Due Date</button>
          <button>Priority</button>
          <div>
            {taskList}
          </div>
        </div>
      </div>
    )
  }
}

export default App
