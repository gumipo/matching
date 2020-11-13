import React from "react";

import { Home, GirlsSelect, AddGirlsData } from "./Pages/index";
import { Route, Switch, HashRouter } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/girls/select"} component={GirlsSelect} />
        <Route exact path={"/add/girls"} component={AddGirlsData} />
      </Switch>
    </HashRouter>
  );
};
export default Router;
