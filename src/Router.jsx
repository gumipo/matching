import React from "react";
import { Home, GirlsSelect, Chat } from "./Pages/index";
import { Route, Switch, HashRouter } from "react-router-dom";
import { StartChat } from "../src/Pages";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <StartChat>
          <Route exact path={"/girls/select"} component={GirlsSelect} />
          <Route exact path={"/chat"} component={Chat} />
        </StartChat>
      </Switch>
    </HashRouter>
  );
};
export default Router;
