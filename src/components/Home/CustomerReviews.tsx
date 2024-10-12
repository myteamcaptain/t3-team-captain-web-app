"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "../Generals/Wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { CUSTOMER_REVIEW_LIST } from "@/lib/const";
import type { CustomerReviewType } from "@/lib/types";
import { motion } from "framer-motion";
export default function CustomerReviews() {
  return (
    <div className="bg-slate-200 px-5 py-44 dark:bg-primary-foreground">
      <h1 className="texts-4xl mb-20 scroll-m-20 text-center font-extrabold tracking-tight lg:text-5xl">
        Testimonials
      </h1>
      <Wrapper className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-stretch">
            {CUSTOMER_REVIEW_LIST.map(
              (carouselItem: CustomerReviewType, carouselIndex: number) => (
                <CarouselItem
                  key={`carousel_${carouselIndex}`}
                  className="flex md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-primary p-8 pt-10">
                    <div className="mb-10 space-y-8">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="flex justify-center"
                      >
                        <Avatar className="h-28 w-28 border-8 border-background">
                          <AvatarImage
                            src={carouselItem.profileImg}
                            alt={carouselItem.customerName}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div className="flex flex-col items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ ease: "easeOut", duration: 2 }}
                          className="flex"
                        >
                          <Star fill="yellow" strokeWidth={0} />
                          <Star fill="yellow" strokeWidth={0} />
                          <Star fill="yellow" strokeWidth={0} />
                          <Star fill="yellow" strokeWidth={0} />
                          <Star fill="yellow" strokeWidth={0} />
                          {/* <StarHalf fill='yellow' strokeWidth={0} />
                              {[4, 5].map((item, indedItem) => (
                                <Star
                                  key={`star_${indedItem}`}
                                  fill='#111'
                                  strokeWidth={0}
                                />
                              ))} */}
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="text-[14px] text-white"
                      >
                        &quot;{carouselItem.content}&quot;
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }}
                    >
                      <p className="justify-end text-center text-[18px] font-[600] uppercase text-white">
                        {carouselItem.customerName}
                      </p>
                      <p className="text-center text-slate-200">
                        {carouselItem.rank}
                      </p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Wrapper>
    </div>
  );
}
