import Banner from "@/components/Home/Banner";
import KeyFeatures from "@/components/Home/KeyFeatures";
import HowToUse from "@/components/Home/HowToUse";
import CustomerReviews from "@/components/Home/CustomerReviews";
import Newsletter from "@/components/Home/Newsletter";
import PricingSection from "@/components/Home/Pricing";
import Introduction from "@/components/Home/Introduction";
import PricingBox from "@/components/Home/PricingBox";
import PageLayouts from "@/components/Layouts";

export default function Home() {
  return (
    <PageLayouts>
      <Banner />
      <Introduction />
      <KeyFeatures />
      {/* <PricingBox/> */}
      <PricingSection />
      <HowToUse />
      <CustomerReviews />
      <Newsletter />
    </PageLayouts>
  );
}
