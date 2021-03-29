import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

type barChartProps = {
    data: { brand: string, count: number}[]
  }
export default class Demo extends React.Component<barChartProps,any> {
  render() {
    return (
      <Paper>
        <Chart
          data={this.props.data}
        >
          <PieSeries
            valueField="count"
            argumentField="brand"
          />
          <Title
            text="brand vs year"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}