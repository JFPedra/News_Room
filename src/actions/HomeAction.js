export const homeAction = (news) => ({
  type: "HOME",
  news
});

export const fetchHomeNews = (date) => {
  return (dispatch) => {
    fetch(`https://api.canillitapp.com/latest/${date}`)
      .then((news) => news.json())
      .then((news) => dispatch(homeAction(news)));
  };
};
