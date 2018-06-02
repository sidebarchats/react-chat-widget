import { Map } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER } from 'constants';

import Message from 'messagesComponents/Message';
import Snippet from 'messagesComponents/Snippet';

export function createNewMessage(text, sender, timeStamp = null) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    timeStamp: timeStamp,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createLinkSnippet(link) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    title: link.title,
    link: link.link,
    target: link.target || '_blank',
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar: true
  });
}

export function createComponentMessage(component, props, showAvatar) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}

export function setupDisplayMessages(messages) {
  const displayMessagesArray = [];
  const displayMessagesMap = [];

  for (let key in messages) {
    displayMessagesArray.push({ ...messages[key] });
  }

  displayMessagesArray.sort((x, y) => {
    const xTime = x.client_timestamp;
    const yTime = y.client_timestamp;
    let comparison = 0;

    if (xTime > yTime) {
      comparison = 1;
    } else if (xTime < yTime) {
      comparison = -1;
    }

    return comparison;
  });

  for (let i = 0; i < displayMessagesArray.length; i++) {
    const message = displayMessagesArray[i];
    const sender = message.sender_type === 'shopper' ? 'client' : 'response';

    displayMessagesMap.push(createNewMessage(message.body, sender, message.client_timestamp));
  }

  return displayMessagesMap;
}
