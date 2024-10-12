import PageLayouts from "@/components/Layouts";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayouts>
      <section className="h-content">{children}</section>
    </PageLayouts>
  );
}
