import { SubscriptionPlanTypes } from "./types";

export const SUBSCRIPTION: SubscriptionPlanTypes[] = [
  {
    type: "starter",
    period: "monthly",
    amount: 15,
    desc: "",
    features: [
      {
        text: "1 Team Group Chat",
        offered: true,
      },
      {
        text: "Automate your Team Attendance",
        offered: true,
      },
    ],
    activated: true,
  },
  {
    type: "pro",
    period: "monthly",
    amount: 39,
    desc: "",
    activated: false,
    features: [],
  },
];
