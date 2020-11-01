import React from "react";
import Logo from "./logo"
import SearchBar from "./search-bar"
import Icon from "./icon"
import Login from "./login"

/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  console.log(props);
  return (<div className="navbar">
            <Logo logo={props.icons.logoUrl} />
            <SearchBar />
            <Icon iconUrl={props.icons.videoUrl}/>
            <Icon iconUrl={props.icons.menuUrl}/>
            <Icon iconUrl={props.icons.notificationUrl}/>
            <Login />
          </div>);
}
