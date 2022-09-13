import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="container-fluid sidebar col-2">
      <div className="row">
        <div className="sidebarWrapper">
          <div className="top d-flex align-item-center justify-content-center mt-4">
            <span className="logo text-danger ">KDansari</span>
          </div>
          <hr className="mt-4" />
          <div className="center  m-4 p-2">
            <div className="Main mb-3">
              <h6>Main</h6>
              <div className="sidebar_Icons">
                <DashboardIcon className="m-1 text-primary" />
                <span>Dashboard</span>
              </div>
            </div>
            <div className="List mb-3">
              <h6>List</h6>
              <div className="sidebar_Icons">
                <PersonIcon className="m-1 text-primary" />
                <span>user</span>
              </div>
              <div className="sidebar_Icons">
                <ShoppingBagIcon className="m-1 text-primary" />
                <span>Products</span>
              </div>
              <div className="sidebar_Icons">
                <AddShoppingCartIcon className="m-1 text-primary" />
                <span>Order</span>
              </div>
              <div className="sidebar_Icons">
                <LocalShippingIcon className="m-1 text-primary" />
                <span>Delivery</span>
              </div>
            </div>

            <div className="useful mb-3">
              <h6>Useful</h6>
              <div className="sidebar_Icons">
                <QueryStatsIcon className="m-1 text-primary" />
                <span>Stats</span>
              </div>
              <div className="sidebar_Icons">
                <NotificationsNoneIcon className="m-1 text-primary" />
                <span>Notification</span>
              </div>
            </div>

            <div className="service mb-3">
              <h6>Service</h6>
              <div className="sidebar_Icons">
                <SettingsIcon className="m-1 text-primary" />
                <span>System</span>
              </div>
              <div className="sidebar_Icons">
                <SettingsIcon className="m-1 text-primary" />
                <span>Logs</span>
              </div>
              <div className="sidebar_Icons">
                <SettingsIcon className="m-1 text-primary" />
                <span>Setting</span>
              </div>
            </div>

            <div className="user mb-3">
              <h6>User</h6>
              <div className="sidebar_Icons">
                <AccountBoxIcon className="m-1 text-primary" />
                <span>Profile</span>
              </div>
              <div className="sidebar_Icons">
                <LogoutIcon className="m-1 text-primary" />
                <span>Logout</span>
              </div>
            </div>

            <div className="theme mb-3">
              <h6>Theme</h6>
              <div className="sidebar_Icons">
                <DashboardIcon />
                <DashboardIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
