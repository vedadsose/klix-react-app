import React, { Component } from 'react'
import injectSheet from 'react-jss'
import logo from './logo.png'
import { Link } from 'react-router'

const styles = {
  App: {
    width: 800,
    margin: '50px auto'
  },
  logo: {
    textAlign: 'center'
  },
  logoImg: {
    width: 150
  },
  date: {
    padding: '5px 0',
    margin: '20px 0',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    fontFamily: 'Lato, sans-serif',
    fontStyle: 'italic',
    fontSize: 14
  }
}

class App extends Component {
  render() {
    const {sheet: {classes}, children} = this.props
    return (
      <div className={classes.App}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} className={classes.logoImg} role="presentation" />
          </Link>
        </div>

        <div className={classes.date}>
          Četvrtak, 8.12.12016
        </div>

        {children}
      </div>
    );
  }
}

export default injectSheet(styles)(App)
