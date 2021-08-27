import React from "react";
import { Switch } from "react-router-dom";
import { URL_HELPERS } from "./utils/url";
import { GuestRoute } from "./components/Routes";
import CustomLayout from "./layouts/index";
import { Explore, Home } from "./pages";
const Routes = () => {
  return (
    <Switch>
      <GuestRoute
        component={Home}
        layout={CustomLayout}
        path={URL_HELPERS.index}
        exact
      />
      <GuestRoute
        component={Explore}
        layout={CustomLayout}
        path={URL_HELPERS.explore}
        exact
      />
    </Switch>
  );
};
export default Routes;
