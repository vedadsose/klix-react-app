import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loadArticle } from '../../redux/article.js'
import Article from '../../components/Article'

export class ArticleContainer extends Component {
  componentDidMount() {
    this.props.loadArticle(this.props.params.id)
  }

  render() {
    const { article } = this.props
    return (
      <Article key={article.sifra} article={article} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadArticle }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)
