import React, { Component } from 'react';
import LogoutPanel from '../components/LogoutPanel';

class HomeView extends Component {
  render() {
    return (
      <div className="home-view-container">
        <LogoutPanel />
      </div>
    );
  }
}

export default HomeView;
