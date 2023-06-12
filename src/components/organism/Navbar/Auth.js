import Link from "next/link";
import React, { useEffect, useState } from "react";
import propYypes from "prop-types";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    profilePhotoPath: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setIsLogin(true);
      const userString = Cookies.get("user");
      const users = JSON.parse(userString);
      setUser(users);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.profilePhotoPath ===
            "https://topupgame.kazuhaproject.com/storage/" ? (
              <img
                src="/img/avatar-1.png" // Menampilkan gambar default dari folder "public"
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            ) : (
              <img
                src={user.profilePhotoPath}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            )}
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member" passHref legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Wallet
                </a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile" passHref legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item text-lg color-palette-2"
                href="#"
                onClick={onLogout}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" passHref legacyBehavior>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}

Auth.prototype = {
  isLogin: propYypes.bool,
};
