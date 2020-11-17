import React from "react";
import { Home, GirlsSelect, Chat } from "./Pages/index";
import { Route, Switch, HashRouter } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/girls/select"} component={GirlsSelect} />
        <Route exact path={"/chat"} component={Chat} />
      </Switch>
    </HashRouter>
  );
};
export default Router;
