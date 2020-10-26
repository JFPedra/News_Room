import cleanAction from "./CleanAction";
export const categoryAction = (news) => ({
  type: "CATEGORY",
  news
});

export const fetchCategoryNews = (category) => {
  return (dispatch) => {
    console.warn(category);
    dispatch(cleanAction());
    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((response) => response.json())
      .then((news) => {
        console.warn(news, "se enviaron propsCategory");
        return dispatch(categoryAction(news));
      });
  };
};
