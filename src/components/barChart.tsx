import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

type barChartProps = {
    data: { year: string, count: number}[]
  }

export default class Demo extends React.Component<barChartProps,any> {
  render() {
    return (
      <Paper>
        <Chart
          data={this.props.data}
        >
          <ArgumentAxis />
          { <ValueAxis indentFromAxis={7} />}

          <BarSeries
            valueField="count"
            argumentField="year"
          />
          <Title text="Year vs Mobile Count" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
