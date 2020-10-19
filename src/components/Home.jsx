import React from "react";
import newsFormat from "./newsformat";
import moment from "moment";

class Home extends React.Component {
  componentDidMount() {
    const today = moment().format("YYYY-MM-DD");
    if (!this.props.state) {
      this.props.fetchHomeNews(today);
      console.warn(today, "se despacho fetch");
    }
  }

  render() {
    const news = this.props.state;
    console.log(news, "render");
    return news ? newsFormat(news) : <p>retornando</p>;
  }
}
export default Home;
