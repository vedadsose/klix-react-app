import React, { Component } from 'react'
import injectSheet from 'react-jss'
import ArticleCard from '../ArticleCard'
import Loader from '../Loader'

const styles = {
  dyno: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const sortArticles = (a, b) => a.y - b.y || a.x - b.x

export class Dyno extends Component {
  static propTypes = {
    articles: React.PropTypes.array,
    loading: React.PropTypes.bool
  }

  render() {
    const { loading, articles, sheet: {classes} } = this.props
    return (
      <div>
        { loading &&
          <Loader />
        }

        { !loading &&
          <div className={classes.dyno}>
            { articles && articles.sort(sortArticles).map(article =>
              <ArticleCard key={article.sifra} article={article} />
            )}
          </div>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Dyno)
