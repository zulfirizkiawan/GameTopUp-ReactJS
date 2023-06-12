import SignUpForm from "@/components/organism/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <div>
            <div className="pb-50">
              <Link href="/" legacyBehavior>
                <a className="navbar-brand">
                  <Image
                    src="/icon/logo.svg"
                    width={60}
                    height={60}
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <SignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}
