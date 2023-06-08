import CheckOutConfirmation from "@/components/organism/CheckOutConfirmation";
import CheckOutDetails from "@/components/organism/CheckOutDetails";
import CheckOutItem from "@/components/organism/CheckOutItem";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Checkout() {
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="title-text ">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckOutItem />
          <hr />
          <CheckOutDetails />
          <CheckOutConfirmation />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token, user } = req.cookies;
  console.log("token", token);

  const users = JSON.parse(user);
  console.log("user", users);
  if (!token) {
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
