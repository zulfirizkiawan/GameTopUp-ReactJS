import Sidebar from "@/components/organism/SideBar";
import TransactionContent from "@/components/organism/TransactionContent";
import React from "react";

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}
