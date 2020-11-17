import React from "react";
import { Home, GirlsSelect, ChatRoom, StartChat } from "./Pages/index";
import { Route, Switch, HashRouter } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <StartChat>
          <Route exact path={"/girls/select"} component={GirlsSelect} />
          <Route exact path={"/chat"} component={ChatRoom} />
        </StartChat>
      </Switch>
    </HashRouter>
  );
};
export default Router;
