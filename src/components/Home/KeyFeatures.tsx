"use client";

import parse from "html-react-parser";
import Wrapper from "../Generals/Wrapper";
import Image from "next/image";
import { KEY_FEATURE_LIST_LEFT, KEY_FEATURE_LIST_RIGHT } from "@/lib/const";
import type { KeyFeatureType } from "@/lib/types";
import { motion } from "framer-motion";

export default function KeyFeatures() {
  function FeatureComponent(list: KeyFeatureType) {
    const { Icon, animationDelay, align } = list;
    const coordinate = align == "left" ? "-10px" : "10px";
    return (
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: coordinate }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2, delay: animationDelay }}
      >
        <span className="flex items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary p-1">
            {Icon && <Icon size={24} color="#ffffff" className="font-[600]" />}
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {list.label}
          </h3>
        </span>
        {parse(list.content)}
      </motion.div>
    );
  }

  function formatFeatureList(list: KeyFeatureType[], align: "left" | "right") {
    return list.map((list: KeyFeatureType, itemIndex: number) => {
      const listProps = { ...list, align };
      return <FeatureComponent key={`feature_${itemIndex}`} {...listProps} />;
    });
  }

  return (
    <div className="relative bg-slate-100 py-44 dark:-z-10 dark:bg-primary-foreground">
      <Wrapper className="dark-gradial z-10 flex w-full flex-col justify-center px-5">
        <h1 className='texts-4xl text-cente relative z-10 scroll-m-20 font-extrabold tracking-tight after:absolute after:left-0 after:right-0 after:top-6 after:-z-10 after:content-[url("/line-stroke.svg")] lg:text-5xl'>
          Key Features
        </h1>
        <div className="mt-20 grid w-full grid-cols-3 gap-4">
          <div className="flex flex-col space-y-12 pt-10">
            {formatFeatureList(KEY_FEATURE_LIST_LEFT, "left")}
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
            >
              <Image
                src="/features.png"
                height={250}
                width={250}
                alt="Banner Image"
                className="z-10 h-auto w-full justify-center"
              />
            </motion.div>
          </div>
          <div className="flex flex-col space-y-12 pt-10">
            {formatFeatureList(KEY_FEATURE_LIST_RIGHT, "right")}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
