import OverviewContent from "@/components/organism/OverviewContent";
import Sidebar from "@/components/organism/SideBar";
import React from "react";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  );
}
