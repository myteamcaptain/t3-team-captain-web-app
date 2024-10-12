"use client";

import { BUSINESS_NAME } from "@/lib/const";
import Wrapper from "../Generals/Wrapper";
import { motion } from "framer-motion";

export default function OurCompany() {
  return (
    <Wrapper className="space-y-4 flex-col items-start py-5 lg:py-20 text-[12px] md:text-[14px] lg:text-base">
      <div className="w-full space-y-8 bg-background">
        <motion.h1 className=" scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-5xl text-center">
          Our <span className="text-primary">Company</span>
        </motion.h1>
        <div className="space-y-8 leading-2 text-justify">
          <motion.p className="indent-8">
            <b className="text-primary">{BUSINESS_NAME}</b> was founded in 2023
            with a mission to provide innovative technology solutions that
            empower businesses to succeed in the digital age. Starting as a
            small tech startup, the company quickly gained a reputation for
            delivering high-quality, customized services that address the unique
            needs of clients across various industries. With a focus on
            innovation, adaptability, and client satisfaction.
          </motion.p>
          <motion.p className="indent-8">
            Over the years, the company has grown both in size and scope,
            attracting a diverse range of clients and forming strategic
            partnerships that fuel continued growth. Today,{" "}
            <b className="text-primary">{BUSINESS_NAME}</b> &nbsp; stands as a
            trusted leader in the tech space, known for driving efficiency and
            growth through transformative digital solutions.
          </motion.p>
        </div>
      </div>
    </Wrapper>
  );
}
