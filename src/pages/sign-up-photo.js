import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { setUploadPhoto } from "services/auth";

export default function SignUpPhoto() {
  const [images, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [user, setUser] = useState({
    profilePhotoPath: "",
  });

  const handleFileChange = (event) => {
    setImagePreview(URL.createObjectURL(event.target.files[0]));
    return setImage(event.target.files[0]);
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const userString = Cookies.get("user");
      const users = JSON.parse(userString);
      setUser(users);
    }
  }, []);

  const router = useRouter();

  const onSaveImage = async (event) => {
    event.preventDefault();

    // console.log("data image", images);
    const formData = new FormData();

    formData.append("image", event.target.files[0]);

    // const token = Cookies.get("token");

    // try {
    //   const response = await fetch(
    //     `https://topupgame.kazuhaproject.com/api/user/photo`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: data,
    //     }
    //   );

    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log("responseData", responseData);
    //     return responseData;
    //   } else {
    //     console.log("response", response);
    //     return response;
    //   }
    // } catch (error) {
    //   console.log("error", error);
    //   throw error;
    // }

    // router.push("/");
  };

  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-100 pb-lg-100 pt-50 pb-50">
        <div className="container mx-auto">
          <div>
            <div className="form-input d-md-block flex-column">
              <div>
                <h2 className="text-4xl fw-bold text-center color-palette-1 mb-20">
                  Akun berhasil terdaftar
                </h2>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <img
                        src={imagePreview}
                        className="img-upload"
                        alt="upload"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {user.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {user.email}
                </p>
              </div>

              <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                  type="button"
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  onClick={(event) => onSaveImage(event)}
                >
                  Upload Image
                </button>

                <Link href="/" legacyBehavior>
                  <a
                    className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                    role="button"
                  >
                    Lewati Upload Gambar
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
