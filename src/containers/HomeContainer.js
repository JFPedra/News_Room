import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchHomeNews } from "../actions/HomeAction";

const mapStatetoProps = (state) => ({ state });
const mapActionstoProps = { fetchHomeNews };

export default connect(mapStatetoProps, mapActionstoProps)(Home);
