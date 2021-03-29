import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainScreen from "../components/mainScreen";
import AddScreen from "../components/addScreen";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props:any) => <MainScreen {...props} />}
            />
            <Route path="/addMobile" render={(props:any) => <AddScreen {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
