import React from "react";
import Awards from "../components/Awards";
import Concepts from "../components/Concepts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Office from "../components/Office";
import Publications from "../components/Publications";
import SwiperSliderComponent from "../components/SwiperSliderComponent";
import WhoWeAre from "../components/WhoWeAre";

export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header></Header>
      <SwiperSliderComponent></SwiperSliderComponent>
      <WhoWeAre></WhoWeAre>
      <Concepts></Concepts>
      <Publications></Publications>
      <Awards></Awards>
      <Office></Office>
      <Footer></Footer>
    </div>
  );
}
