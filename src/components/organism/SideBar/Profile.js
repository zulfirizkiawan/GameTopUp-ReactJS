import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    profilePhotoPath: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const userString = Cookies.get("user");
      const users = JSON.parse(userString);
      setUser(users);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src="/img/avatar-1.png"
        width="90"
        height="90"
        className="img-fluid mb-20"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
