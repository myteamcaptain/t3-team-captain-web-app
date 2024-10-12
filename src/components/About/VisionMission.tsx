"use client";

import Image from "next/image";
import Wrapper from "../Generals/Wrapper";

export default function VisionMission() {
  return (
    <div className="py-5 lg:py-20 ">
      <Wrapper className="lg:space-x-12 flex flex-col lg:flex-row">
        <div className="flex items-center justify-center lg:basis-1/3 ">
          <div className="lg:uppercase leading-none py-5 lg:py-20 relative flex lg:flex-col space-x-2">
            <p className="lg:font-[600] text-2xl lg:text-6xl ">Our</p>
            <p className="text-primary text-2xl lg:text-7xl lg:font-[600]">
              Mission
            </p>
            <p className="lg:font-[300]  text-2xl lg:text-7xl">Vision</p>
            <Image
              src="/target.svg"
              alt="Vision, Mission, Values"
              width={500}
              height={500}
              className="absolute w-28 drop-shadow-md top-2 left-[25%] hidden lg:block"
            />
          </div>
        </div>
        <div className="lg:px-10 lg:basis-2/3 space-y-8 text-justify text-[12px] md:text-[14px] lg:text-base leading-2">
          <p>
            To be a leading force in the tech industry, revolutionizing
            businesses through innovative and scalable solutions. We strive to
            empower companies by integrating cutting-edge technologies that
            foster growth, enhance productivity, and inspire transformative
            change globally. Our vision is to build a sustainable and inclusive
            digital future where technology bridges gaps, improves lives, and
            drives economic success.
          </p>
          <p>
            Our mission is to deliver high-quality, customized tech solutions
            that exceed client expectations and adapt to the ever-evolving
            digital landscape. By leveraging a blend of expertise, creativity,
            and collaboration, we aim to empower businesses with technology that
            enhances operational efficiency, streamlines processes, and
            accelerates growth. We are committed to fostering strong, long-term
            partnerships while maintaining a culture of innovation, integrity,
            and social responsibility.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
