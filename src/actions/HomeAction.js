import cleanAction from "./CleanAction";
export const homeAction = (news) => ({
  type: "HOME",
  news
});

export const fetchHomeNews = (date) => {
  return (dispatch) => {
    console.warn(date);
    dispatch(cleanAction);
    fetch(`https://api.canillitapp.com/latest/${date}`)
      .then((news) => news.json())
      .then((news) => {
        console.warn(news, "se enviaron propsHome");
        return dispatch(homeAction(news));
      });
  };
};
