import React from 'react';
import PropTypes from 'prop-types';

const Columns = (props) => {
  return ( 
    <div className="columns">
    <div className="column is-two-thirds">
      <input className="input is-large" placeholder="Your task description" />
    </div>
    <div className="column">  
      <a className="button is-link is-large">Add Task</a>
    </div>
  </div>  
  ) 

  }

export default Columns;