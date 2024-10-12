"use client";

import Wrapper from "../Generals/Wrapper";
import SubscriptionCard from "../Generals/Card";
import { SUBSCRIPTION } from "@/lib/subscription-plan-settings";
import type { SubscriptionPlanTypes } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatter } from "@/lib/helperFn";

export default function PricingSection() {
  const MotionImage = motion.create(Image);
  const pricing = SUBSCRIPTION.find(
    (plan: SubscriptionPlanTypes) => plan.type == "starter",
  );

  return (
    <div className="px-5 py-44" id="pricing">
      <Wrapper className="flex w-full flex-row space-x-8">
        <motion.div
          initial={{ x: "-10px" }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="basis-1/2 space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="texts-4xl scroll-m-20 font-extrabold tracking-tight lg:text-5xl"
            >
              Let&apos;s Get Started
            </motion.h1>
            <div className="pt-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                For just <b>{formatter.format(pricing?.amount ?? 0)}/month</b>,
                you can eliminate <b>90%</b> of the stress of being a team
                captain. That’s only <b>${Number(pricing?.amount ?? 0) / 4}</b>{" "}
                per week—less than the cost of a cup of coffee.
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Simple, transparent pricing. <b>No hidden fees</b>. Cancel
                anytime.
              </motion.p>
            </div>
          </div>
          <MotionImage
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src="/pricing.png"
            alt=""
            className="w-full"
            height={300}
            width={300}
          />
        </motion.div>
        <div className="flex basis-1/2 justify-center space-x-4">
          {SUBSCRIPTION.filter(
            (packageType: SubscriptionPlanTypes) =>
              packageType.activated == true,
          ).map((packageType: SubscriptionPlanTypes, index: number) => (
            <SubscriptionCard
              key={index}
              type={packageType.type}
              desc={packageType.desc}
              price={packageType.amount}
              features={packageType.features}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
