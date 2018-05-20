import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.jsx';


const Tasklist = (props) => {
  return ( 
    <div className="notification">
    {props.tasks.map((task) => {
        return (
           <Task name = {task.title} done = {task.done} />
        );
      })
    }
    </div>
  )}

  Tasklist.propTypes = {
    tasks: PropTypes.array.isRequired
  }



export default Tasklist;