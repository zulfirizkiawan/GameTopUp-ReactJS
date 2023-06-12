import Input from "@/components/atoms/input";
import Sidebar from "@/components/organism/SideBar";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setUpdateProfile } from "services/member";

export default function EditProfile() {
  const [user, setUser] = useState({
    profilePhotoPath: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const dataToken = Cookies.get("token");

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const userString = Cookies.get("user");
      const users = JSON.parse(userString);
      setUser(users);
    }
  }, []);

  const router = useRouter();

  const onUpdateprofile = async () => {
    const data = {
      name: user.name,
      phoneNumber: user.phoneNumber,
    };

    const result = await setUpdateProfile(data, dataToken);

    if (result.ok === false) {
      toast.error("Mohon periksa data update anda");
    } else {
      Cookies.remove("token");
      Cookies.remove("user");
      router.push("/sign-in");
      toast.success("Selamat update profile anda berhasil");
    }
  };
  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {user.profilePhotoPath ===
                      "https://topupgame.kazuhaproject.com/storage/" ? (
                        <img
                          src="/img/avatar-1.png"
                          width="90"
                          height="90"
                          className="avatar img-fluid"
                        />
                      ) : (
                        <img
                          src={user.profilePhotoPath}
                          width={90}
                          height={90}
                          className="avatar img-fluid"
                          alt=""
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.name}
                    onChange={(event) =>
                      setUser({ ...user, name: event.target.value })
                    }
                  />
                </div>
                <div className="pt-30">
                  <Input
                    label="Email Address"
                    type="email"
                    className="form-control rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                    disabled
                    value={user.email}
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
                  />
                </div>
                <div className="pt-30">
                  <Input
                    label="Phone"
                    type="tel"
                    className="form-control rounded-pill text-lg"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Enter your phone number"
                    value={user.phoneNumber}
                    onChange={(event) =>
                      setUser({ ...user, phoneNumber: event.target.value })
                    }
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    type="button"
                    onClick={onUpdateprofile}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token, user } = req.cookies;

  let users = null;
  try {
    users = JSON.parse(user);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
  }

  if (!token || !users) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: users,
    },
  };
}
