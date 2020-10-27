import React from "react";
import newsFormat from "./newsformat";
import Spinner from "./Spinner";

class Politica extends React.Component {
  componentDidMount() {
    console.log("componentePolitica montado y renderizado");
    const category = "1";
    this.props.fetchCategoryNews(category);
    console.warn(category, "se despacho fetch");
  }
  componentWillUnmount() {
    console.log("componentePoliticaDesmontado");
    this.props.cleanAction();
  }

  render() {
    const news = this.props.state;
    console.log(news, "render Politica");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Politica;
