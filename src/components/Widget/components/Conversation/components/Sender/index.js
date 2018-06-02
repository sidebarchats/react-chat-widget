import React from 'react';
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea';

import sendSvg from 'assets/send-icon.svg';
import sendEnabledSvg from 'assets/send-icon-enabled.svg';

import './style.scss';

const initialState = () => ({
  maxHeight: 80,
  messageValue: '',
  sendable: false,
});

class Sender extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  handleSubmit = e => {
    if (e) e.preventDefault();

    const { messageValue, sendable } = this.state;

    if (!sendable || !messageValue) return;

    this.props.sendMessage(messageValue)
      .then(() =>
        this.setState({
          maxHeight: 80,
          messageValue: '',
          sendable: false,
        }));
  }

  handleMessageChange = e =>
    this.setState({
      messageValue: e.target.value,
      sendable: e.target.value.length > 0,
    });

  handleEnterPress = e => {
    if (e.keyCode == 13 && e.shiftKey == false && e.ctrlKey == false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  render() {
    const { placeholder, disabledInput, autofocus } = this.props;
    const { maxHeight, messageValue, sendable } = this.state;

    return (
      <form className="sender" onSubmit={ this.handleSubmit }>
        <TextareaAutosize
          autoFocus={ autofocus }
          autoComplete="off"
          className="new-message"
          disabled={ disabledInput }
          name="message"
          onChange={ this.handleMessageChange }
          onKeyDown={ this.handleEnterPress }
          placeholder={ placeholder }
          style={ { maxHeight: maxHeight, boxSizing: 'border-box' } }
          value={ messageValue }
        />

        <button
          className={ `send ${sendable ? 'sendable' : ''}` }
          disabled={ !sendable }
          type="submit"
        ><img src={ sendable ? sendEnabledSvg : sendSvg } />
        </button>
      </form>
    );
  }
}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
};

export default Sender;
