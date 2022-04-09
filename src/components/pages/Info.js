import React,{useContext} from 'react'
import Contact from './info-components/Contact'
import Experience from './info-components/Experience'
import InfoHeader from './info-components/InfoHeader'
import Tools from './info-components/Tools'
import './Info.css'
import { ThemeContext } from "../ThemeContext";
import { themes_pages } from "./theme-context-pages";


function Info() {
  const [theme, ] = useContext(ThemeContext);

  const getTheme = () => {
    if (theme === "light") {
      return themes_pages.light;
    }
    if (theme === "dimme") {
      return themes_pages.dimme;
    } else {
      return themes_pages.dark;
    }
  };

  return (
    <div style={getTheme()}>
        <InfoHeader/>
        <Contact/>
        
        <Experience/>
        
        <Tools/>
    </div>
  )
}

export default Info