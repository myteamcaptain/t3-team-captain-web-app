"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Wrapper from "../../Generals/Wrapper";

export default function AppSection() {
  return (
    <div className="relative flex justify-center bg-slate-200 pb-[100px] dark:bg-primary-foreground">
      <Wrapper className="w-full justify-between gap-x-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
          className="flex w-full justify-center"
        >
          <Image
            src="/banner-min.png"
            height={400}
            width={400}
            alt="Banner Image"
            className="z-10 w-[40rem] justify-center"
          />
        </motion.div>
      </Wrapper>
    </div>
  );
}
