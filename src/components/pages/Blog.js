import React, { useEffect, useState } from "react";
import Menu from "./blog/Menu";
import "./Blog.css";
import Axios from "axios";
import { BlogContext } from "./blog/Blog-context";
import { BlogArticleContext } from "./blog/Blog-Article-context";
import BlogCategory from "./blog/BlogCategory";
import BlogArticle from "./blog/BlogArticle";

function Blog() {
  const [categories, setCategories] = useState([]);
  const [categoryContext, setCategoryContext] = useState(0);
  const [articleContext, setArticleContext] = useState(0);

  const getFromBE = () => {
    Axios.get("http://localhost:8080/categories/getAll").then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getFromBE();
  }, []);

  return (
    <div className="blog">
      <BlogContext.Provider value={[categoryContext, setCategoryContext]}>
        <BlogArticleContext.Provider
          value={[articleContext, setArticleContext]}
        >
          <div style={{ minHeight: "100vh" }}>
            <Menu categories={categories} />
          </div>
          {categoryContext !== 0 && (
            <div className="blog-content">
              {articleContext===0 &&<BlogCategory />}
              {articleContext!==0 &&<BlogArticle/>}
            </div>
          )}

        </BlogArticleContext.Provider>
      </BlogContext.Provider>
    </div>
  );
}

export default Blog;
