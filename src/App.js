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

class App extends React.Component {
  state = { input: "" };
  handleOnClick() {
    //dispatch fetchSearchNews
    this.setState({ input: "" });
  }
  handleEnterPressed(e) {
    if (e.keyCode === 13) {
      console.warn("enter pressed");
      this.handleOnClick();
    }
  }
  render() {
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
          <NavLink id="info" to="/Tecnologia" className="nav-link text-info">
            Tecnología
          </NavLink>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => this.setState({ input: e.target.value })}
              value={this.state.input}
              onKeyDown={(e) => this.handleEnterPressed(e)}
            />
            <NavLink to="/Search">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => this.handleOnClick()}
              >
                Buscar
              </button>
            </NavLink>
          </div>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Deporte" component={DeporteContainer} />
          <Route exact path="/Politica" component={PoliticaContainer} />
          <Route
            exact
            path="/Internacional"
            component={InternacionalContainer}
          />
          <Route exact path="/Tecnologia" component={TecnologiaContainer} />
        </Switch>
      </>
    );
  }
}

export default App;
