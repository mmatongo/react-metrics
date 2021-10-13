import React from 'react';
import PropTypes from 'prop-types';
import { MicOutlined, SettingsOutlined } from '@mui/icons-material';
import Back from './Back';

const Nav = ({ backButton, title }) => (
  <div className="nav-container">
    <div className="nav-contents">
      <Back title={backButton} />
      <p>{title}</p>
      <div className="nav-icons">
        <MicOutlined className="nav-icon" />
        <SettingsOutlined className="nav-icon" />
      </div>
    </div>
  </div>
);

Nav.propTypes = ({
  title: PropTypes.string,
  backButton: PropTypes.string,
}).isRequired;

export default Nav;
