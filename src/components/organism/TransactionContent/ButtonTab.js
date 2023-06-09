import React from "react";
import cx from "classnames";

export default function ButtonTab(props) {
  const { title, active, onClick } = props;
  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter="*" type="button" onClick={onClick} className={buttonClass}>
      {title}
    </a>
  );
}
