import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loadArticle, resetArticle } from '../../redux/article.js'
import { loadComments, resetComments } from '../../redux/comments.js'
import Article from '../../components/Article'
import Comments from '../../components/Comments'

export class ArticleContainer extends Component {
  componentDidMount() {
    this.props.loadArticle(this.props.params.id)
  }

  componentWillUnmount() {
    this.props.resetArticle()
    this.props.resetComments()
  }

  loadComments(lastId) {
    this.props.loadComments(this.props.params.id, lastId)
  }

  render() {
    const { article, comments } = this.props
    return (
      <div>
        <Article article={article} />
        <Comments {...comments} load={this.loadComments.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadArticle, resetArticle, loadComments, resetComments }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)
