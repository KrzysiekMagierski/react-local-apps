import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  return ( 
    <div>
        <label className="checkbox is-size-3">
        <input className="todo-checkbox" type="checkbox" checked= {props.done} />
        {props.name}
        </label>
    </div>
  ) 

  }

export default Task;