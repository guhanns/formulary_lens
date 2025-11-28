import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import minmaximg from '../../../images/sidebar_icons/min-max.svg'
import settings from '../../../images/icons/settings-01.svg'
import support from '../../../images/sidebar_icons/support.svg'
import { useTheme } from "../../../Themecontext";

function Sidebar() {
  const [sidebarMenu, setSidebarMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();
  const { theme, toogleTheme } = useTheme();

  useEffect(() => {
    setSidebarMenu(SidebarData);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const active = SidebarData.find((item) =>
      currentPath.startsWith(item.link)
    );
    if (active) {
      setActiveMenu(active.id);
    }
  }, [location]);
  return (
    <>
      <div className="sidebar-top">
       <div className="sidebar-logo-box">
       <img src={minmaximg} className="sidebar-logo"/>
       </div>
      </div>
      <section className="sidebar">
       
        <ul className="sidebar-menu">
        <div className="">
          {/* <img src={hide_sidebar} className="hide_side"/> */}
        </div>
          {sidebarMenu?.map((list) => {
            return (
              <Link to={`${list.link}`}>
                <li
                  className={`${
                    list.id === activeMenu ? "active" : ""
                  } sidebar-list`}
                  title={list?.navItem}
                  onClick={() => setActiveMenu(list.id)}
                >
                  <div className={ `side-menu-box ${list.id === activeMenu ?"active" :''}`}>
                    {/* {theme === "light" ?(
                      <img src={graphlight}/>
                    ):(
                      <img src={graphdark}/>
                    )} */}
                    <img src={
                      theme === 'Dark' ? 
                      list.id === activeMenu ? list.img : list.imgSelected 
                      : list.id === activeMenu ? list.imgLightSelected :list.imgLight 
                    } className="sidebar-icon-img" />
                  </div>
                 {/* <span> {list?.navItem}</span> */}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="setting">
             <img src={settings}/>
        </div>

       
      </section>
      
    </>
  );
}

export default Sidebar;
