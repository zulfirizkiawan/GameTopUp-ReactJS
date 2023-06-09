import cx from "classnames";
import Image from "next/image";
import React from "react";
import { NumericFormat } from "react-number-format";

export default function TableRow(props) {
  const { title, category, price, item, status, images } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    processed: status === "Processed",
    success: status === "Success",
    failed: status === "Failed",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="img-overview float-start me-3 mb-lg-0 mb-3"
          src={`${images}`}
          width={80}
          height={60}
          alt="img transaksi"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumericFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
