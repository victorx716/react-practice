import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button disabled = {!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  );
}

module.exports = Action;