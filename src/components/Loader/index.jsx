import React, { Component } from 'react'
import injectSheet from 'react-jss'
import loader from './loader.svg'

const styles = {
  loader: {
    textAlign: 'center',
    padding: '20px 0'
  }
}

export class Loader extends Component {
  render() {
    const { sheet: {classes} } = this.props
    return (
      <div className={classes.loader}>
        <img src={loader} role="presentation" />
      </div>
    );
  }
}

export default injectSheet(styles)(Loader)
