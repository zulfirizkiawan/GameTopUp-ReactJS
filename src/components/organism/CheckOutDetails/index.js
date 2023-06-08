import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CheckOutDetails() {
  const [dataItems, setDataItems] = useState({
    verifyID: "",
    nominalItems: {
      amountCoin: "",
      coinName: "",
      coinPrice: "",
    },
    paymentItems: {
      accountNumber: "",
      bankName: "",
      ownerName: "",
    },
  });

  const originalPrice = parseInt(dataItems.nominalItems.coinPrice, 10);
  const taxPercentage = 0.1; // 10% (0.1)
  const tax = originalPrice * taxPercentage;
  const totalPrice = originalPrice + tax;

  console.log("coba", tax);
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("data-topup");
    const dataItemStorage = JSON.parse(dataLocalStorage);
    setDataItems(dataItemStorage);
  }, []);
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{dataItems.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataItems.nominalItems.amountCoin}{" "}
            {dataItems.nominalItems.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={dataItems.nominalItems.coinPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={tax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={totalPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Bank Transfer</h2>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataItems.paymentItems.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataItems.paymentItems.ownerName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataItems.paymentItems.accountNumber}
          </span>
        </p>
      </div>
    </>
  );
}
