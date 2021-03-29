import React from "react";
import { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BasicTable from "../components/basicTable";
import { withRouter } from "react-router-dom";
import localforage from "localforage";
import BarChart from "./barChart";
import PieChart from "./pieChart";

interface mainScreenProps {
  history: any;
}

export type mobile = {
  brand: string;
  model: string;
  year: string;
};

interface mainScreenState {
  mobiles: mobile[];
  barChartData: { year: string; count: number }[];
  pieChartData: { brand: string; count: number }[];
}

class mainScreen extends Component<mainScreenProps, mainScreenState> {
  constructor(props: any) {
    super(props);
    this.state = { mobiles: [], barChartData: [], pieChartData: [] };
  }
  handleAddingNewMobile = () => {
    this.props.history.push("/addMobile");
  };

  async componentDidMount() {
    const mobiles = (await localforage.getItem<mobile[]>("mobiles")) || [];
    this.setState({ mobiles });

    const barChartResult: any = {};
    for (const { year } of mobiles) {
      barChartResult[year] = {
        year,
        count: barChartResult[year] ? barChartResult[year].count + 1 : 1,
      };
    }

    const barChartData: { year: string; count: number }[] =
    Object.values(barChartResult) || [];
    this.setState({ barChartData });


    const pieChartResult: any = {};
    for (const { brand } of mobiles) {
      pieChartResult[brand] = {
        brand,
        count: pieChartResult[brand] ? pieChartResult[brand].count + 1 : 1,
      };
    }

    const pieChartData: { brand: string; count: number }[] =
    Object.values(pieChartResult) || [];
    this.setState({ pieChartData });
  }

  render() {
    return (
      <Container>
        <Button color="primary" onClick={this.handleAddingNewMobile}>
          {" "}
          Add New mobile
        </Button>
        <Row>
          <Col>
            <BasicTable mobiles={this.state.mobiles || []}></BasicTable>
          </Col>
          <Col>
            <BarChart data={this.state.barChartData || []}></BarChart>
          </Col>
          <Col>
            <PieChart data={this.state.pieChartData || []}></PieChart>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(mainScreen as any);
