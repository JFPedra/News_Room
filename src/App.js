import React from "react";
import "./styles.css";
import { Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./containers/HomeContainer";
import {
  DeporteContainer,
  PoliticaContainer,
  InternacionalContainer,
  TecnologiaContainer
} from "./containers/CategoryContainer";

export default function App() {
  //console.log(Home);
  return (
    <>
      <header id="jumbotron" className="jumbotron h-75 mb-3 py-4 bg-primary">
        <h1 id="jumbotron">Las Noticias</h1>
      </header>
      <Navbar className="Navbar" bg="light" expand="lg">
        <NavLink id="info" to="/" className="nav-link text-info">
          Home
        </NavLink>
        <NavLink id="info" to="/Politica" className="nav-link text-info">
          Política
        </NavLink>
        <NavLink id="info" to="/Internacional" className="nav-link text-info">
          Internacional
        </NavLink>
        <NavLink id="info" to="/Deporte" className="nav-link text-info">
          Deportes
        </NavLink>
        <NavLink id="info" to="Tecnologia" className="nav-link text-info">
          Tecnología
        </NavLink>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Deporte" component={DeporteContainer} />
        <Route exact path="/Politica" component={PoliticaContainer} />
        <Route exact path="/Internacional" component={InternacionalContainer} />
        <Route exact path="/Tecnologia" component={TecnologiaContainer} />
      </Switch>
    </>
  );
}
