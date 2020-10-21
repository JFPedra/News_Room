import React from "react";
import newsFormat from "./newsformat";
import Spinner from "./Spinner";

class Deporte extends React.Component {
  componentDidMount() {
    console.log("componenteDeporte montado y renderizado");
    const category = "5";
    this.props.fetchCategoryNews(category);
    console.warn(category, "se despacho fetch");
  }
  componentWillUnmount() {
    console.log("componenteDeporteDesmontado");
    this.props.clearAction();
  }

  render() {
    const news = this.props.state;
    console.log(news, "render Deporte");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Deporte;
