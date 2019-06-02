
import React, { Component } from 'react'
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap'
import { getGraphicGradeAverageTraficMonth2 } from '../../Estatisticas/estatisticasAction';

let chartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};

class GraphicProfitPerDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entregue: [],
      naoEntregue: []
    };
  }

  async componentDidMount() {
    const result = await getGraphicGradeAverageTraficMonth2();
    /*const entregueResult = result.data.map((item) => {
      return item.entregue !== null ? item.entregue : 0
    });
    const naoEntregueResult = result.data.map((item) => {
      return item.nEntregue !== null ? item.nEntregue : 0
    });*/
    this.setState({
      naoEntregue: ['2', '3', '4', '5', '11', '50', '21'],
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.filters !== this.props.filters) {
      const filters = {
        year: this.props.filters.year.value,
        company: this.props.filters.company.value
      }
      const result = await getGraphicGradeAverageTraficMonth2(filters);
      const entregueResult = []
      const naoEntregueResult = []
      if (result.data[0].mes > 1) {
        for (let i = 0; i <= result.data[0].mes - 1; i += 1) {
          entregueResult.push(0);
          naoEntregueResult.push(0);
        }
      }
      result.data.map((item) => {
        if (item.entregue !== null) {
          entregueResult[item.mes - 1] = item.entregue;
        } else {
          entregueResult[item.mes] = 0;
        }
        if (item.nEntregue !== null) {
          naoEntregueResult[item.mes - 1] = item.nEntregue;
        } else {
          naoEntregueResult[item.mes] = 0;
        }
        return 0;
      });
      this.setState({
        entregue: [entregueResult]
      });
    }
  }

  render() {
    const data = canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        datasets: [
          {
            label: 'Lucro',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.state.naoEntregue
          }
        ]
      };
    };
    return (
      <Card className="card-chart" >
        <CardHeader tag="h4">
          Total de (lucro/perca) por dia
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line
              data={data}
              options={chartOptions}
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default GraphicProfitPerDay;