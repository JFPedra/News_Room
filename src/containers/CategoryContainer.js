import Deporte from "../components/Deporte";
import Internacional from "../components/Internacional";
import Politica from "../components/Politica";
import Tecnologia from "../components/Tecnologia";
import { connect } from "react-redux";
import { fetchCategoryNews } from "../actions/CategoryAction";
import cleanAction from "../actions/CleanAction";

const mapStatetoProps = (state) => ({ state });
const mapActionstoProps = { fetchCategoryNews, cleanAction };

export const DeporteContainer = connect(
  mapStatetoProps,
  mapActionstoProps
)(Deporte);
export const InternacionalContainer = connect(
  mapStatetoProps,
  mapActionstoProps
)(Internacional);
export const PoliticaContainer = connect(
  mapStatetoProps,
  mapActionstoProps
)(Politica);
export const TecnologiaContainer = connect(
  mapStatetoProps,
  mapActionstoProps
)(Tecnologia);
