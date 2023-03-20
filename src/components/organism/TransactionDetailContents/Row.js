import React from "react";

export default function Row(props) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}
