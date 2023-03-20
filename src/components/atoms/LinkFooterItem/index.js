import Link from "next/link";
import React from "react";

export default function LinkFooterItem(props) {
  const { title, href = "/" } = props;
  return (
    <li className="mb-6">
      <Link legacyBehavior href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
