import React, { Component } from 'react'
// import { Link } from 'react-router'
import injectSheet from 'react-jss'
import Loader from '../Loader'
import Comment from '../Comment'
import VisibilitySensor from 'react-visibility-sensor'

const styles = {
  comments: {
    borderTop: '1px solid #eee',
    paddingTop: 10
  }
}

class Comments extends Component {
  static propTypes = {
    comments: React.PropTypes.array,
    loading: React.PropTypes.bool,
    loadMore: React.PropTypes.bool,
    load: React.PropTypes.func
  }

  load(visible) {
    if(!visible || this.props.loading) return
    const { comments, load } = this.props
    const lastId = comments.length === 0 ? null : comments[comments.length-1].id
    load(lastId)
  }

  render() {
    const { sheet: {classes}, comments, loadMore } = this.props

    return (
      <div className={classes.comments}>
        { comments && comments.map((comment) =>
          <Comment key={comment.id} {...comment} />
        )}

        { loadMore &&
          <VisibilitySensor onChange={this.load.bind(this)}>
            <Loader />
          </VisibilitySensor>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Comments)
