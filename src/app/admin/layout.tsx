import PageLayouts from "@/components/Layouts";
import AdminPageLayouts from "@/components/Layouts/Admin";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPageLayouts>
      <section className="min-h-content">{children}</section>
    </AdminPageLayouts>
  );
}
