import  { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./topbar.css";
import accesslogo from './../../../images/icons/Frame-2.svg'
import { useMsal } from "@azure/msal-react";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "../../../Themecontext";
import { useDispatch } from "react-redux";
import { logUserLogout } from "../../redux/features/auditLogs";

function Topbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const { instance, accounts } = useMsal();
  const { theme, toogleTheme } = useTheme();

  console.log(accounts)

  const [active, setActive] = useState(theme === "Light" ? "Light" : "Dark");

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "https://app.intellicontract.ai.srm-tech.com/", // 🔁 Back to login page or home
    });
    const username = accounts[0]?.name;
    if (username) {
      dispatch(logUserLogout(username));
    }
  };

  return (
    <nav className="header" role="navigation">
      <div className="header-left">
        <img src={accesslogo}/>
         <span className="acces-formulary-title">Access</span>
        <span className="nav-title"> D360</span>
        
      </div>
      <div className="header-right">
       

        <span></span>
       
        <div className="header-profile">
          <div className="d-flex align-items-center gap-2">
           
            <Avatar
              className="profile-img"
              style={{
                backgroundColor: "#8c8c8c",
                color: "#1f1f1f",
                fontWeight: 550,
              }}
            >
              {accounts[0]?.name?.charAt(0)?.toUpperCase()}
            </Avatar>
           
          </div>
          <ul className="header-profile-dropdown">           
            <li className="logout" onClick={() => handleLogout()}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
