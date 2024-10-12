import SubscriptionCard from "./../Generals/Card";
import { SUBSCRIPTION } from "@/lib/subscription-plan-settings";
import type { SubscriptionPlanTypes } from "@/lib/types";
import Wrapper from "../Generals/Wrapper";
export default function PricingBox() {
  return (
    <div className="bg-secondary py-32 dark:bg-background">
      <Wrapper className="w-full flex-col">
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
