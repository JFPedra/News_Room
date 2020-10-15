export const homeAction = (news) => ({
  type: "HOME",
  news
});

export const fetchHomeNews = (date) => {
  return (dispatch) => {
    console.warn(date);
    fetch(`https://api.canillitapp.com/latest/${date}`)
      .then((news) => news.json())
      .then((news) => dispatch(homeAction(news)));
  };
};
