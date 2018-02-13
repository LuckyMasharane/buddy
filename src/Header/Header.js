import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu,Input, Dropdown, Icon, Image,Search } from 'semantic-ui-react';
import {Link,Router, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
const logo = require('../images/logo.png');


class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Menu.Item>
            <a href="/auth/google">Login</a>
          </Menu.Item>
        );
      default:
        return (
          <Menu.Item>
            <a href="/api/logout">Log Out</a>
          </Menu.Item>
        );
    }

  }
  constructor(props)
  {
    super(props)  
    this.state={
      user : ''
    }
    this.doLogout = this.doLogout.bind(this);
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color,categories } = this.props
    const { activeItem } = this.state
    console.log(this.props)
 
    return (
      <Menu color={'red'}  size='large' fixed='top'>
        <Link to="/"><Menu.Item color={'red'} link={true}  >
        <Image src={logo} size="small" /> 
        </Menu.Item></Link>
       
        <Menu.Menu  position='right'>
          

          {(() => {
                      if (this.props.user){
                        return (
                                  <Dropdown item text={this.props.user.displayName}>
                                    <Dropdown.Menu>
                                      <Link to="/profile"><Dropdown.Item><Icon name="user" /> Account</Dropdown.Item></Link>
                                      {this.props.user.admin? <Link to="/manage"><Dropdown.Item><Icon name="setting" /> Manage Store</Dropdown.Item></Link>:null}
                                      <Dropdown.Item href="/api/logout" ><Icon name="sign out" /> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                        )
                      } else {
                        return (
                          <Menu.Item color='red' icon="arrow circle right" href="/login" name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
                          )
                      }
                   })()}
        </Menu.Menu>
      </Menu>
    )
  }

  doLogout(){
  window.location.href="/api/logout";
  
  }
}

function matchStateToProps(state){
  return {
    user: state.auth
  }
}

export default withRouter(connect(matchStateToProps)(Header));
