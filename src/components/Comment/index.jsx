import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  comment: {
    marginBottom: 20
  }
}

export class Comment extends Component {
  static propTypes = {
    username: React.PropTypes.string,
    komentar: React.PropTypes.string
  }

  render() {
    const { sheet: {classes}, username, komentar } = this.props

    return (
      <div className={classes.comment}>
        <b>{ username }</b>
        <br />
        <div>
          { komentar }
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Comment)
