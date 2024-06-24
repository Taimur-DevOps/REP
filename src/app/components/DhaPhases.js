import React from "react";
import Button from "./Button";
import Image from "next/image";
import phase1 from "@/assets/phase1.jpg";
import phase2 from "@/assets/phase2.jpg";
import phase3 from "@/assets/phase3.jpg";
import phase4 from "@/assets/phase4.jpg";

const DhaPhases = () => {
  return (
    <>
      <div className="py-24 lg:px-40 px-7">
        <div className="flex gap-7 lg:flex-row flex-col">
          <div className="flex flex-col gap-5">
            <span className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                overflow="visible"
                height="15"
                viewBox="0 0 20 16"
                fill="#fa8f8d"
                stroke="#fa8f8d"
                stroke-width="1"
                stroke-linecap="square"
                stroke-miterlimit="10"
              >
                <g transform="translate(-12.000000, 0)">
                  <path d="M28,0L10,18" />
                  <path d="M18,0L0,18" />
                  <path d="M48,0L30,18" />
                  <path d="M38,0L20,18" />
                </g>
              </svg>
            </span>
            <h2 className="text-4xl font-bold font-nokara leading-[1.5em]">
              Discover DHA Phases
            </h2>
            <p className="text-base font-thin leading-7 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at fermentum felis. Phasellus eget vehicula sem.
            </p>
            <div>
              <Button text="Discover" variant="primary" />
            </div>
          </div>
          <div className=" ">
            <div className="flex lg:flex-row gap-10 flex-col">
              <div className="1st-column relative flex flex-col gap-10">
                <div className="lg:w-[265px] lg:h-[200px] w-[315px] h-[210px]  rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase1"
                    src={phase1}
                    className="rounded-[4px] w-full h-full"
                  />
                  <div className="absolute top-0 rounded-[4px] lg:w-[265px] lg:h-[200px] w-[315px]  h-[210px]   bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
                <div className="lg:w-[265px] lg:h-[250px] h-[270px] w-[315px] rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase2"
                    src={phase2}
                    className="rounded-[4px]  w-full h-full"
                  />
                  <div className="absolute bottom-0 rounded-[4px] lg:w-[265px] lg:h-[250px] w-[315px] h-[270px] bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
              </div>
              <div className="2nd-column relative flex flex-col gap-10">
                <div className="lg:w-[265px] lg:h-[250px] w-[315px] h-[270px] rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase2"
                    src={phase3}
                    className="rounded-[4px]  w-full h-full"
                  />
                  <div className="absolute top-0 rounded-[4px] lg:w-[265px] lg:h-[250px] w-[315px] h-[270px] bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
                <div className="lg:w-[265px] lg:h-[200px]  w-[315px] h-[210px] rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase1"
                    src={phase4}
                    className="rounded-[4px] w-full h-full"
                  />
                  <div className="absolute bottom-0 rounded-[4px] lg:w-[265px] lg:h-[200px]  w-[315px] h-[210px]  bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
              </div>
              <div className="3rd-column relative flex flex-col gap-10">
                <div className="lg:w-[265px] lg:h-[200px]  w-[315px] h-[210px] rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase1"
                    src={phase1}
                    className="rounded-[4px] w-full h-full"
                  />
                  <div className="absolute top-0 rounded-[4px] lg:w-[265px] lg:h-[200px]  w-[315px] h-[210px] bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
                <div className="lg:w-[265px] lg:h-[250px]  w-[315px] h-[270px] rounded-[4px]">
                  {" "}
                  <Image
                    alt="phase2"
                    src={phase2}
                    className="rounded-[4px]  w-full h-full"
                  />
                  <div className="absolute bottom-0 rounded-[4px] lg:w-[265px] lg:h-[250px] w-[315px] h-[270px]  bg-black opacity-[0.3] text-white flex justify-between flex-col p-8">
                    <div className=" flex flex-col">
                      <span className="text-xs">13 Properties</span>
                      <span className="text-base">Fort</span>
                    </div>
                    <span className="text-base">More Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DhaPhases;
