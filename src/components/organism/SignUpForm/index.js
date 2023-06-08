import cx from "classnames";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { setSignUp } from "services/auth";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const className = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
  };

  const router = useRouter();

  const onSubmit = async () => {
    const formData = {
      name,
      email,
      password,
      password_confirmation: password,
      phoneNumber,
    };

    if (!email || !password) {
      toast.error("Email dan password wajib diisi !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const result = await setSignUp(formData);

      if (result.ok === false) {
        toast.error("Mohon periksa data register anda dengan benar", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Selamat akun anda berhasil terdaftar", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        //token
        const token = result.access_token;
        const user = result.user;
        Cookies.set("token", token, {
          sameSite: "none",
          secure: true,
          expires: 2,
        });

        Cookies.set("user", JSON.stringify(user), {
          // Mengubah objek menjadi string
          sameSite: "none",
          secure: true,
          expires: 2,
        });
        router.push("/sign-up-success");
      }
    }
  };

  return (
    <div>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Phone Number
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="phoneNumber"
          name="phoneNumber"
          aria-describedby="phoneNumber"
          placeholder="Your Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <a
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Sign Up
        </a>
        <Link href="/sign-in" legacyBehavior>
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </div>
  );
}
