import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import './styles.scss';
import { createNewMessage, setupDisplayMessages } from '../../../../../../store/reducers/helper';

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {
  componentDidMount() {
    scrollToBottom();
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  getComponentToRender = (message) => {
    console.log('message :', message);
    const ComponentToRender = message.get('component');
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    return <ComponentToRender message={message} />;
  };

  render() {
    const displayMessages = setupDisplayMessages(this.props.passedMessages);

    console.log('displayMessages :', displayMessages);

    return (
      <div id="messages" className="messages-container">
        { displayMessages.map((message, index) =>
          <div className="message" key={index}>
            { this.props.profileAvatar && message.get('showAvatar') &&
              <img src={ this.props.profileAvatar } className="avatar" alt="profile" /> }

            { this.getComponentToRender(message) }
          </div> )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string,
  passedMessages: PropTypes.object,
};

export default connect(store => ({
  messages: store.messages
}))(Messages);
