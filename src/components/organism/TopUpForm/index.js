import ItemCoin from "@/components/atoms/ItemCoin";
import PaymentItem from "@/components/atoms/PaymentItem";
import React, { useCallback, useEffect, useState } from "react";
import { getBank } from "services/player";

export default function TopUpForm(props) {
  const { nominals } = props;
  const [bankList, setBankList] = useState([]);

  const getBankList = useCallback(async () => {
    const data = await getBank();
    setBankList(data);
  }, []);

  useEffect(() => {
    getBankList();
  }, [getBankList]);

  useEffect(() => {}, [bankList]);

  console.log("Bank data:", bankList);
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((item) => {
            const coinPrice = parseInt(item.coinPrice, 10);
            console.log("coinPrice", coinPrice);
            return (
              <ItemCoin
                key={item.id}
                title={item.coinName}
                totalCoin={item.amountCoin}
                price={coinPrice}
                id={item.id}
              />
            );
          })}

          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Bank Transfer
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {bankList.map((paymentItem) => {
              return (
                <PaymentItem
                  key={paymentItem.id}
                  id={paymentItem.id}
                  namaBank={paymentItem.bankName}
                  namaRek={paymentItem.ownerName}
                  noRek={paymentItem.accountNumber}
                />
              );
            })}

            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>

      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
}
