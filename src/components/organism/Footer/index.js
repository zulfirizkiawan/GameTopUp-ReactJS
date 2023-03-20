import LinkFooterItem from "@/components/atoms/LinkFooterItem";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={50} height={50} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooterItem title="About Us" href="" />
                    <LinkFooterItem title="Press Release" />
                    <LinkFooterItem title="Terms of Use" />
                    <LinkFooterItem title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooterItem title="Refund Policy" />
                    <LinkFooterItem title="Unlock Rewards" />
                    <LinkFooterItem title="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooterItem title="TopUp@store.gg" />
                    <LinkFooterItem title="team@store.gg" />
                    <LinkFooterItem title="Malang Selatan" />
                    <LinkFooterItem title="0859777279182" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
