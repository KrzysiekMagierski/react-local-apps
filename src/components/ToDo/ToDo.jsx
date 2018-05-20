import React, {Component} from 'react';
import './ToDo.css';
import Columns from './Columns.jsx';
import Counter from './Counter.jsx';
import Task from './Task.jsx';
import Tasklist from './Tasklist.jsx';


class ToDo extends Component {

  state = {
    tasks: [
      {
        title: 'Buy Milk',
        done: false
      },
      {
        title: 'Walk the dog',
        done: true
      }

    ]   
  }

  checkIfDone = () => {

    let sum = 0
    this.state.tasks.forEach((task) => {
      if (task.done) {
        sum++
      }
    })

    return sum;
  }

  render() {

    return (
      <section className="section todo project">
        <div className="columns">
          <div className="column container is-fluid">
            <Counter total = {this.state.tasks.length} doneCount = {this.checkIfDone()}/>
            <Tasklist tasks = {this.state.tasks}/>
            <Columns/>
           </div>
        </div>  
      </section>
    )

  }  
}

export default ToDo;