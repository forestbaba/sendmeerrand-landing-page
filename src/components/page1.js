import React from "react";
import P1 from "../asset/p1.svg";
import P2 from "../asset/p2.svg";
import MG from "../asset/mg.svg";
import Down from "../asset/download.svg";

export default function Page1() {
  return (
    <div
      className="flex-column md:flex px-20 py-10"
      style={{
        backgroundColor: "#F5F5F5",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      id='5'
    >
      <div className="mr-30">
        <img src={Down} alt="google" className="mb-7 w-40 md:w-72" />
        <h1
          className="-ml-4 md:-ml-32 font-bold text-3xl md:text-4xl"
        >
          Get started with
        </h1>
        <h1
          className="-ml-4 md:-ml-32 pb-5 font-bold text-3xl md:text-4xl"
        >
          Send Me Errand
        </h1>
        <div className="flex" style={{ display: "" }}>
          <img src={P2} alt="google" className="w-32 md:w-44"/>
          <img src={P1} alt="apple"  className="w-32 md:w-44 ml-2 md:ml-10 lg:ml-10" />
        </div>
      </div>
      <img src={MG} alt="mg"  className="min-height-700" />
    </div>
  );
}
