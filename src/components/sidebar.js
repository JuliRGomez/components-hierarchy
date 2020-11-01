import React from "react";
import Icon from "./icon"

export function Sidebar(props) {
    
    const listItems = props.icons.map((element,index) =>
        <Icon key={index.toString()} title={element.title} iconUrl={element.icon}>
        
        </Icon>
    );

    return (
        <div className="sidebar">{listItems}</div>
    );


}
