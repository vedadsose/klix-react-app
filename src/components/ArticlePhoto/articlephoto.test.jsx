import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { ArticlePhoto } from './index'

const defaultProps = {
  photo: {
    default: {
      medium: ''
    }
  },
  sheet: { classes: {} }
}

describe('ArticlePhoto', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ArticlePhoto {...defaultProps} />, div)
  })

  it('renders an img', () => {
    const wrapper = shallow(<ArticlePhoto {...defaultProps} />)
    const img = wrapper.find('img')
    expect(img.length).toEqual(1)
  })
})
