import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Badge from './components/Badge';

import { messageSvg, closeSvg } from '../../../../constants';

import './style.scss';

const Launcher = ({ toggle, chatOpened, badge }) =>
  <button type="button" className={chatOpened ? 'launcher hide-sm' : 'launcher'} onClick={toggle}>
    <Badge badge={badge} />
    {
      chatOpened ?
        <div className="close-launcher">{ closeSvg }</div> :
        <div className="open-launcher">{ messageSvg }</div>
    }
  </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
