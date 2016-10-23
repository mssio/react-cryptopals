import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, Dropdown } from 'semantic-ui-react';

class MainMenu extends React.Component {
  state = {
    activeItem: 'home',
    cryptoClass: 'link item'
  }

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name,
    cryptoClass: 'link item'
  })

  handleDropdownClick = () => this.setState({
    activeItem: null,
    cryptoClass: 'link item active'
  })

  render() {
    return (
      <Menu>
        <Menu.Item as={IndexLink} to="/"
          name="home" onClick={this.handleItemClick}
        >
          <img src={require('../images/logo.png')} />
        </Menu.Item>
        <Menu.Item as={IndexLink} to="/"
          name="home" active={this.state.activeItem === 'home'} onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Dropdown
          text="Cryptopals" pointing className={this.state.cryptoClass}
        >
          <Dropdown.Menu>
            {/* == dropdown not working please fix ==
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Challenge 1</span>
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>Set 1</Dropdown.Item>
                <Dropdown.Item>Set 2</Dropdown.Item>
                <Dropdown.Item>Set 3</Dropdown.Item>
                <Dropdown.Item>Set 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            */}
            <Dropdown.Item as={Link} to="/challenge/1/step/1"
              onClick={this.handleDropdownClick}
            >
              Challenge 1
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 2
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 3
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 4
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 5
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 6
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 7
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/coming-soon"
              onClick={this.handleDropdownClick}
            >
              Challenge 8
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} to="/about"
          name="about" active={this.state.activeItem === 'about'} onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
