import React from "react";
import newsFormat from "./newsformat";
import Spinner from "./Spinner";

class Deporte extends React.Component {
  componentDidMount() {
    const category = "5";
    if (!this.props.state) {
      this.props.fetchCategoryNews(category);
      console.warn(category, "se despacho fetch");
    }
  }
  componentWillUnmount() {
    this.props.clearAction();
  }

  render() {
    const news = this.props.state;
    console.log(news, "render Deporte");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Deporte;
