import React, { Component } from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  article: {
    margin: '10px 0',
    padding: '10px',
    float: 'left',
    boxSizing: 'border-box'
  },
  w6: {
    flexBasis: '50%'
  },
  w3: {
    flexBasis: '25%'
  },
  articleContainer: {
    position: 'relative',
    height: '100%',
    borderBottom: '1px solid #eee',
    paddingBottom: 15
  },
  imgContainer: {
    position: 'relative'
  },
  img: {
    width: '100%'
  },
  category: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: '3px 5px',
    fontFamily: 'Oswald, sans-serif',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 5
  },
  title: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: 16,
    margin: '10px 0'
  },
  details: {
    position: 'absolute',
    bottom: 10,
    fontFamily: 'Lato, sans-serif',
    fontSize: 12
  }
}

class ArticleCard extends Component {
  static propTypes = {
    article: React.PropTypes.object
  }

  render() {
    const { sheet: {classes}, article } = this.props
    const image = article.fotke && article.fotke[article.w > 3 ? 'wide' : 'default'].large

    return (
      <div className={classNames(
        [classes.article]: true,
        [classes['w' + article.w]]: true,
        [classes['h' + article.h]]: true
      )}>
        <div className={classes.articleContainer}>
          <div className={classes.imgContainer}>
            <img src={image} className={classes.img} role="presentation" />
            <div className={classes.category}>
              { article.nazivPodkategorije || article.nazivKategorije }
            </div>
          </div>

          <h2 className={classes.title}>
            { article.naslov }
          </h2>

          <div className={classes.details}>
            { article.ukupnoKomentara } komentara
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ArticleCard)
