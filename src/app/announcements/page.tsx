import Wrapper from "@/components/Generals/Wrapper";
import PageLayouts from "@/components/Layouts";
import { getAppNameAbv } from "@/lib/helperFn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getAppNameAbv("Announcements"),
};

export default function AnnouncementPage() {
  return (
    <PageLayouts>
      <Wrapper>Announcement page</Wrapper>
    </PageLayouts>
  );
}
