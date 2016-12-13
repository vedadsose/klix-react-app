import React, { Component } from 'react'
// import { Link } from 'react-router'
import injectSheet from 'react-jss'
import FontAwesome from 'react-fontawesome'
import Loader from '../Loader'
import ArticlePhoto from '../ArticlePhoto'
import ShareBox from '../ShareBox'

const styles = {
  article: {
    marginBottom: 15
  },
  title: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: 26
  },
  content: {
    fontFamily: 'Lato, sans-serif',
    lineHeight: '25px'
  },
  stats: {
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    margin: '15px 0',
    padding: '10px 0'
  },
  comments: {
    textAlign: 'right',
    lineHeight: '30px',
    color: '#4c4c4c'
  },
  commentsTotal: {
    marginLeft: 5
  }
}

class Article extends Component {
  static propTypes = {
    article: React.PropTypes.object
  }

  render() {
    const { sheet: {classes}, article } = this.props

    return (
      <div className={classes.article}>
        { article.loading &&
          <Loader />
        }

        { !article.loading &&
          <div>
            <h1 className={classes.title}>
              { article.naslov }
            </h1>

            <div className={classes.content}>
              { article.uvod }
            </div>

            <div className={classes.stats}>
              <div className="row">
                <div className="col-sm-6">
                  <ShareBox />
                </div>
                <div className="col-sm-6 text-right">
                  <div className={classes.comments}>
                    <FontAwesome name="comments-o" />
                    <span className={classes.commentsTotal}>{ article.ukupnoKomentara }</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.content}>
              <ArticlePhoto photo={article.fotke} />
              <div dangerouslySetInnerHTML={{__html: article.tekst && article.tekst.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br />')}}></div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Article)
