import React from "react";
import newsFormat from "./newsformat";
import Spinner from "./Spinner";

class Tecnologia extends React.Component {
  componentDidMount() {
    console.log("componenteTecnologia montado y renderizado");
    const category = "3";
    this.props.fetchCategoryNews(category);
    console.warn(category, "se despacho fetch");
  }
  componentWillUnmount() {
    console.log("componenteTecnologiaDesmontado");
    this.props.clearAction();
  }

  render() {
    const news = this.props.state;
    console.log(news, "render Tecnologia");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Tecnologia;
