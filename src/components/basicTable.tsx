import React from "react";
import MaterialTable from "material-table";
import { mobile } from "./mainScreen";

export interface basicTableProps {
  mobiles: mobile[]
}
 
export interface basicTableState {
  data: {brand: string | null, model: string | null, year: string | null}[]
}
 
class basicTable extends React.Component<basicTableProps, basicTableState> {
  
  render() {
    return (
      <MaterialTable
      title='Moblie'
        columns={[
          { title: "Brand", field: "brand" },
          { title: "Model", field: "model",filtering:false },
          { title: "Year", field: "year", type: "numeric",filtering:false },
        ]}
        data={this.props.mobiles}
        options={{
          search: true,
          selection: true,
          filtering: true
        }}
        onRowClick = {(event, rowData) => {
          console.log(rowData);
          // TODO add component to render the rowData
        }}
      />
    );
  }
}
 
export default basicTable;
