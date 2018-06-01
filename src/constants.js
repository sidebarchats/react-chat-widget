import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

export const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  CUSTOM_COMPONENT: 'component'
};

export const PROP_TYPES = {
  MESSAGE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  SNIPPET: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    title: PropTypes.string,
    link: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  })
};

export const powerSvg = (
  <div className="icon baseline">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M26 6h-4v20h4V6zm9.67 4.33l-2.83 2.83C35.98 15.73 38 19.62 38 24c0 7.73-6.27 14-14 14s-14-6.27-14-14c0-4.38 2.02-8.27 5.16-10.84l-2.83-2.83C8.47 13.63 6 18.52 6 24c0 9.94 8.06 18 18 18s18-8.06 18-18c0-5.48-2.47-10.37-6.33-13.67z"/></svg>
  </div>
);

export const moreSvg = (
  <div className="icon baseline">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>
  </div>
);
