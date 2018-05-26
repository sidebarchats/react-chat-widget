import React from 'react';
import PropTypes from 'prop-types';

import close from 'assets/clear-button.svg';
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
          </svg>
        </button>

        { titleAvatar &&
          <div className="avatar available">
            <img src={titleAvatar} className="avatar" alt="profile" />
          </div> }

        <div className="title">{title}</div>
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
