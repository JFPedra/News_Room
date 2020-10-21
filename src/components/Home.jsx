import React from "react";
import newsFormat from "./newsformat";
import moment from "moment";
import Spinner from "./Spinner";

class Home extends React.Component {
  componentDidMount() {
    const today = moment().format("YYYY-MM-DD");
    if (!this.props.state) {
      this.props.fetchHomeNews(today);
      console.warn(today, "se despacho fetch");
    }
  }
  componentWillUnmount() {
    this.props.clearAction();
  }
  render() {
    const news = this.props.state;
    console.log(news, "render");
    return news ? newsFormat(news) : <Spinner />;
  }
}
export default Home;
