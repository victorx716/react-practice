import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <div className="widget-header" >
      <h3 className="widget-title">Your Groceries</h3>
      <button className="button--link" onClick = {props.handleDeleteOptions}>Remove all</button>
    </div>
    {props.options.length === 0 && <p className="widget-message">Please add an item</p>}
    {props.options.map((option, index) => 
    <Option 
      key={option} 
      optionText={option}
      count={index + 1}
      handleDeleteOption = {props.handleDeleteOption}
    />
    )}
  </div>
)

module.exports = Options;