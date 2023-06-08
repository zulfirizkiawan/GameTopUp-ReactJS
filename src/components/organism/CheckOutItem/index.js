import React, { useEffect, useState } from "react";

export default function CheckOutItem() {
  const [dataItems, setDataItems] = useState({
    gamePhotoPath: "",
    category: "",
    gameName: "",
  });
  useEffect(() => {
    const dataLocalGame = localStorage.getItem("data-item");
    const dataItemGame = JSON.parse(dataLocalGame);
    setDataItems(dataItemGame);
  }, []);
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={dataItems.gamePhotoPath} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {dataItems.gameName}
        </p>
        <p className="color-palette-2 m-0">Category: {dataItems.category}</p>
      </div>
    </div>
  );
}
