import React, { useContext } from "react";
import { BlogContext } from "./Blog-context";
import "./MenuItem.css";
import { themes } from "../../theme-context";
import { ThemeContext } from "../../ThemeContext";

function MenuItem(props) {
  const [, setCategoryContext, , ,] = useContext(BlogContext);
  const [theme,] = useContext(ThemeContext);

  const onClickHandler = () => {
    console.log(props.id);
    setCategoryContext(props.id);
    
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
