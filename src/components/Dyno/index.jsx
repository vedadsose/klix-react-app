import React, { Component } from 'react'
import ArticleCard from '../ArticleCard'
import injectSheet from 'react-jss'

const styles = {
  dyno: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const sortArticles = (a, b) => a.y - b.y || a.x - b.x

export class Dyno extends Component {
  static propTypes = {
    articles: React.PropTypes.array
  }

  render() {
    const { articles, sheet: {classes} } = this.props
    return (
      <div className={classes.dyno}>
        { articles && articles.sort(sortArticles).map(article =>
          <ArticleCard key={article.sifra} article={article} />
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Dyno)
