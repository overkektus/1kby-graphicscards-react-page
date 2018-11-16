import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

class App extends Component {
  render() {
    const { route: { routes } } = this.props
    return (
      <div>
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
