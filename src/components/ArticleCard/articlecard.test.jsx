import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { ArticleCard } from './index';

const defaultProps = {
  sheet: {
    classes: {
      w9: 'w9',
      h2: 'h2'
    }
  },
  article: {
    naslov: 'Test title',
    w: 9,
    h: 2
  }
}

describe('ArticleCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ArticleCard {...defaultProps} />, div)
  })

  it('renders a title', () => {
    const wrapper = mount(<ArticleCard {...defaultProps} />)
    const title = wrapper.find('h2')
    expect(title.length).toEqual(1)
  })

  it('renders an img', () => {
    const wrapper = mount(<ArticleCard {...defaultProps} />)
    const img = wrapper.find('img')
    expect(img.length).toEqual(1)
  })

  it('renders a div with correct width class', () => {
    const wrapper = mount(<ArticleCard {...defaultProps} />)
    const div = wrapper.find('.w'+defaultProps.article.w)
    expect(div.length).toEqual(1)
  })

  it('renders a div with correct height class', () => {
    const wrapper = mount(<ArticleCard {...defaultProps} />)
    const div = wrapper.find('.h'+defaultProps.article.h)
    expect(div.length).toEqual(1)
  })
})
