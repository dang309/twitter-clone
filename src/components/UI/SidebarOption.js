import React from "react";
import "../css/SidebarOption.css";

function SidebarOption(props) {
  const { active, text, Icon } = props;
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
