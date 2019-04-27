import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";
import ReactTable from "react-table";

class TablePosicoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        moeda: "BTC",
        quantidade: 0.342564,
        custo: 26.78,
        resultado: "7.00%",
        tempo: "5 dias"
      },
      {
        moeda: "XMR",
        quantidade: 0.564734,
        custo: 67.98,
        resultado: "10.00%",
        tempo: "6 dias"
      },
      {
        moeda: "DASH",
        quantidade: 0.67853409,
        custo: 54.89,
        resultado: "-5.00%",
        tempo: "1 dias"
      },
      {
        moeda: "ETC",
        quantidade: 0.56789054,
        custo: 23.89,
        resultado: "4.00%",
        tempo: "2 dias"
      },
      {
        moeda: "ETH",
        quantidade: 0.79043217,
        custo: 45.67,
        resultado: "1.00%",
        tempo: "2 dias"
      },
      {
        moeda: "XMR",
        quantidade: 0.87654908,
        custo: 76.45,
        resultado: "12.00%",
        tempo: "4 dias"
      },
      {
        moeda: "BTC",
        quantidade: 0.14563278,
        custo: 23.34,
        resultado: "-5.00%",
        tempo: "7 dias"
      },
      {
        moeda: "BTC",
        quantidade: 0.9087689,
        custo: 13.65,
        resultado: "5.00%",
        tempo: "9 dias"
      }
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
        Header: "Custo",
        accessor: "custo",
        headerClassName: "text-center"
      },
      {
        Header: "Tempo",
        accessor: "tempo",
        headerClassName: "text-center"
      },
      {
        Header: "Ação",
        Cell: row => (
          <div>
            <Button className="btn-simple btn-success btn-sm mr-1 margin-right: 1rem">
              Vender
            </Button>
            <Button className="btn-simple btn-info btn-sm">Info</Button>
          </div>
        ),
        headerClassName: "text-center",
        sortable: false,
        filterable: false
      }
    ];

    return (
      <Card className="text-center">
        <CardBody>
          <ReactTable
            data={data}
            filterable
            resizable={false}
            columns={columns}
            defaultPageSize={5}
            showPaginationTop
            showPaginationBottom={false}
            className="-striped -highlight"
            // Text
            previousText="Anterior"
            nextText="Próximo"
            loadingText="Carregando..."
            noDataText="Nenhuma linha"
            pageText="Página"
            ofText="do"
            rowsText="linhas"
            // Accessibility Labels
            pageJumpText="pular para a página"
            rowsSelectorText="linhas por página"
          />
        </CardBody>
      </Card>
    );
  }
}

export default TablePosicoes;
