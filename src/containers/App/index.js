import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SnackBar from '../SnackBar'
import imagesLoaded from 'imagesloaded'
import { PreloadImages, PageLoading } from '../../components'
import configs from '../../configs'
import './style.styl'

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.state = {
      pageLoadingVisible: true,
      count: 0,
    }
  }

  componentDidMount() {
    const imgLoad = imagesLoaded('#preload', () => {
      this.hideLoading()
    })
    imgLoad.on('progress', (instance, image) => {
      this.setState({
        count: ++this.state.count,
      })
    })
  }

  hideLoading = () => {
    this.setState({
      pageLoadingVisible: false,
    })
  }

  render() {
    const { children } = this.props
    return (
      <div className="container-app">
        <SnackBar />
        <PreloadImages />
        <PageLoading
          inVision={this.state.pageLoadingVisible}
          total={configs.preloads.length}
          loaded={this.state.count}
        />
        {children}
      </div>
    )
  }
}

export default connect(state => ({}))(App)
