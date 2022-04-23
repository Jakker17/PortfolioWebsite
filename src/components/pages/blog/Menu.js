import React, {  useContext } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import { themes } from "../../theme-context";
import { ThemeContext } from "../../ThemeContext";

function Menu(props) {
  const [theme,] = useContext(ThemeContext);

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

  const categoryList = props.categories.map((d) => (
    <MenuItem key={d.id} id={d.id} name={d.name} />
  ));
  return <div className="menu" style={getTheme()}>{categoryList}</div>;
}

export default Menu;
