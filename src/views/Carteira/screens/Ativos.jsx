import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import ReactTable from "react-table";

class TablePosicoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      { moeda: "BTC", quantidade: 0.342564 },
      { moeda: "XMR", quantidade: 0.564734 },
      { moeda: "DASH", quantidade: 0.67853409 },
      { moeda: "ETC", quantidade: 0.56789054 },
      { moeda: "ETH", quantidade: 0.79043217 },
      { moeda: "XMR", quantidade: 0.87654908 },
      { moeda: "BTC", quantidade: 0.14563278 },
      { moeda: "BTC", quantidade: 0.9087689 }
    ];

    const columns = [
      {
        Header: "Moeda",
        accessor: "moeda",
        headerClassName: "text-center"
      },
      {
        Header: "Quantidade",
        accessor: "quantidade",
        headerClassName: "text-center"
      },
      {
        Header: "Ação",
        Cell: row => (
          <div>
            <Button className="btn-simple btn-success btn-sm mr-1 margin-right: 1rem">
              Vender Tudo
            </Button>
          </div>
        ),
        headerClassName: "text-center",
        sortable: false,
        filterable: false
      }
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <i className="tim-icons icon-wallet-43 text-success" /> Carteira de
            Ativos
          </CardTitle>
        </CardHeader>
        <CardBody className="text-center">
          <ReactTable
            data={data}
            filterable
            resizable={false}
            columns={columns}
            defaultPageSize={5}
            showPaginationTop
            showPaginationBottom={false}
            className="-striped -highlight"
          />
        </CardBody>
      </Card>
    );
  }
}

export default TablePosicoes;
