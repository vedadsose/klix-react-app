import React, { Component } from 'react'
import injectSheet from 'react-jss'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

const styles = {
  button: {
    display: 'inline-block',
    color: '#fff',
    textAlign: 'center',
    padding: '3px 0',
    width: 30,
    borderRadius: 5,
    marginRight: 10
  },
  facebook: {
    backgroundColor: '#3c5a96'
  },
  twitter: {
    backgroundColor: '#2aa3ef'
  }
}

class ShareBox extends Component {
  static propTypes = {
    url: React.PropTypes.string
  }

  render() {
    const { sheet: {classes} } = this.props

    return (
      <div className={classes.share}>
        <div className={classnames([classes.button, classes.facebook])}>
          <FontAwesome name="facebook" />
        </div>
        <div className={classnames([classes.button, classes.twitter])}>
          <FontAwesome name="twitter" />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ShareBox)
