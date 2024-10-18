import CreateGroupForm from "@/components/Generals/CreateGroupForm";
import { SheetContainer } from "@/components/Generals/SheetContainer";
import { useToast } from "@/hooks/use-toast";
import { useAppSelector } from "@/store/hooks";
import { api } from "@/trpc/react";
import { getError } from "@/utils/error";
import { LucideMessageSquarePlus, LucidePhone } from "lucide-react";
import { ReactNode, useState } from "react";
interface CreateWhatsappGroupProps {
  triggerComponent: ReactNode;
}
export default function CreateWhatsappGroup({
  triggerComponent,
}: CreateWhatsappGroupProps) {
  const { toast } = useToast();
  const [errMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const whapi = useAppSelector((state) => state.whapi);
  const createGroupChat = api.groupChats.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Whatsapp group chat was registered",
        description:
          "Yayy! Congratulation you have created your first group chat. You can use this for receiving monitoring updates from attendees.",
      });
      setErrorMsg("");
    },
    onError: () => {
      setErrorMsg(
        "Group chat was created but was failed to register here. Please try again!",
      );
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  async function createGroupHandler() {
    setErrorMsg("");
    setIsLoading(true);
    try {
      const params = {
        subject: whapi.groupChatName,
        participants: whapi.participants,
      };

      console.log("params", params);
      const result = await fetch("/api/whapi/group/create", {
        method: "POST",
        body: JSON.stringify(params),
      });
      const data = await result.json();
      if (data.status != 200) {
        setErrorMsg(data.message);
      }

      console.log("data:", data);

      await createGroupChat.mutateAsync({
        groupChatId: data.id,
        groupChatType: data.type,
        createdAt: data.timestamp,
        groupName: data.created_at,
      });
    } catch (err) {
      console.log(
        "GROUP CHAT CREATION REQUEST FAILED: ",
        getError(err).message,
      );
      setErrorMsg(getError(err).message);
      //return new Error(getError(err).message);
    }
  }

  return (
    <SheetContainer
      title="Create Whatsapp Group"
      description="Create group in Whatsapp and invite members to join."
      triggerComponent={triggerComponent}
      submitBtn={{
        text: "Create Group",
        icon: <LucideMessageSquarePlus size={20} />,
        isLoading,
        disabled: whapi.participants.length == 0,
        onSubmit: createGroupHandler,
      }}
      otherButtons={[]}
    >
      <CreateGroupForm />
    </SheetContainer>
  );
}
