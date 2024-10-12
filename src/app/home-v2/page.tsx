import KeyFeatures from "@/components/Home/KeyFeatures";
import HowToUse from "@/components/Home/HowToUse";
import CustomerReviews from "@/components/Home/CustomerReviews";
import Newsletter from "@/components/Home/Newsletter";
import PricingSection from "@/components/Home/Pricing";
import BannerNew from "@/components/Home/v2/BannerParallax";
import IntroductionV2 from "@/components/Home/v2/IntroductionV2";
import PageLayouts from "@/components/Layouts";

export default function HomeV2() {
  return (
    <PageLayouts>
      <BannerNew />
      <IntroductionV2 />
      <KeyFeatures />
      <HowToUse />
      <CustomerReviews />
      {/* <PricingSection /> */}
      <Newsletter />
    </PageLayouts>
  );
}
