import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu'
import { getPricingData } from './actions/thunks'
import { setData } from './actions/action-creators'
import { connect } from 'react-redux'
class App extends Component {

  componentDidMount() {
    let promise = getPricingData()
    promise.then(data => {
      this.props.setData(data)
    })
  }

  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return({
    setData: (data) => {
      dispatch(setData(data))
    }
  })
}

export default connect(null, mapDispatchToProps) (App)
