import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPostList } from '../../actions'
import zip from 'lodash/zip'
import { Spinner } from '../../components'
import Waypoint from 'react-waypoint'
import './style.styl'

async function loadData(props) {
  const { idAttribute, forceRefresh } = props
  if (forceRefresh) {
    const res = await props.loadPostList(idAttribute, false)
    cb && cb(props, res)
  } else {
    const res = await props.loadPostList(idAttribute)
    cb && cb(props, res)
  }
}

function cb(props, res) {
  const { cb } = props
  if (res && res.type === 'POST_LIST_SUCCESS') {
    cb && cb(res)
  }
}

export class PostList extends React.Component {
  componentWillMount() {
    loadData(this.props)
  }

  handleLoadMoreClick() {
    const { path, params } = this.props
    this.props.loadPostList(path, params, true)
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.path !== this.props.path ||
      nextProps.params !== this.props.params
    ) {
      loadData(nextProps)
    }
  }

  renderItem = ([post, user]) => {
    const { children } = this.props
    return React.Children.map(children, child => {
      return React.cloneElement(child, { key: post.id, post: post, user: user })
    })
  }

  renderLoadMore = () => {
    return (
      <div>
        <Spinner theme="mini" label="正在加载中..." />
        <Waypoint onEnter={() => this.handleLoadMoreClick()} />
      </div>
    )
  }

  render() {
    const { relatedItems, relatedItemAuthor, postsPagination } = this.props
    const { nextPageUrl, isFetching, pageCount } = postsPagination
    const items = zip(relatedItems, relatedItemAuthor)
    const isLastPage = !nextPageUrl
    const isEmpty = items.length === 0

    if (isEmpty && isFetching) {
      return <Spinner label="加载中..." />
    }

    if (isEmpty && isLastPage) {
      return <div>没有更多了</div>
    }

    return (
      <div className="post-list-container">
        <div>
          {items.map(this.renderItem)}
        </div>
        {pageCount > 0 && !isLastPage && this.renderLoadMore()}
      </div>
    )
  }
}

PostList.propTypes = {
  path: PropTypes.string.isRequired,
  params: PropTypes.string,
  infinite: PropTypes.bool,
}

export default connect(
  (state, props) => {
    const { pagination: { allposts }, entities: { posts, users } } = state
    const { path, params } = props
    const idAttribute = params ? `${path}?${params}` : path
    const postsPagination = allposts[idAttribute] || { ids: [] }
    const relatedItems = postsPagination.ids
      .filter(id => posts[id])
      .map(id => posts[id])
    const relatedItemAuthor = relatedItems.map(post => users[post.author])

    return {
      idAttribute,
      relatedItems,
      relatedItemAuthor,
      postsPagination,
    }
  },
  dispatch => bindActionCreators({ loadPostList }, dispatch),
)(PostList)
