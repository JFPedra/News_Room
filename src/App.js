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
      <header className="jumbotron h-75 mb-3 bg-primary">
        <h1 className="display-4">Las Noticias</h1>
      </header>
      <Navbar className="Navbar" bg="light" expand="lg">
        <NavLink to="/" className="nav-link text-info">
          Home
        </NavLink>
        <NavLink to="/Politica" className="nav-link text-info">
          Política
        </NavLink>
        <NavLink to="/Internacional" className="nav-link text-info">
          Internacional
        </NavLink>
        <NavLink to="/Deporte" className="nav-link text-info">
          Deportes
        </NavLink>
        <NavLink to="Tecnologia" className="nav-link text-info">
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
