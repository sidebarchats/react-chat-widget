import React from 'react';
import PropTypes from 'prop-types';

import { moreSvg, powerSvg } from '../../../../../../constants';

import close from '../../../../../../../assets/clear-button.svg';
import './style.scss';

const initialState = () => ({
  menuOpen: false,
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  handleShowMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    const {
      title,
      subtitle,
      toggleChat,
      showCloseButton,
      titleAvatar,
      handleEndChat,
    } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className="header">
        <button className={ `close-button ${menuOpen ? 'open' : ''}` } onClick={ this.handleShowMenu }>
          { moreSvg }
        </button>

        { titleAvatar &&
          <div className="avatar available">
            <img src={titleAvatar} className="avatar" alt="profile" />
          </div> }

        <div className="title">{title}</div>

        <div className={ `menu ${menuOpen ? 'open' : ''}` }>
          <ul>
            <li><a onClick={ handleEndChat }>{ powerSvg } End Chat</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  titleAvatar: PropTypes.string,
  handleEndChat: PropTypes.func,
};

export default Header;
