import React, { useCallback, useEffect, useState } from "react";
import Category from "./Category";
import TableRow from "./TableRow";
import {
  getLatestTrancation,
  getOverviewConsole,
  getOverviewDesktop,
  getOverviewMobile,
} from "services/player";
import Cookies from "js-cookie";

export default function OverviewContent() {
  const [mobilePrice, setMobilePrice] = useState([]);
  const [desktopPrice, setDesktopPrice] = useState([]);
  const [consolePrice, setConsolePrice] = useState([]);
  const [latestTransaction, setLatestTransaction] = useState([]);

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

  //get transaksi overview
  const getLatest = useCallback(async () => {
    const dataToken = Cookies.get("token");
    const data = await getLatestTrancation(dataToken);
    setLatestTransaction(data);
  }, []);

  useEffect(() => {
    getLatest();
  }, [getLatest]);
  useEffect(() => {}, [latestTransaction]);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category icon="ic-game-desktop" nominal={desktopPrice.price}>
                Game <br /> Desktop
              </Category>
              <Category icon="ic-game-mobile" nominal={mobilePrice.price}>
                Game <br /> Mobile
              </Category>
              <Category icon="ic-game-other" nominal={consolePrice.price}>
                Game
                <br /> Console
              </Category>
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {latestTransaction.map((itemTransaction) => {
                  return (
                    <TableRow
                      key={itemTransaction.id}
                      images={itemTransaction.game.gamePhotoPath}
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
