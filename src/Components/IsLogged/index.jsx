import { Home } from "../HomePage";
import { DashBoard } from "../dashBoard";
import React from "react";


export function IsLogged({ isLogged, login, logout }) {
  return isLogged ? <DashBoard callback={logout} /> : <Home callback={login} />;
}
