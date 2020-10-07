import React from "react";
import "./styles.css";
import { Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <header id="jumbotron">
        <h1 className="display-4">Las Noticias</h1>
      </header>
      <Navbar className="Navbar" bg="light" expand="lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="">Política</NavLink>
        <NavLink to="">Internacional</NavLink>
        <NavLink to="">Deportes</NavLink>
        <NavLink to="">Tecnología</NavLink>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
