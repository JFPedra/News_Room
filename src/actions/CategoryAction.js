export const categoryAction = (news) => ({
  type: "CATEGORY",
  news
});
export const clearAction = () => ({
  type: "CLEAR"
});

export const fetchCategoryNews = (category) => {
  return (dispatch) => {
    console.warn(category);
    dispatch(clearAction());
    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((news) => news.json())
      .then((news) => {
        console.warn(news, "se enviaron propsCategory");
        return dispatch(categoryAction(news));
      });
  };
};
