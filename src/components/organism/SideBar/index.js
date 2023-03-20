import React from "react";
import SidebarFooter from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function Sidebar(props) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="messages" href="/member" />
          <MenuItem title="Card" icon="card" href="/member" />
          <MenuItem title="Rewards" icon="rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="logout" href="/sign-in" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
