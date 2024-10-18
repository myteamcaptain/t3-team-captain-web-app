import { getError } from "../error";

export async function verifyPhoneNumber(phone: string) {
  try {
    const result = await fetch("/api/whapi/group", {
      method: "POST",
      body: JSON.stringify({
        phone,
      }),
    });
    return await result.json();
  } catch (err: unknown) {
    const errMsg = `PHONE NUMBER VERIFICATION ERROR: ${getError(err).message}`;
    console.log(errMsg);
    return new Error(errMsg);
  }
}

export async function createGroupChat(phone: string) {
  try {
    const result = await fetch("/api/whapi/group/create", {
      method: "POST",
      body: JSON.stringify({
        phone,
      }),
    });
    return await result.json();
  } catch (err: unknown) {
    const errMsg = `GROUP CHAT CREATION FAILED: ${getError(err).message}`;
    console.log(errMsg);
    return new Error(errMsg);
  }
}
