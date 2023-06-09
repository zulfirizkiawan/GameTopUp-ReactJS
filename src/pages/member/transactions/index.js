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
