"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideCheck, LucideHeart } from "lucide-react";
import { SubscriptionFeatureProps, SubscriptionTypes } from "@/lib/types";
import { formatter } from "@/lib/helperFn";
import { motion } from "framer-motion";
import SubscribeButton from "../Subscription/SubscribeButton";
export function SubscriptionCard({
  type,
  desc,
  price = 0,
  features = [],
}: {
  type: SubscriptionTypes;
  desc?: string;
  price?: number;
  features?: SubscriptionFeatureProps[];
}) {
  const MotionCard = motion.create(Card);
  return (
    <MotionCard
      initial={{ opacity: 0, x: "10px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-[350px] flex-stretch"
    >
      <CardHeader>
        <CardTitle className="capitalize">{type}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <p className="text-center text-4xl font-[900]">
            {formatter.format(price)}
          </p>
          <p className="text-center">per month</p>
        </div>
        <ul>
          {features.map(
            (featuresItem: SubscriptionFeatureProps, featureIndex: number) => (
              <li className="flex space-x-2 " key={`feature_${featureIndex}`}>
                <div className="bg-primary h-5 w-5 flex items-center justify-center rounded-full">
                  <LucideCheck size={16} color="#ffffff" />
                </div>
                <p>{featuresItem.text}</p>
              </li>
            )
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <SubscribeButton />
      </CardFooter>
    </MotionCard>
  );
}

export default SubscriptionCard;
