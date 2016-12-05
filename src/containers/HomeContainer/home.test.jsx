import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import Dyno from '../../components/Dyno'

import ConnectedHomeContainer, {HomeContainer} from './index'

const defaultProps = {
  dyno: {},
  loadDyno: () => {}
}

describe('HomeContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeContainer {...defaultProps} />, div);
  });

  it('renders a Dyno', () => {
    const wrapper = shallow(<HomeContainer {...defaultProps} />)
    const dyno = wrapper.find(Dyno)
    expect(dyno.length).toEqual(1)
  })
})
