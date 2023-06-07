import GameItem from "@/components/molecules/GameItem";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "services/player";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, []);

  useEffect(() => {
    getGameList();
  }, [getGameList]);

  useEffect(() => {}, [gameList]);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => {
            return (
              <GameItem
                key={item.id}
                title={item.gameName}
                category={item.category}
                thumbnail={item.gamePhotoPath}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
