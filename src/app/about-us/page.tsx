import { getAppNameAbv } from "@/lib/helperFn";
import type { Metadata } from "next";

import OurCompany from "@/components/About/OurCompany";
import TheFounder from "@/components/About/TheFounder";
import VisionMission from "@/components/About/VisionMission";
export const metadata: Metadata = {
  title: getAppNameAbv("About Us"),
};

export default function AboutUs() {
  return (
    <div>
      <OurCompany />
      <TheFounder />
      <VisionMission />
    </div>
  );
}
