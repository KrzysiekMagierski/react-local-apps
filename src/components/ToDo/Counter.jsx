import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return ( 
    <h1 className="title">ToDo React App &nbsp;  
        <span className="has-text-success">{props.doneCount}</span> / {props.total}
    </h1>
  ) 

  }
Counter.PropTypes = {
    total: PropTypes.number,
    doneCount: PropTypes.number

}

export default Counter;