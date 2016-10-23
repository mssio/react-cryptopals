import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';
// import { Icon, Menu, Dropdown } from 'semantic-ui-react';
import MainMenu from './MainMenu';

const App = (props) => {
  return (
    <div>
      <MainMenu />
      <div className="ui container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
