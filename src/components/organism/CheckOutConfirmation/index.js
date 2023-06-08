import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { setCO } from "services/player";

export default function CheckOutConfirmation() {
  const [checkBoxs, setCheckBoxs] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-topup");
    const userString = Cookies.get("user");
    const dataToken = Cookies.get("token");

    const dataItem = JSON.parse(dataItemLocal);
    const dataTopUp = JSON.parse(dataTopUpLocal);
    const users = JSON.parse(userString);

    // perhitungan total price
    const originalPrice = parseInt(dataTopUp.nominalItems.coinPrice, 10);
    const taxPercentage = 0.1; // 10% (0.1)
    const tax = originalPrice * taxPercentage;
    const totalPrice = originalPrice + tax;

    if (!checkBoxs) {
      toast.warning("Pastikan anda sudah mentransfer uang sesuai nominal");
    }

    const data = {
      user_id: users.id,
      game_id: dataItem.id,
      item: dataTopUp.nominalItems.amountCoin,
      price: totalPrice,
      bank_id: dataTopUp.paymentItems.id,
      status: "Pending",
    };

    const result = await setCO(data, dataToken);

    if (result.ok === false) {
      toast.error("Mohon periksa data top up game anda");
    } else {
      toast.success("Selamat transaksi anda berhasil");
    }
    router.push("/complete-checkout");
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        Saya sudah melakukan transfer
        <input
          type="checkbox"
          checked={checkBoxs}
          onChange={() => setCheckBoxs(!checkBoxs)}
        />
        <span className="checkmark"></span>
      </label>
      <p className="pt-20">
        Lakukan pembayaran terdahulu sesuai nominal total dan bank yang dipilih
      </p>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Konfimasi Pembayaran
        </button>
      </div>
    </>
  );
}
