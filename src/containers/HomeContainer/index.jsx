import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loadDyno } from '../../redux/dyno.js'
import Dyno from '../../components/Dyno'

export class HomeContainer extends Component {
  componentDidMount() {
    this.props.loadDyno()
  }

  render() {
    const { dyno } = this.props
    return (
      <div>
        <Dyno articles={dyno.articles} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dyno: state.dyno
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadDyno }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
