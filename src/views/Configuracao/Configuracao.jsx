import React, { Component } from 'react'
import { Row, Card } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Configuracao extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='content'>
        <Row>
          <div>
          </div>
        </Row >
      </div >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Configuracao)
