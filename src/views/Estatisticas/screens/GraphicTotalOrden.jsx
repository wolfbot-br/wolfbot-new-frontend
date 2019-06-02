import React from "react";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
import { Card, CardHeader, CardBody } from "reactstrap";

import {
    getGraphicGradeOfDeliveries,
} from '../../Estatisticas/estatisticasAction';


const options = {
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
                gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
            }
        ],
        xAxes: [
            {
                gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
            }
        ]
    }
}


class GraphicTotalOrden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantComBaixa: '',
            quantSemBaixa: '',
        };
    }

    async componentDidMount() {
        const result = await getGraphicGradeOfDeliveries();
        //const cBaixa = result.data[0].qtdEntrega
        const cBaixa = 200
        //const sBaixa = result.data[0].qtdNEntrega
        const sBaixa = 500
        this.setState({
            quantComBaixa: cBaixa,
            quantSemBaixa: sBaixa,
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.filters !== this.props.filters) {
            const filters = {
                year: this.props.filters.year.value,
                company: this.props.filters.company.value
            }
            const result = await getGraphicGradeOfDeliveries(filters);
            const cBaixa = result.data[0].qtdEntrega
            const sBaixa = result.data[0].qtdNEntrega

            this.setState({
                quantComBaixa: cBaixa,
                quantSemBaixa: sBaixa,
            });
        }
    }

    render() {
        const data = canvas => {
            return {
                labels: ["Aberto / Finalizado"],
                datasets: [
                    {
                        label: "Aberto",
                        fill: true,
                        backgroundColor: "#1d8cf8",
                        hoverBackgroundColor: "#1d8cf8",
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [this.state.quantComBaixa]
                    },
                    {
                        label: "Finalizado",
                        fill: true,
                        backgroundColor: "#fd5d93",
                        hoverBackgroundColor: "#fd5d93",
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [this.state.quantSemBaixa]
                    }
                ]
            };
        }

        return (
            <Card className="card-chart">
                <CardHeader tag="h4">
                    Quantidade de Ordens
                </CardHeader>
                <CardBody>
                    <div className="chart-area">
                        <Bar
                            data={data}
                            options={options}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default GraphicTotalOrden;
