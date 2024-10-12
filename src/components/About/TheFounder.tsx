"use client";

import { FOUNDER_NAME, BUSINESS_NAME } from "@/lib/const";
import Wrapper from "../Generals/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TheFounder() {
  const MotionImage = motion.create(Image);
  return (
    <div className="bg-gradient-to-b from-background to-primary-foreground  w-full ">
      <Wrapper>
        <div className="w-full bg-background flex flex-col-reverse space-y-4 lg:space-y-4  lg:flex-row">
          <div className="bg-primary-foreground w-full lg:w-[70%] min-h-80 rounded-tr-[80px] flex items-center py-20 px-10">
            <motion.p className="w-full lg:w-[60%] indent-8 text-[12px] md:text-[14px] lg:text-base">
              <b className="text-primary">{FOUNDER_NAME}</b> is the visionary
              behind <b className="text-primary">{BUSINESS_NAME}</b>, bringing
              years of experience and a passion for innovation to the forefront
              of the business. With a deep understanding of technology and its
              transformative potential,{" "}
              <b className="text-primary">{BUSINESS_NAME}</b> has dedicated
              their career to helping businesses harness the power of digital
              tools to drive growth and efficiency. They are a results-driven
              leader with a clear focus on building scalable, sustainable
              solutions that align with the evolving needs of modern
              enterprises. Their leadership is defined by a commitment to
              excellence, a collaborative spirit, and an unwavering belief in
              the potential of technology to reshape industries and create
              positive impact. Under their guidance,{" "}
              <b className="text-primary">{BUSINESS_NAME}</b> &nbsp; continues
              to deliver cutting-edge solutions that empower businesses to
              thrive in today’s digital age.
            </motion.p>
          </div>
          <div className="w-full lg:w-[25%] bg-background-foreground lg:relative flex items-center justify-center">
            <div className="bg-primary  w-44 lg:w-80  h-44 lg:h-80 rounded-b-full sm: rounded-t-full lg:rounded-tl-none overflow-hidden border-none outline-none lg:absolute lg:top-[20%] lg:left-[-50%] pt-10">
              <MotionImage
                src="/images/founder.png"
                height={400}
                width={400}
                className=""
                alt="Founder"
              />
            </div>
            <div className="hidden lg:block lg:absolute text-center leading-none bg-secondary text-primary-foreground px-10 rounded-full py-2 top-[65%] left-[-60%]">
              <h3 className="font-[600] uppercase text-white">Hyejee Bae</h3>
              <p className="text-primary">Founder</p>
            </div>
          </div>
          <motion.h1 className="lg:hidden scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-5xl text-center">
            The <span className="text-primary">Founder</span>
          </motion.h1>
        </div>
      </Wrapper>
    </div>
  );
}
