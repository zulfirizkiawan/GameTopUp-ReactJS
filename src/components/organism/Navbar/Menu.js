import cx from "classnames";
import Link from "next/link";

export default function Menu(props) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href} passHref legacyBehavior>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
