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

export const sendSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" xmlSpace="preserve">
    <g>
      <g>
        <path d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395    c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455    c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998    C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907    l-74.979-154.599l228.03-228.027L302.883,459.907z"/>
      </g>
    </g>
  </svg>
);

export const messageSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve">
    <g id="Layer_3"/>
    <g id="Layer_1">
      <g id="basecamp">
        <path d="M65.3,50.5c0-0.6-0.5-1.1-1.1-1.1c-0.3,0-0.5,0.1-0.7,0.3c-2.8,2.5-7.6,4.8-13.4,4.8h0c-5.8,0-10.5-2.3-13.4-4.8    c-0.2-0.2-0.5-0.3-0.8-0.3c-0.7,0-1.1,0.6-1.1,1.2c0,0.5,0.3,0.9,0.6,1.3c1.7,2.5,6.8,6.7,14.6,6.7H50c7.8,0,12.9-4.2,14.6-6.7    C64.9,51.6,65.3,51,65.3,50.5z"/>
        <path d="M73,70c-2-1.1-3.9-3-4.7-5.6c-0.2-0.5,0-0.9,0.4-1.2c5.7-4.4,9.3-10.8,9.3-18c0-13.3-12.5-24.2-28-24.2    c-15.5,0-28,10.8-28,24.2c0,13.3,12.5,24.2,28,24.2c2,0,4-0.2,5.9-0.5c0.5-0.1,0.8,0,1.2,0.2c3.8,2.4,9.5,4.3,14.5,4.3    c1.6,0,2.2-1,2.2-2C73.8,70.7,73.5,70.2,73,70z M65.5,67.6c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.2,0.3-0.3,0.3c-1.4,0-5.7-2.3-8-4.2    c-0.3-0.3-0.7-0.4-1.4-0.2C54,64.2,52,64.4,50,64.4c-12.9,0-23.3-8.6-23.3-19.2c0-10.6,10.4-19.2,23.3-19.2    c12.9,0,23.3,8.6,23.3,19.2c0,6.3-3.7,12-9.4,15.5c-0.4,0.2-0.8,0.7-0.8,1.2C63.1,63,64.1,65.8,65.5,67.6z"/>
      </g>
    </g>
  </svg>
);

export const closeSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" id="Layer_1" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"/><path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"/></g></svg>
);
