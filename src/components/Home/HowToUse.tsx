"use client";

import Image from "next/image";
import Wrapper from "../Generals/Wrapper";
import { LucideChevronDown, LucideChevronUp } from "lucide-react";
import { HOW_TO_USE_PROCESS } from "@/lib/const";
import type { HowToUseListProps } from "@/lib/types";
import { motion } from "framer-motion";
import { floatVariant } from "@/lib/framer-animation-setting";

export default function HowToUse() {
  return (
    <div className="dark:bg-background-foreground bg-secondary py-44">
      <Wrapper className="w-full flex-col">
        <div className="w-full space-y-8">
          <h1 className="keyTitle texts-4xl mb-20 scroll-m-20 text-center font-extrabold tracking-tight text-white lg:text-5xl">
            How to Use
          </h1>
          <div className="flex justify-between">
            {HOW_TO_USE_PROCESS.map(
              (steps: HowToUseListProps, stepIndex: number) => {
                const definedLocation =
                  steps.position == "top" || steps.position == undefined;
                return (
                  <div
                    key={`step_${stepIndex}`}
                    className={`flex w-full items-center py-5 ${
                      definedLocation ? "flex-col-reverse" : "flex-col"
                    }`}
                  >
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-white p-2">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
                        <Image
                          src={steps.icon}
                          height={60}
                          width={60}
                          alt="Steps 1"
                          className="h-auto w-16 drop-shadow-md"
                        />
                      </div>
                    </div>
                    <div
                      className={`flex ${
                        definedLocation ? "flex-col-reverse" : "flex-col"
                      } items-center`}
                    >
                      <span className="h-14 w-0 border-2 border-dashed border-white" />

                      {definedLocation ? (
                        <LucideChevronUp color="white" />
                      ) : (
                        <LucideChevronDown color="white" />
                      )}
                    </div>
                    <motion.div
                      animate={["initial"]}
                      whileHover={["grow"]}
                      variants={floatVariant(0, { y: [-2, 2] })}
                      className="flex items-center justify-center space-x-2"
                    >
                      <div className="rounded-full border-2 border-dashed border-white p-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 text-white">
                          <p> {stepIndex + 1}</p>
                        </span>
                      </div>
                      <p className="text-[14px] leading-none text-white">
                        {steps.label}
                      </p>
                    </motion.div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
