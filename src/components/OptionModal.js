import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option" ariaHideApp={false} 
    closeTimeoutMS={200} className="modal" onRequestClose={props.handleClearOption}>
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearOption}>Close</button>
  </Modal>
)

export default OptionModal
