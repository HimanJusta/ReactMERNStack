import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li style={{ padding: '0 10px' }}>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          [
            <li key={1} style={{ padding: '0 10px' }}>
              <Payments />
            </li>,
            <li key={3} style={{ padding: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>,
            <li key={2} style={{ padding: '0 10px' }}>
              <a href="/api/logout">Logout</a>
            </li>
          ]
        )
    }
  }

  render() {
    return (
      <nav className="teal lighten-2 nav-extended">
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            style={{ display: 'inline-block', fontSize: '2.1rem', paddingLeft: '10px' }}
          >
            Online Survey
          </Link>
          <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
