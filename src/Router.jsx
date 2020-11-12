import React from "react";
import { Home, GirlsSelect } from "./Pages/index";
import { Route, Switch, HashRouter } from "react-router-dom";
import AddGirlesData from "./Pages/AddGirlesData";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/girls/select"} component={GirlsSelect} />
        <Route exact path={"/add/girls"} component={AddGirlesData} />
      </Switch>
    </HashRouter>
  );
};
export default Router;
