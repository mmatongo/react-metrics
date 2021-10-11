import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ backButton, title }) => (
  <div className="nav-container">
    <div className="nav-content">
      <p>{backButton}</p>
      <p>{title}</p>
      <i>
        Thing 1
      </i>
      <br />
      <i>
        Thing 2
      </i>
    </div>
  </div>
);

Nav.propTypes = ({
  title: PropTypes.string,
  backButton: PropTypes.string,
}).isRequired;

export default Nav;
