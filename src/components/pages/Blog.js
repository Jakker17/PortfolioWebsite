import React, { useEffect, useState } from "react";
import Menu from "./blog/Menu";
import "./Blog.css";
import Axios from "axios";
import { BlogContext } from "./blog/Blog-context";
import BlogCategory from "./blog/BlogCategory";

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
      <BlogContext.Provider
        value={[
          categoryContext,
          setCategoryContext,
          articleContext,
          setArticleContext,
        ]}
      >
        <div>
          <Menu categories={categories} />
        </div>
        {categoryContext!==0 && <div className="blog-content">
            <BlogCategory/>
            </div>}

      </BlogContext.Provider>
      {console.log(categoryContext)}
    </div>
  );
}

export default Blog;
