import PageLayouts from "@/components/Layouts";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayouts>
      <section>{children}</section>
    </PageLayouts>
  );
}
