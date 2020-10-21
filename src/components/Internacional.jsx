import React from "react";
import newsFormat from "./newsformat";
import Spinner from "./Spinner";

class Internacional extends React.Component {
  componentDidMount() {
    console.log("componenteInternacional montado y renderizado");
    const category = "2";
    this.props.fetchCategoryNews(category);
    console.warn(category, "se despacho fetch");
  }
  componentWillUnmount() {
    console.log("componenteInternacional Desmontado");
    this.props.clearAction();
  }

  render() {
    const news = this.props.state;
    console.log(news, "render Internacional");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Internacional;
