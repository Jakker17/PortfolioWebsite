import React, { useContext } from "react";
import { BlogContext } from "./Blog-context";
import "./MenuItem.css";
import { themes } from "../../theme-context";
import { ThemeContext } from "../../ThemeContext";
import { BlogArticleContext } from "./Blog-Article-context";

function MenuItem(props) {
  const [, setCategoryContext] = useContext(BlogContext);
  const [,setArticleContext] = useContext(BlogArticleContext);
  const [theme] = useContext(ThemeContext);
  const article = 0;

  const onClickHandler = () => {
    setCategoryContext(props.id);
    setArticleContext(0);
  };

  const getTheme = () => {
    if (theme === "light") {
      return themes.light;
    }
    if (theme === "dimme") {
      return themes.dimme;
    } else {
      return themes.dark;
    }
  };

  return (
    <div className="menu-items" onClick={onClickHandler} style={getTheme()}>
      <div className="menu-items-item">{props.name}</div>
    </div>
  );
}

export default MenuItem;
