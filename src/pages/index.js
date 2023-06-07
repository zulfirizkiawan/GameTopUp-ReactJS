import Navbar from "@/components/organism/Navbar";
import MainBanner from "@/components/organism/MainBanner";
import TransactionStep from "@/components/organism/TransactionStep";
import { useEffect } from "react";
import FeaturedGame from "@/components/organism/FeaturedGame";
import Reached from "@/components/organism/Reached";
import Story from "@/components/organism/Story";
import Footer from "@/components/organism/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </div>
  );
}
