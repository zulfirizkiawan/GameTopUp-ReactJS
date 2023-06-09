import React, { useState } from "react";
import SidebarFooter from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Sidebar(props) {
  const { activeMenu } = props;
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
    setIsLogin(false);
  };

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
          <MenuItem title="Log Out" icon="logout" onClick={onLogout} />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
