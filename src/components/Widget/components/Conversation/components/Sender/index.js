import React from 'react';
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea';

import { sendSvg } from '../../../../../../constants';

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

  handleSubmit = e => this.props.sendMessage(e)
    .then(() => this.setState({
      maxHeight: 80,
      messageValue: '',
      sendable: false,
    }));

  handleMessageChange = e =>
    this.setState({
      messageValue: e.target.value,
      sendable: e.target.value.length > 0,
    });

  render() {
    const { placeholder, disabledInput, autofocus } = this.props;
    const { maxHeight, sendable } = this.state;

    return (
      <form className="sender" onSubmit={ this.handleSubmit }>
        <TextareaAutosize
          autoFocus={ autofocus }
          autoComplete="off"
          className="new-message"
          disabled={ disabledInput }
          name="message"
          onChange={ this.handleMessageChange }
          placeholder={ placeholder }
          style={ { maxHeight: maxHeight, boxSizing: 'border-box' } }
        />

        <button className={ `send ${sendable ? 'sendable' : ''}` } disabled={ !sendable } type="submit">
          { sendSvg }
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
