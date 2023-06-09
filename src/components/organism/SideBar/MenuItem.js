import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuItem(props) {
  const { title, icon, active, href, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="icon me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          height={25}
          width={25}
          alt=""
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href} legacyBehavior>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
