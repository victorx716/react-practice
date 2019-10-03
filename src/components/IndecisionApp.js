import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  // Class properties - no need for constructor function or manually binding functions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick =() => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }
  
  handleAddOption = (option) => {
    // Conditional rendering
    if (!option) {
      return 'Please enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists'
    };

    // Implicitly return by wrapping obj in ()
    this.setState(() => ({
      options: this.state.options.concat(option)
    }))
  }

  handleClearOption = () => {
    this.setState(() => ({
      selectedOption: false
    }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      }
    } catch(e) {
      // Don't do anything
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    const title = 'Groceries';
    const subtitle = 'What should I buy?';

    return (
      <div>
        <Header  subtitle={subtitle} />
        <div className = "container">
        <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick} />
        <div className="widget">
          <Options options={this.state.options} 
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOption handleAddOption = {this.handleAddOption}/>
        </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearOption = {this.handleClearOption}/>
      </div>
    );
  }
}

module.exports = IndecisionApp;