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

export async function getServerSideProps({ req }) {
  const { token, user } = req.cookies;

  let users = null;
  try {
    users = JSON.parse(user);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
  }

  if (!token || !users) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: users,
    },
  };
}
