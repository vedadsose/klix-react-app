import React from 'react'
import ReactDOM from 'react-dom'
import { Dyno } from './index'
import { shallow } from 'enzyme'
import ArticleCard from '../ArticleCard'

const defaultProps = {
  sheet: {
    classes: {}
  },
  articles: [
    { sifra: 1 },
    { sifra: 2 },
    { sifra: 3 }
  ]
}

describe('Dyno', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dyno {...defaultProps} />, div);
  });

  it('renders 3 ArticleCards', () => {
    const wrapper = shallow(<Dyno {...defaultProps} />)
    const dyno = wrapper.find(ArticleCard)
    expect(dyno.length).toEqual(3)
  })
})
