import React from 'react'
import ReactDOM from 'react-dom'
import { Comments } from './index'
import Comment from '../Comment'
import VisibilitySensor from 'react-visibility-sensor'
import Loader from '../Loader'
import { shallow, mount } from 'enzyme'

const defaultProps = {
  comments: [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ],
  loadMore: true,
  load: () => true,
  sheet: { classes: {} }
}

describe('Comments', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Comments {...defaultProps} />, div)
  })

  it('renders three comments', () => {
    const wrapper = shallow(<Comments {...defaultProps} />)
    const comments = wrapper.find(Comment)
    expect(comments.length).toEqual(3)
  })

  it('renders a VisibilitySensor', () => {
    const wrapper = shallow(<Comments {...defaultProps} />)
    const sensor = wrapper.find(VisibilitySensor)
    expect(sensor.length).toEqual(1)
  })

  it('renders a Loader', () => {
    const wrapper = shallow(<Comments {...defaultProps} />)
    const loader = wrapper.find(Loader)
    expect(loader.length).toEqual(1)
  })
});
