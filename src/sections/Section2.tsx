import Card from "@/components/custom/Card";
import React from "react";

function Section2() {
  return (
    <div className="py-20" id="ourDoctors">
    <h1 className="text-center text-6xl font-bold tracking-wide">Our Doctors</h1>
      <div className="flex flex-wrap gap-5 p-10 justify-evenly ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section2;
