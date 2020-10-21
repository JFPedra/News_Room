import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchHomeNews } from "../actions/HomeAction";
import clearAction from "../actions/ClearAction";
const mapStatetoProps = (state) => ({ state });
const mapActionstoProps = { fetchHomeNews, clearAction };

export default connect(mapStatetoProps, mapActionstoProps)(Home);
