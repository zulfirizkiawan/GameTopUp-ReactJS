import Sidebar from "@/components/organism/SideBar";
import TransactionsDetailContents from "@/components/organism/TransactionDetailContents";
import React from "react";

export default function TransactionsDetail() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsDetailContents />
      </section>
    </>
  );
}
