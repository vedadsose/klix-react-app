import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  App: {
    width: 800,
    margin: '0 auto'
  }
}

class App extends Component {
  render() {
    const {sheet: {classes}, children} = this.props
    return (
      <div className={classes.App}>
        {children}
      </div>
    );
  }
}

export default injectSheet(styles)(App)
