import ItemCoin from "@/components/atoms/ItemCoin";
import PaymentItem from "@/components/atoms/PaymentItem";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBank } from "services/player";

export default function TopUpForm(props) {
  const { nominals } = props;
  const [bankList, setBankList] = useState([]);
  const [verifyID, setVerifyID] = useState("");

  const [nominalItems, setNominalItems] = useState({});
  const [paymentItems, setPaymentItems] = useState({});

  const getBankList = useCallback(async () => {
    const data = await getBank();
    setBankList(data);
  }, []);

  useEffect(() => {
    getBankList();
  }, [getBankList]);

  useEffect(() => {}, [bankList]);

  const onNominalItem = (data) => {
    setNominalItems(data);
  };

  const onPaymentItem = (data) => {
    setPaymentItems(data);
  };

  const router = useRouter();

  const onsubmit = () => {
    if (verifyID === "" || nominalItems === {} || paymentItems === {}) {
      toast.error("Mohon isi semua data dengan benar", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const data = {
        verifyID,
        nominalItems,
        paymentItems,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };

  return (
    <div>
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
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
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
            return (
              <ItemCoin
                key={item.id}
                title={item.coinName}
                totalCoin={item.amountCoin}
                price={coinPrice}
                id={item.id}
                onChange={() => onNominalItem(item)}
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
                  onChange={() => onPaymentItem(paymentItem)}
                />
              );
            })}

            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>

      <div className="d-sm-block d-flex flex-column w-100">
        <button
          onClick={onsubmit}
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Pembayaran
        </button>
      </div>
    </div>
  );
}
