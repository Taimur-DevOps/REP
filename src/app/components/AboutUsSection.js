import React from "react";
import Button from "./Button";
import Image from "next/image";
import aboutImg from "@/assets/aboutUs.jpeg";

const AboutUsSection = () => {
  return (
    <>
      <div className="bg-bgGray py-24 lg:px-0 px-7">
        <div className="lg:container mx-auto">
          <div className="flex lg:gap-16 md:gap-10 gap-10 flex-col lg:flex-row md:flex-row">
            <div className="lg:w-[30%] md:w-auto w-full">
              <div className="h-[316px] w-[316px]">
                <Image
                  alt="about us"
                  className="w-full h-full"
                  src={aboutImg}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:w-[70%] w-full">
              <h2 className="text-4xl font-bold font-nokara lg:mb-2">
                About Us
              </h2>
              <p className="text-base font-thin leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum at fermentum felis. Phasellus eget vehicula sem. Duis
                malesuada sapien nec quam gravida accumsan. Nam vel quam in
                turpis ultrices consectetur ut nec orci. Integer nec laoreet
                diam, et rhoncus metus. Cras nunc ipsum, aliquam sit amet orci
                a, pharetra ultricies sem
              </p>
              <div>
                <Button text="About Us" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
