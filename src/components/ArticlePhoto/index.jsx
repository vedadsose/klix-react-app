import React, { Component } from 'react'
import injectSheet from 'react-jss'

const styles = {
  imgContainer: {
    position: 'relative',
    float: 'left',
    margin: '0 10px 10px 0'
  },
  img: {
    width: '100%'
  },
  description: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontSize: 12
  }
}

export class ArticlePhoto extends Component {
  static propTypes = {
    photo: React.PropTypes.object
  }

  render() {
    const { sheet: {classes}, photo } = this.props
    const image = photo && photo.default.medium

    return (
      <div className={classes.imgContainer}>
        { photo &&
          <div>
            <img src={image} className={classes.img} role="presentation" />
            <div className={classes.description}>
              { photo.opisSlike }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(ArticlePhoto)
