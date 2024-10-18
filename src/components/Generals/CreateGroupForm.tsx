import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddParticipants from "../AdminComponents/Schedule/AddParticipants";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { setGroupChatName } from "@/store/reducer/whapiSlice";

export default function CreateGroupForm() {
  const whapi = useAppSelector((state) => state.whapi);
  const dispatch = useDispatch();

  return (
    <div className="grid gap-4 py-4">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="name" className="text-left">
          Whatsapp Group Name
        </Label>
        <Input
          id="name"
          value={whapi.groupChatName}
          className="col-span-3"
          onChange={(e) => dispatch(setGroupChatName(e.target.value))}
        />
      </div>
      <AddParticipants />
    </div>
  );
}
