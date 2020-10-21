import React from "react";
import "./styles.css";
import { Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./containers/HomeContainer";
import DeporteContainer from "./containers/CategoryContainer";

export default function App() {
  //console.log(Home);
  return (
    <>
      <header id="jumbotron">
        <h1 className="display-4">Las Noticias</h1>
      </header>
      <Navbar className="Navbar" bg="light" expand="lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Politica">Política</NavLink>
        <NavLink to="/Internacional">Internacional</NavLink>
        <NavLink to="/Deporte">Deportes</NavLink>
        <NavLink to="Tecnologia">Tecnología</NavLink>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Deporte" component={DeporteContainer} />
      </Switch>
    </>
  );
}
