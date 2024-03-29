import TopUpItem from "@/components/organism/TopUpItem";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import TopUpForm from "@/components/organism/TopUpForm";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDetailFeaturedGame, getFeaturedGame } from "services/player";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    gameName: "",
    category: " ",
    gamePhotoPath: "",
  });
  const [nominals, setNominals] = useState([]);

  const getDetailGame = useCallback(async (id) => {
    const data = await getDetailFeaturedGame(id);
    setDataItem(data);
    setNominals(data.nominal);
    localStorage.setItem("data-item", JSON.stringify(data));
  }, []);

  useEffect(() => {
    if (isReady) {
      getDetailGame(query.id);
    }
  }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
