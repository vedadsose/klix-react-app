import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import ConnectedArticleContainer, { ArticleContainer } from './index'
import Article from '../../components/Article'
import Comments from '../../components/Comments'

const defaultProps = {
  params: {
    id: 10000
  },
  article: {
    loading: false,
    tekst: ''
  },
  comments: {},
  loadArticle: () => true
}

describe('ArticleContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleContainer {...defaultProps} />, div);
  });

  it('renders an Article', () => {
    const wrapper = shallow(<ArticleContainer {...defaultProps} />)
    const article = wrapper.find(Article)
    expect(article.length).toEqual(1)
  })

  it('renders Comments', () => {
    const wrapper = shallow(<ArticleContainer {...defaultProps} />)
    const comments = wrapper.find(Comments)
    expect(comments.length).toEqual(1)
  })
})
