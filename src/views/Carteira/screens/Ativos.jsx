import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ReactTable from 'react-table'
import { getSaldo } from '../CarteiraActions'

class Ativos extends Component {
  componentWillMount() {
    const USER_BOT = {
      id: '5c9047e82a32af181bdfcdd1',
    }// JSON.parse(localStorage.getItem('user_bot'))
    const saldo = getSaldo(USER_BOT)
    this.props = saldo;
  }

  render() {
    const columns = [{
      Header: 'Moeda',
      accessor: 'moeda'
    },
    {
      Header: 'Quantidade',
      accessor: 'quantidade'
    }]

    return (
      <Card>
        <CardBody>
          <ReactTable
            data={this.props.saldo}
            columns={columns}
            previousText='Anterior'
            nextText='Próximo'
            loadingText='Carregando...'
            noDataText='Não há dados!'
            pageText='Página'
            rowsText='linhas'
            ofText='de'
            className='-striped -highlight'
            defaultPageSize={5}
          />
        </CardBody>
      </Card >
    )
  }
}

const mapStateToProps = state => ({
  saldo: state.carteira.saldo
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSaldo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Ativos)
