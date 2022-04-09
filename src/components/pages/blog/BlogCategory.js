import React, { useEffect, useState, useContext } from "react";
import { BlogContext } from "./Blog-context";
import Axios from "axios";
import './BlogCategory.css';

function BlogCategory() {
  const [categoryContext, , articleContext, ,] = useContext(BlogContext);
  const [articles, setArticles] = useState([]);

  const getFromBE = () => {
    Axios.get(
      "http://localhost:8080/articles/getAllByCategory/" + categoryContext
    ).then((response) => {
      setArticles(response.data);
    });
  };

  useEffect(() => {
    getFromBE();
  }, [categoryContext,articleContext]);

  const articleList = articles.map((d) => (
    <div className="article-box" key={d.id}>
      <h1>{d.name}</h1>
      CategoryId: {d.categoryId}
      <p>
      Article Text: {d.article}
      </p>
    </div>
  ));

  return (
    <div className="article-list">
      {articleList}
    </div>
  );
}

export default BlogCategory;
