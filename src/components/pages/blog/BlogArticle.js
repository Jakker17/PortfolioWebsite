import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { BlogArticleContext } from "./Blog-Article-context";
import './BlogArticle.css';

function BlogArticle() {
    const [articleContext,] = useContext(BlogArticleContext);
    const [article, setArticle] = useState({});
    const getFromBE = () => {
        Axios.get(
          "http://localhost:8080/articles/getById/" + articleContext
        ).then((response) => {
          setArticle(response.data);
        });
      };

    useEffect(() => {
        getFromBE();
      }, []);

  return (
    <div className="article">
      <h1>{article.name}</h1>
      <h3>{article.categoryId}</h3>
      <p>{article.article}</p>
    </div>
  )
}

export default BlogArticle