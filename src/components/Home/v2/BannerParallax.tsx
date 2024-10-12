"use client";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Wrapper from "../../Generals/Wrapper";
import { Button } from "@/components/ui/button";
import { floatVariant } from "@/lib/framer-animation-setting";
import { HOW_TO_USE_PROCESS } from "@/lib/const";
import type { HowToUseListProps } from "@/lib/types";
import { LucideMoveRight } from "lucide-react";

export default function BannerParallax() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 200], [200, 0]);
  const opacity = useTransform(
    scrollY,
    [-100, 0, 100, 200, 300],
    [0, 1, 0.5, 0.1, 0],
  );

  const MotionButton = motion.create(Button);
  return (
    <div className="flex flex-col justify-center overflow-hidden bg-slate-200 dark:bg-primary-foreground">
      <div className=" ">
        <Wrapper className="relative z-10 max-h-full w-full flex-col justify-between gap-x-4 py-20">
          <motion.div
            style={{ y: y1 }}
            className="z-10 flex w-full flex-col items-center space-y-8"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, x: "-5px" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="shadow-red-primary scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0"
                >
                  Automate Your Team <br /> Attendance Management with
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, x: "-5px" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, delay: 0.2 }}
                  className="scroll-m-20 bg-gradient-to-b from-primary to-green-700 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent lg:text-7xl"
                >
                  Team Captain
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, x: "-5px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
                className="max-w-[700px] text-center"
              >
                Say goodbye to last-minute scrambling and uncertain game days.
                Automate your team attendance, so you can focus on what
                matters—playing the game.
              </motion.p>
            </div>
            <MotionButton
              initial={{ opacity: 0, x: "-5px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}
              className="space-x-2 rounded-full rounded-bl-md bg-gradient-to-b from-primary to-green-700 dark:bg-primary dark:text-foreground"
              size="xl"
            >
              <p>Sign Up</p> <LucideMoveRight />
            </MotionButton>
          </motion.div>
          {/* {BANNER_BOT_TEAM_TYPE_V2_NEW.map(
          (bannerIcon: BannerSportsV2NewType, indexIcon: number) => (
            <motion.div
              key={indexIcon}
              animate={["initial"]}
              whileHover={["grow"]}
              variants={floatVariant(bannerIcon.delay)}
              className={`border bg-primary-foreground p-1 rounded-full absolute ${bannerIcon.coordinate[0]} ${bannerIcon.coordinate[1]} -z-1`}
            >
              <Image
                src={`${bannerIcon.image}`}
                alt=""
                className={`${bannerIcon.width}`}
                width={140}
                height={140}
              />
            </motion.div>
          )
        )} */}
        </Wrapper>
      </div>
      <motion.div className="pt-2" style={{ y: y2 }}>
        <Wrapper className="flex-col">
          <motion.div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
            className="z-10 flex w-full justify-center"
          >
            <Image
              src="/banner-min.png"
              height={400}
              width={400}
              alt="Banner Image"
              className="w-[40rem] justify-center"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-y-4">
            {HOW_TO_USE_PROCESS.map(
              (steps: HowToUseListProps, stepIndex: number) => {
                return (
                  <motion.div
                    key={stepIndex}
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={floatVariant(0, { y: [-2, 2] })}
                    className="flex items-center space-x-2"
                  >
                    <div className="rounded-full border-2 border-dashed border-white p-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 text-white">
                        <p> {stepIndex + 1}</p>
                      </span>
                    </div>
                    <p className="text-[14px] leading-none">{steps.label}</p>
                  </motion.div>
                );
              },
            )}
          </div>
        </Wrapper>
      </motion.div>
      {/* <Image
        src="/motherboard.svg"
        height={700}
        width={700}
        style={{ opacity: 0.1 }}
        className="top-0 absolute right-0 w-[70%] scale-x-[-1] pr-2"
        alt="Motherboard Left"
      />
      <Image
        src="/motherboard.svg"
        height={700}
        width={700}
        style={{ opacity: 0.1 }}
        className="top-0 absolute left-0 w-[70%] "
        alt="Motherboard Right"
      /> */}
    </div>
  );
}
