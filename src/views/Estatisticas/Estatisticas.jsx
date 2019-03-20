import React, { Component } from 'react'
import { Row } from 'reactstrap'

class Estatisticas extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    })
  }

  render() {
    return (
      <div className='content'>
        <Row />
      </div>
    )
  }
}

export default Estatisticas
