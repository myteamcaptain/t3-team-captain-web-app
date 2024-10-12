"use client";

import Wrapper from "../../Generals/Wrapper";
import { INTRODUCTION_LIST } from "@/lib/const";
import type { IntroListProps } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { floatVariant } from "@/lib/framer-animation-setting";
export default function IntroductionV2() {
  return (
    <div className="bg-slate-200 py-32 dark:bg-primary-foreground">
      <Wrapper className="flex w-full flex-col space-y-8">
        <div className="flex space-x-8">
          <div className="relative flex basis-1/2 items-center justify-center">
            <Image
              src="/images/intro-image.jpeg"
              alt=""
              height={200}
              width={200}
              className="w-80 bg-white p-2 shadow-md"
            />
          </div>
          <div className="basis-1/2 space-y-8">
            {INTRODUCTION_LIST.map(
              (list: IntroListProps, listIndex: number) => (
                <div className="space-y-2" key={`intro_${listIndex}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="flex items-center space-x-2"
                  >
                    <motion.div
                      animate={["initial"]}
                      whileHover={["grow"]}
                      variants={floatVariant(0.1, { y: [-2, 2] })}
                      className="rounded-full border-4 border-dashed border-secondary p-1"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <p>{listIndex + 1}</p>
                      </div>
                    </motion.div>
                    <p className="font-[600]">{list.title}</p>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className=""
                  >
                    {list.content}
                  </motion.p>
                </div>
              ),
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
