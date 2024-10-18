import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import type { Value } from "react-phone-number-input";
import { useState } from "react";
import { api } from "@/trpc/react";
import { LucideRotateCw, LucideTrash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addParticipants,
  deleteParticipants,
} from "@/store/reducer/whapiSlice";
import { Button } from "@/components/ui/button";
import { verifyPhoneNumber } from "@/utils/actions/whapiFn";
import { whapiErrorMsgFn } from "@/utils/whapi";

export default function AddParticipants() {
  const [phone, setPhone] = useState<Value | undefined>();
  const whapi = useAppSelector((state) => state.whapi);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>("");
  const dispatch = useAppDispatch();

  async function addParticipantHandler(participant: string) {
    setIsVerifying(true);
    const exist = whapi.participants.find(
      (phoneNumber: string) => phoneNumber == participant,
    );

    if (exist) {
      setIsVerifying(false);
      setErrorMsg(`'${participant}' was already on the list.`);
      return;
    }

    const result = await verifyPhoneNumber(participant);
    if (result instanceof Error) {
      setErrorMsg(result.message);
    }

    if (result.status != 200) {
      setErrorMsg(whapiErrorMsgFn(result.status).message);
      setIsVerifying(false);
      return;
    }
    dispatch(addParticipants(participant));
    setPhone(undefined);
    setIsVerifying(false);
    setErrorMsg("");
  }

  function removeParticipantsHandler(participant: string) {
    alert(participant);
    dispatch(deleteParticipants(participant));
  }
  return (
    <div className="flex flex-col space-y-4">
      <Label htmlFor="username" className="text-left">
        Participants
      </Label>
      <div className="flex space-x-2">
        <PhoneInput
          placeholder="Enter Whatsapp phone number"
          value={phone}
          onChange={setPhone}
          className="h-10 w-full py-2"
          limitMaxLength={true}
          numberInputProps={{
            style: {
              padding: "10px",
              borderRadius: "5px",
            },
          }}
          error={
            phone
              ? isValidPhoneNumber(phone)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
        />
        <Button
          disabled={isVerifying}
          type="button"
          onClick={() => addParticipantHandler(phone as string)}
        >
          {isVerifying && <LucideRotateCw size={16} className="animate-spin" />}
          {!isVerifying && "Add"}
        </Button>
      </div>
      {errorMsg && (
        <p className="text-center text-xs text-red-500">{errorMsg}</p>
      )}
      <div className="gap-y-2 space-x-1">
        {whapi.participants.map((item: string, index: number) => (
          <span key={`participants_${index}`}>
            <Badge variant="secondary" className="space-x-2">
              <p>{item}</p>
              <LucideTrash2
                size={16}
                color="red"
                className="w- cursor-pointer rounded-full p-[0.5px] hover:bg-red-300"
                onClick={() => removeParticipantsHandler(item)}
              />
            </Badge>
          </span>
        ))}
      </div>
    </div>
  );
}
