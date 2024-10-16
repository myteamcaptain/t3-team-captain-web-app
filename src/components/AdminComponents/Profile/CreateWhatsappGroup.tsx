import CreateGroupForm from "@/components/Generals/CreateGroupForm";
import { SheetContainer } from "@/components/Generals/SheetContainer";
import { ReactNode } from "react";
interface CreateWhatsappGroupProps {
  triggerComponent: ReactNode;
}
export default function CreateWhatsappGroup({
  triggerComponent,
}: CreateWhatsappGroupProps) {
  return (
    <SheetContainer
      title="Create Whatsapp Group"
      description="Create group in Whatsapp and invite members to join."
      triggerComponent={triggerComponent}
    >
      <CreateGroupForm />
    </SheetContainer>
  );
}
