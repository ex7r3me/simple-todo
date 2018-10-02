import React, { Component } from 'react'
import SingleTask from './component/SingleTask'
import './App.css'

class App extends Component {
  render () {
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
            <SingleTask />
          </div>
        </div>
      </div>
    )
  }
}

export default App
