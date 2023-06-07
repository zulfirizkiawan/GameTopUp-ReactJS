import Input from "@/components/atoms/input";
import Sidebar from "@/components/organism/SideBar";
import Image from "next/image";
import React from "react";

export default function EditProfile() {
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
                  <div className="position-relative me-20">
                    <Image
                      src="/img/avatar-1.png"
                      width={90}
                      height={90}
                      className="avatar img-fluid"
                      alt=""
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src="/icon/ic-trash.svg"
                        height={24}
                        width={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <Image
                        src="/icon/upload.svg"
                        width={90}
                        height={90}
                        alt=""
                      />
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
                  <Input label="Full Name" />
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
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
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
