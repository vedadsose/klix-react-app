import React, { Component } from 'react'
// import { Link } from 'react-router'
import injectSheet from 'react-jss'
import Loader from '../Loader'

const styles = {

}

class Article extends Component {
  static propTypes = {
    article: React.PropTypes.object
  }

  render() {
    const { sheet: {classes}, article } = this.props
    const image = article.fotke && article.fotke[article.w > 3 ? 'wide' : 'default'].large

    return (
      <div>
        { article.loading &&
          <Loader />
        }

        { !article.loading &&
          <div>
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
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Article)
