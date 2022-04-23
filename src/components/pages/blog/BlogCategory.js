import React, { useEffect, useState, useContext } from "react";
import { BlogContext } from "./Blog-context";
import Axios from "axios";
import "./BlogCategory.css";
import ArticleCard from "./ArticleCard";

function BlogCategory() {
  const [categoryContext, ,, ] = useContext(BlogContext);
  const [articles, setArticles] = useState([]);



  useEffect(() => {
    const getFromBE = () => {
      Axios.get(
        "http://localhost:8080/articles/getAllByCategory/" + categoryContext
      ).then((response) => {
        setArticles(response.data);
      });
    };
    
    getFromBE();
  }, [categoryContext]);


  const articleList = articles.map((d) => (
    <div className="article-box" key={d.id}>
      <ArticleCard id={d.id} name={d.name} categoryId={d.categoryId}/>
    </div>
  ));

  return <div className="article-list">{articleList}</div>;
}

export default BlogCategory;
