import StepItem from "@/components/molecules/StepItem";
import React from "react";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon="step-1"
            title="1. Start"
            dec1="Pilih salah satu game"
            dec2="yang ingin kamu top up"
          />
          <StepItem
            icon="step-2"
            title="2. Fill Up"
            dec1="Top up sesuai dengan"
            dec2="nominal yang sudah tersedia"
          />
          <StepItem
            icon="step-3"
            title="3. Be a Winner"
            dec1="Siap digunakan untuk"
            dec2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
