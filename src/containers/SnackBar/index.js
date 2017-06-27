import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group'
import { removeStackMessage } from '../../actions'
import './style.styl'

export class SnackBar extends Component {
  static propTypes = {
    msgs: PropTypes.array,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.snackMessages.length > this.props.snackMessages.length) {
      setTimeout(() => this.props.removeStackMessage(), 1000)
    }
  }

  render() {
    const { snackMessages } = this.props
    return (
      <div className="snack-bar">
        <ul>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={100}
            transitionLeaveTimeout={200}
          >
            {snackMessages.map((msg, index) => {
              const itemStyle = classNames({
                item: true,
                'item-success': msg.type === 'success',
                'item-failure': msg.type !== 'success',
              })
              return (
                <li key={msg.createdAt} className={itemStyle}>
                  <span>{msg.content}</span>
                </li>
              )
            })}
          </CSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default connect(
  state => {
    const { snackMessages } = state
    return { snackMessages }
  },
  dispatch => bindActionCreators({ removeStackMessage }, dispatch),
)(SnackBar)
