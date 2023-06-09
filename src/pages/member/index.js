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
