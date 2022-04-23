import React, { useContext } from "react";
import { BlogArticleContext } from "./Blog-Article-context";

function ArticleCard(props) {
    const [,setArticleContext] = useContext(BlogArticleContext);
    const articleId = props.id;

const selectArticleHandler =() => {
    setArticleContext(articleId);
}

  return (
    <div>
      <h1>{props.name}</h1>
      CategoryId: {props.categoryId}
      <div className="button-corner">
        <button className="button-read-more" onClick={selectArticleHandler}>
          Read more..
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
