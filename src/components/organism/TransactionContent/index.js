import React, { useCallback, useEffect, useState } from "react";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";
import Cookies from "js-cookie";
import {
  getLatestTrancation,
  getOverviewConsole,
  getOverviewDesktop,
  getOverviewMobile,
} from "services/player";
import { NumericFormat } from "react-number-format";

export default function TransactionContent() {
  const [transaction, setTransaction] = useState([]);
  const [mobilePrice, setMobilePrice] = useState([]);
  const [desktopPrice, setDesktopPrice] = useState([]);
  const [consolePrice, setConsolePrice] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? transaction
      : transaction.filter(
          (transaction) => transaction.status === selectedCategory
        );

  console.log("filteredData", filteredData);

  const total = mobilePrice.price + desktopPrice.price + consolePrice.price;

  //get data total pembelian game item dengan kategori mobile
  const getMobilePrice = useCallback(async () => {
    const dataToken = Cookies.get("token");
    const data = await getOverviewMobile(dataToken);
    setMobilePrice(data);
  }, []);

  useEffect(() => {
    getMobilePrice();
  }, [getMobilePrice]);
  useEffect(() => {}, [mobilePrice]);

  //get data total pembelian game item dengan kategori Desktop
  const getDesktopPrice = useCallback(async () => {
    const dataToken = Cookies.get("token");
    const data = await getOverviewDesktop(dataToken);
    setDesktopPrice(data);
  }, []);

  useEffect(() => {
    getDesktopPrice();
  }, [getDesktopPrice]);
  useEffect(() => {}, [desktopPrice]);

  //get data total pembelian game item dengan kategori Console
  const getConsoleConsole = useCallback(async () => {
    const dataToken = Cookies.get("token");
    const data = await getOverviewConsole(dataToken);
    setConsolePrice(data);
  }, []);

  useEffect(() => {
    getConsoleConsole();
  }, [getConsoleConsole]);
  useEffect(() => {}, [consolePrice]);

  //get transaksi di halaman transaksi
  const getLatest = useCallback(async () => {
    const dataToken = Cookies.get("token");
    const data = await getLatestTrancation(dataToken);
    setTransaction(data);
  }, []);

  useEffect(() => {
    getLatest();
  }, [getLatest]);
  useEffect(() => {}, [transaction]);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumericFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                title="All Trx"
                active={selectedCategory === "All"}
                onClick={() => setSelectedCategory("All")}
              />
              <ButtonTab
                title="Pending"
                active={selectedCategory === "Pending"}
                onClick={() => setSelectedCategory("Pending")}
              />
              <ButtonTab
                title="Processed"
                active={selectedCategory === "Processed"}
                onClick={() => setSelectedCategory("Processed")}
              />
              <ButtonTab
                title="Success"
                active={selectedCategory === "Success"}
                onClick={() => setSelectedCategory("Success")}
              />
              <ButtonTab
                title="Failed"
                active={selectedCategory === "Failed"}
                onClick={() => setSelectedCategory("Failed")}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {filteredData.map((itemTransaction) => {
                  return (
                    <TableRow
                      key={itemTransaction.id}
                      image={itemTransaction.game.gamePhotoPath}
                      title={itemTransaction.game.gameName}
                      category={itemTransaction.game.category}
                      item={itemTransaction.item}
                      price={itemTransaction.price}
                      status={itemTransaction.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
