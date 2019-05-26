import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";
import ReactTable from "react-table";

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        Header: "Data",
        accessor: "date",
        headerClassName: "text-center"
      },
      {
        Header: "Ação",
        accessor: "logAction",
        headerClassName: "text-center"
      },
      {
        Header: "Evento",
        accessor: "logEvent",
        headerClassName: "text-center"
      },
      {
        Header: "Moeda",
        accessor: "logMoeda",
        headerClassName: "text-center"
      },
      {
        Header: "Preço",
        accessor: "logPrice",
        headerClassName: "text-center"
      },
      {
        Header: "Preço Anterior",
        accessor: "previousPrice",
        headerClassName: "text-center"
      },
      {
        Header: "Informação 1",
        accessor: "logInfoOne",
        headerClassName: "text-center"
      },
      {
        Header: "Informação 2",
        accessor: "logInfoTwo",
        headerClassName: "text-center"
      },
      {
        Header: "Informação 3",
        accessor: "logInfoThree",
        headerClassName: "text-center"
      }
    ];

    const { logs } = this.props;

    return (
      <Card className="text-center">
        <CardBody>
          <ReactTable
            data={logs}
            resizable={false}
            columns={columns}
            defaultPageSize={10}
            showPaginationTop={false}
            showPaginationBottom={false}
            className="-striped -highlight"
            noDataText="Nenhuma linha"
          />
        </CardBody>
      </Card>
    );
  }
}

export default Logs;
