import React from 'react';

const Action = (props) => (
  <div>
  <button className = "big-button" disabled = {!props.hasOptions} onClick={props.handlePick}>My Grocery Items</button>
  </div>
)

module.exports = Action;