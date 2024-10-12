"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Wrapper from "./../Generals/Wrapper";
import { Button } from "@/components/ui/button";
import { BANNER_BOT_TEAM_TYPE } from "@/lib/const";
import type { BannerSportsCoordinateType, BannerSportsType } from "@/lib/types";
import BannerWaveSVG from "../Generals/BannerWaveSVG";
import { floatVariant } from "@/lib/framer-animation-setting";
import { formatter } from "@/lib/helperFn";
import { SUBSCRIPTION } from "@/lib/subscription-plan-settings";

export default function Banner() {
  function GetSportTeamList() {
    return BANNER_BOT_TEAM_TYPE.map((list: BannerSportsType, index: number) => {
      const { delay, coordinate } = list;
      const { top, bottom, right, left, zIndex } = coordinate;
      const stypeList: BannerSportsCoordinateType = {};
      if (top) {
        stypeList.top = top;
      }

      if (bottom) {
        stypeList.bottom = bottom;
      }

      if (right) {
        stypeList.right = right;
      }

      if (left) {
        stypeList.left = left;
      }

      if (zIndex) {
        stypeList.zIndex = zIndex;
      }

      return (
        <motion.div
          key={`sport_${index}`}
          className={`absolute flex space-x-2 rounded-full bg-white px-4 py-2 text-secondary shadow-md`}
          style={stypeList}
          animate={["initial"]}
          whileHover={["grow"]}
          variants={floatVariant(delay)}
        >
          <Image
            src={list.image}
            height={20}
            width={20}
            alt={list.label}
            className="h-auto w-6"
          />
          <p>{list.label}</p>
        </motion.div>
      );
    });
  }

  const MotionButton = motion.create(Button);
  return (
    <div className="relative flex min-h-[700px] justify-center bg-slate-200 pb-[100px] dark:bg-primary-foreground">
      <Wrapper className="w-full justify-between gap-x-4">
        <div className="w-full space-y-8">
          <div className="max-w-[500px] space-y-4">
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: "-5px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
              >
                Automate Your Team <br /> Attendance Management with
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: "-5px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                className="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-7xl"
              >
                Team Captain
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, x: "-5px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
            >
              Say goodbye to last-minute scrambling and uncertain game days.
              Automate your team attendance, so you can focus on what
              matters—playing the game.
            </motion.p>
          </div>
          <div className="">
            <MotionButton
              initial={{ opacity: 0, x: "-5px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}
              //whileHover={{ scale: 1.2 }}
              className="flex flex-col rounded-full bg-primary dark:bg-primary dark:text-foreground"
              size="xl"
            >
              <p>Sign Up Now</p>
            </MotionButton>
            <motion.p
              initial={{ opacity: 0, x: "-5px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.9 }}
              className=" "
            >
              {" "}
              for only{" "}
              <span className="text-[24px] font-[600] text-primary">
                {formatter.format(SUBSCRIPTION[0]!.amount)}
              </span>{" "}
              a month.
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
          className="relative flex w-full justify-center"
        >
          <Image
            src="/banner-min.png"
            height={400}
            width={400}
            alt="Banner Image"
            className="z-10 justify-center"
          />
          <GetSportTeamList />
        </motion.div>

        <BannerWaveSVG fill="" svgProps={{}} />
      </Wrapper>
    </div>
  );
}
