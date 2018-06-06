import React, { PureComponent } from 'react';
import moment from 'moment';
import marked from 'marked';
import { PROP_TYPES } from '../../../../../../../../constants';

import './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'), { sanitize: true });
    const timeStamp = moment(this.props.message.get('timeStamp')).format('H:mm a');

    return (
      <div className={this.props.message.get('sender')}>
        <div className="message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        <div className="time-stamp">{timeStamp}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
