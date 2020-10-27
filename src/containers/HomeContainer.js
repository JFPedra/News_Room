import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchHomeNews } from "../actions/HomeAction";
import cleanAction from "../actions/CleanAction";
const mapStatetoProps = (state) => ({ state });
const mapActionstoProps = { fetchHomeNews, cleanAction };

export default connect(mapStatetoProps, mapActionstoProps)(Home);
